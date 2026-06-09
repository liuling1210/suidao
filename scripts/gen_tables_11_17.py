"""Generate table_1_1_11.js through table_1_1_17.js from docx XML."""
import xml.etree.ElementTree as ET
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
DOCX = ROOT / "temp_docx_extract" / "word" / "document.xml"
OUT = ROOT / "src" / "data" / "tables"

META = [
    (11, 10, "4.1.2-11", "中风化灰岩物理力学性质统计表（P2m）", "rockProperties"),
    (12, 11, "4.1.2-12", "中风化灰岩夹页岩物理力学性质统计表（P2m）", "rockProperties"),
    (13, 12, "4.1.2-13", "中风化灰岩物理力学性质统计表（P2q）", "rockProperties"),
    (14, 13, "4.1.2-14", "中风化页岩物理力学性质统计表（P1l）", "rockProperties"),
    (15, 14, "4.1.2-15", "中风化页岩物理力学性质统计表（S2h）", "rockProperties"),
    (16, 15, "4.1.2-16", "中风化白云质灰岩物理力学性质统计表（T1j2）", "standard"),
    (17, 16, "4.2.1-16", "中风化页岩物理力学性质统计表（断层角砾岩）", "rockProperties"),
]

NS = {"w": "http://schemas.openxmlformats.org/wordprocessingml/2006/main"}
W = "{http://schemas.openxmlformats.org/wordprocessingml/2006/main}"


def cell_text(cell):
    parts = []
    for t in cell.iter(f"{W}t"):
        if t.text:
            parts.append(t.text)
        if t.tail:
            parts.append(t.tail)
    return "".join(parts).strip()


def parse_table(tbl):
    rows = []
    for tr in tbl.findall("w:tr", NS):
        rows.append([cell_text(tc) for tc in tr.findall("w:tc", NS)])
    return rows


def is_stats_row(row):
    labels = {"统计件数", "平均值", "最小值", "最大值", "标准差", "变异系数", "小值平均值", "标准值", "样本数", "统计修正系数"}
    return row[0] in labels


def is_header_row(row):
    if not row:
        return True
    return row[0] in ("岩样编号", "样品编号") or row[0] == "" and row[1] in (
        "天然密度(g/cm3)",
        "天然重度(g/cm3)",
        "天然密度",
        "(g/cm3)",
        "MPa",
    )


def detect_shear_rowspan(rows):
    if len(rows) < 2:
        return 0
    first_phi = rows[0].get("shearPhi", "")
    first_c = rows[0].get("shearC", "")
    if not first_phi and not first_c:
        return 0
    for r in rows[1:]:
        if r.get("shearPhi") or r.get("shearC"):
            return 0
    return len(rows)


def parse_rock(rows):
    data_rows = [r for r in rows if not is_header_row(r) and not is_stats_row(r) and r[0] != "备注"]
    stats_rows = [r for r in rows if is_stats_row(r)]

    samples = []
    current = None

    for row in data_rows:
        sample_id = row[0]
        if sample_id:
            current = {"sampleId": sample_id, "rows": []}
            samples.append(current)

        if current is None:
            continue

        entry = {
            "density": row[1] if len(row) > 1 else "",
            "ucsNatural": row[2] if len(row) > 2 else "",
            "ucsSaturated": row[3] if len(row) > 3 else "",
            "softening": row[4] if len(row) > 4 else "",
            "tensile": row[5] if len(row) > 5 else "",
            "shearPhi": row[6] if len(row) > 6 else "",
            "shearC": row[7] if len(row) > 7 else "",
            "elasticModulus": row[8] if len(row) > 8 else "",
            "poisson": row[9] if len(row) > 9 else "",
        }
        current["rows"].append(entry)

    for s in samples:
        span = detect_shear_rowspan(s["rows"])
        if span > 1:
            s["shearRowspan"] = span

    stats = []
    for row in stats_rows:
        label = row[0]
        values = row[1:10]
        while len(values) < 9:
            values.append("")
        stats.append({"label": label, "values": values[:9]})

    return samples, stats


