"""Generate table_1_2_1.js through table_1_2_6.js from docx XML."""
import xml.etree.ElementTree as ET
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
DOCX = ROOT / "temp_docx_extract" / "word" / "document.xml"
OUT = ROOT / "src" / "data" / "tables"

NS = {"w": "http://schemas.openxmlformats.org/wordprocessingml/2006/main"}
W = "{http://schemas.openxmlformats.org/wordprocessingml/2006/main}"

META = [
    (1, 17, "4.2.2-1", "进出洞口钻孔物探声波测井测试成果表"),
    (2, 18, "4.2.2-2", "洞身段钻孔物探声波测井测试成果表"),
    (3, 19, "4.2.2-3", "洞身段钻孔物探综合测井测试成果表"),
    (4, 20, "4.2.2-5", "洞身段钻孔物探综合测井测试成果表（一）"),
    (5, 21, "4.2.2-5", "洞身段钻孔物探综合测井测试成果表（二）"),
    (6, 22, "4.2.2-6", "洞身段钻孔物探综合测井测试成果表"),
]

HEADER_LABEL_OVERRIDES = {
    18: {6: "岩体完整性系数Kv范围值"},
}

HEADER_KEYS = {
    17: ["holeId", "depthRange", "lithology", "vpRange", "vpAvg", "blockVelocity", "kv", "kvCommon", "integrity"],
    18: ["holeId", "depthRange", "lithology", "vpRange", "vpCommon", "kv", "kvRange", "blockVelocity", "weathering"],
    19: ["holeId", "depthRange", "lithology", "vpRange", "vpAvg", "kv", "kvRange", "integrity"],
    20: ["holeId", "depthRange", "lithology", "vpRange", "vpAvg", "avgKv", "kvRange", "blockVelocity", "integrity"],
    21: ["holeId", "depthRange", "lithology", "vpRange", "vpAvg", "avgKv", "kvRange", "blockVelocity", "integrity"],
    22: ["holeId", "depthRange", "lithology", "vpRange", "vpAvg", "avgKv", "kvRange", "blockVelocity", "integrity"],
}


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


def is_repeat_header(row, header_row):
    if not row or not header_row:
        return False
    if row[0]:
        return False
    for cell in row[1:4]:
        if cell in header_row:
            return True
    return row[1] == "测试范围(m)" if len(row) > 1 else False


def js_str(s):
    return '"' + str(s).replace("\\", "\\\\").replace('"', '\\"') + '"'


def emit_file(num, table_no, title, headers, groups):
    const = f"TABLE_1_2_{num}"
    lines = [
        f"/** 表 {table_no} {title} */",
        f"export const {const} = {{",
        f'  id: "1-2-{num}",',
        f"  tableNo: {js_str(table_no)},",
        f"  title: {js_str(title)},",
        '  schema: "boreholeLog",',
        "  headers: [",
    ]

    for col in headers:
        lines.append(f'    {{ key: {js_str(col["key"])}, label: {js_str(col["label"])} }},')
    lines.append("  ],")
    lines.append("  groups: [")

    for group in groups:
        lines.append("    {")
        lines.append(f'      holeId: {js_str(group["holeId"])},')
        lines.append("      rows: [")
        for row in group["rows"]:
            parts = ", ".join(f'{k}: {js_str(v)}' for k, v in row.items())
            lines.append(f"        {{ {parts} }},")
        lines.append("      ],")
        lines.append("    },")

    lines.append("  ],")
    lines.append('  remark: "",')
    lines.append("};")
    lines.append("")

    path = OUT / f"table_1_2_{num}.js"
    path.write_text("\n".join(lines), encoding="utf-8")
    row_count = sum(len(g["rows"]) for g in groups)
    print(f"Wrote {path.name} ({len(groups)} holes, {row_count} rows)")


def build_groups(rows, keys):
    header_row = rows[0]
    data_rows = [r for r in rows[1:] if not is_repeat_header(r, header_row)]

    groups = []
    current = None

    for row in data_rows:
        hole_id = row[0] if len(row) > 0 else ""
        if hole_id:
            current = {"holeId": hole_id, "rows": []}
            groups.append(current)

        if current is None:
            continue

        entry = {}
        for i, key in enumerate(keys[1:], start=1):
            entry[key] = row[i] if i < len(row) else ""
        current["rows"].append(entry)

    return groups


def main():
    root = ET.parse(DOCX).getroot()
    tables = root.findall(".//w:tbl", NS)

    for num, docx_idx, table_no, title in META:
        rows = parse_table(tables[docx_idx])
        keys = HEADER_KEYS[docx_idx]
        headers = [{"key": keys[i], "label": rows[0][i]} for i in range(len(rows[0]))]
        overrides = HEADER_LABEL_OVERRIDES.get(docx_idx, {})
        for idx, label in overrides.items():
            if idx < len(headers):
                headers[idx]["label"] = label
        groups = build_groups(rows, keys)
        emit_file(num, table_no, title, headers, groups)


if __name__ == "__main__":
    main()