def parse_standard(rows):
    data_rows = [r for r in rows if not is_header_row(r) and not is_stats_row(r) and not r[0].startswith("备注")]
    stats_rows = [r for r in rows if is_stats_row(r)]

    samples = []
    current = None

    for row in data_rows:
        sample_id = row[0]
        if sample_id:
            current = {"sampleId": sample_id, "rows": []}
            samples.append(current)

        if current is None:
            continue

        entry = {
            "density": row[1] if len(row) > 1 else "-",
            "ucsNatural": row[2] if len(row) > 2 else "-",
            "ucsSaturated": row[3] if len(row) > 3 else "-",
            "softening": row[4] if len(row) > 4 else "-",
            "c": row[5] if len(row) > 5 else "-",
            "phi": row[6] if len(row) > 6 else "-",
        }
        current["rows"].append(entry)

    for s in samples:
        tri_rows = s["rows"]
        has_tri = any(r.get("c") not in ("", "-") or r.get("phi") not in ("", "-") for r in tri_rows)
        ucs_empty = all(r.get("ucsNatural") == "-" for r in tri_rows)
        if has_tri and ucs_empty and len(tri_rows) > 1:
            s["triaxialRowspan"] = len(tri_rows)

    stats = []
    for row in stats_rows:
        label = row[0]
        values = row[1:7]
        while len(values) < 6:
            values.append("")
        stats.append({"label": label, "values": values[:6]})

    return samples, stats


def js_str(s):
    return json_escape(str(s))


def json_escape(s):
    return '"' + s.replace("\\", "\\\\").replace('"', '\\"') + '"'


def emit_rock_row(row, indent="        "):
    parts = []
    for k in ["density", "ucsNatural", "ucsSaturated", "softening", "tensile", "shearPhi", "shearC", "elasticModulus", "poisson"]:
        v = row.get(k, "")
        parts.append(f'{k}: {js_str(v)}')
    return indent + "{ " + ", ".join(parts) + " }"


def emit_standard_row(row, indent="        "):
    parts = []
    for k in ["density", "ucsNatural", "ucsSaturated", "softening", "c", "phi"]:
        v = row.get(k, "-")
        if v == "":
            v = "-"
        parts.append(f'{k}: {js_str(v)}')
    return indent + "{ " + ", ".join(parts) + " }"


def emit_file(num, table_no, title, schema, samples, stats):
    const = f"TABLE_1_1_{num}"
    lines = [
        f"/** 表 {table_no} {title} */",
        f"export const {const} = {{",
        f'  id: "1-1-{num}",',
        f'  tableNo: {js_str(table_no)},',
        f"  title: {js_str(title)},",
    ]
    if schema == "rockProperties":
        lines.append('  schema: "rockProperties",')
    lines.append("  samples: [")

    for sample in samples:
        lines.append("    {")
        lines.append(f'      sampleId: {js_str(sample["sampleId"])},')
        if "shearRowspan" in sample:
            lines.append(f'      shearRowspan: {sample["shearRowspan"]},')
        if "triaxialRowspan" in sample:
            lines.append(f'      triaxialRowspan: {sample["triaxialRowspan"]},')
        lines.append("      rows: [")
        for row in sample["rows"]:
            if schema == "rockProperties":
                lines.append(emit_rock_row(row) + ",")
            else:
                lines.append(emit_standard_row(row) + ",")
        lines.append("      ],")
        lines.append("    },")

    lines.append("  ],")
    lines.append("  stats: [")
    for st in stats:
        vals = ", ".join(js_str(v) for v in st["values"])
        lines.append(f'    {{ label: {js_str(st["label"])}, values: [{vals}] }},')
    lines.append("  ],")
    lines.append('  remark: "",')
    lines.append("};")
    lines.append("")

    path = OUT / f"table_1_1_{num}.js"
    path.write_text("\n".join(lines), encoding="utf-8")
    print(f"Wrote {path.name} ({len(samples)} samples, {len(stats)} stat rows)")


def main():
    root = ET.parse(DOCX).getroot()
    tables = root.findall(".//w:tbl", NS)

    for num, docx_idx, table_no, title, schema in META:
        rows = parse_table(tables[docx_idx])
        if schema == "rockProperties":
            samples, stats = parse_rock(rows)
        else:
            samples, stats = parse_standard(rows)
        emit_file(num, table_no, title, schema, samples, stats)


if __name__ == "__main__":
    main()
