"""Generate matrix-style survey tables from docx XML (tables 23-31)."""
import xml.etree.ElementTree as ET
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
DOCX = ROOT / "temp_docx_extract" / "word" / "document.xml"
OUT = ROOT / "src" / "data" / "tables"

NS = {"w": "http://schemas.openxmlformats.org/wordprocessingml/2006/main"}
W = "{http://schemas.openxmlformats.org/wordprocessingml/2006/main}"

META = [
    ("1_3_1", "1-3-1", 23, "1.3", "隧道设计参数建议值一览表"),
    ("2_1_1", "2-1-1", 24, "—", "围岩岩体完整程度定性划分表"),
    ("2_1_2", "2-1-2", 25, "5.2.2-2", "岩体完整度综合确定表"),
    ("2_1_3", "2-1-3", 26, "5.2.3-3", "隧道各级围岩分布情况表"),
    ("2_2_1", "2-2-1", 27, "—", "竖井工程地质评价"),
    ("3_1_1", "3-1-1", 28, "3.1-1", "白云山隧道大气降雨入渗系数法计算成果"),
    ("3_2_1", "3-2-1", 29, "3.2-1", "地下径流模数法涌水量计算表"),
    ("3_3_1", "3-3-1", 30, "3.3-1", "白云山隧道单洞涌水量分段预测表"),
    ("4_1_1", "4-1-1", 31, "—", "白云山隧道突水突泥段落预测表"),
]


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


def js_str(s):
    return '"' + str(s).replace("\\", "\\\\").replace('"', '\\"') + '"'


def emit_cell(cell, indent):
    if isinstance(cell, str):
        return f'{indent}{js_str(cell)},'
    parts = [f't: {js_str(cell["t"])}']
    if cell.get("cs", 1) > 1:
        parts.append(f'cs: {cell["cs"]}')
    if cell.get("rs", 1) > 1:
        parts.append(f'rs: {cell["rs"]}')
    if cell.get("className"):
        parts.append(f'className: {js_str(cell["className"])}')
    return f'{indent}{{ {", ".join(parts)} }},'


def emit_matrix(file_key, node_id, table_no, title, header_rows, body_rows, remark=""):
    const = f"TABLE_{file_key.upper()}"
    lines = [
        f"/** {title} */",
        f"export const {const} = {{",
        f'  id: {js_str(node_id)},',
        f"  tableNo: {js_str(table_no)},",
        f"  title: {js_str(title)},",
        '  schema: "matrixTable",',
        "  headerRows: [",
    ]

    for row in header_rows:
        lines.append("    [")
        for cell in row:
            lines.append(emit_cell(cell, "      "))
        lines.append("    ],")

    lines.append("  ],")
    lines.append("  rows: [")

    for row in body_rows:
        lines.append("    [")
        for cell in row:
            lines.append(emit_cell(cell, "      "))
        lines.append("    ],")

    lines.append("  ],")
    lines.append(f"  remark: {js_str(remark)},")
    lines.append("};")
    lines.append("")

    path = OUT / f"table_{file_key}.js"
    path.write_text("\n".join(lines), encoding="utf-8")
    print(f"Wrote {path.name} ({len(body_rows)} rows)")


def pad_row(row, size):
    values = list(row)
    while len(values) < size:
        values.append("")
    return values[:size]


def build_table_1_3_1(rows):
    header_rows = [
        [
            {"t": "岩土名称", "rs": 2},
            {"t": "结构类型", "rs": 2},
            {"t": "天然度(g/cm3)", "rs": 2},
            {"t": "抗压强度(MPa)", "cs": 2},
            {"t": "抗拉强度MPa", "rs": 2},
            {"t": "抗剪强度", "cs": 2},
            {"t": "弹性模量(104MPa)", "rs": 2},
            {"t": "泊松比", "rs": 2},
            {"t": "弹性抗力系数（MPa/m）", "rs": 2},
            {"t": "容许承载力(kPa)", "cs": 2},
            {"t": "基底摩擦系数", "rs": 2},
        ],
        [
            {"t": "天然"},
            {"t": "饱和"},
            {"t": "C(kPa)"},
            {"t": "φ(°)"},
            {"t": "［σ0］"},
            {"t": "［C］"},
        ],
    ]
    body_rows = [pad_row(row, 13) for row in rows[2:21]]
    remark = rows[21][0] if len(rows) > 21 else ""
    return header_rows, body_rows, remark


def build_table_2_1_1(rows):
    header_rows = [
        [
            {"t": "里程（m）", "rs": 2},
            {"t": "围岩岩性", "rs": 2},
            {"t": "结构面发育程度", "cs": 2},
            {"t": "主要结构面的结合程度", "rs": 2},
            {"t": "主要结构面类型", "rs": 2},
            {"t": "完整程度", "rs": 2},
            {"t": "相应结构类型", "rs": 2},
        ],
        [
            {"t": "组数"},
            {"t": "平均间距（m）"},
        ],
    ]
    body_rows = [pad_row(row, 8) for row in rows[2:]]
    return header_rows, body_rows, ""


def build_table_2_1_2(rows):
    header_rows = [[{"t": label} for label in rows[0]]]
    body_rows = [pad_row(row, len(rows[0])) for row in rows[1:]]
    return header_rows, body_rows, ""


def build_table_2_1_3(rows):
    header_rows = [
        [{"t": "左洞", "cs": 3}, {"t": "右洞", "cs": 3}],
        [{"t": label} for label in rows[1]],
    ]
    body_rows = [pad_row(row, 6) for row in rows[2:]]
    return header_rows, body_rows, ""


def build_table_2_2_1(rows):
    header_rows = [
        [
            {"t": "白云山隧道竖井", "rs": 2},
            {"t": "长度"},
            {"t": "围岩体岩性", "rs": 2},
            {"t": "Rc"},
            {"t": "K1", "rs": 2},
            {"t": "K2", "rs": 2},
            {"t": "K3", "rs": 2},
            {"t": "岩体完整系数（Kv）", "rs": 2},
            {"t": "BQ", "rs": 2},
            {"t": "［BQ］", "rs": 2},
            {"t": "围岩定量分级", "rs": 2},
        ],
        [
            {"t": "(米)"},
            {"t": "(Mpa)"},
        ],
    ]
    body_rows = [pad_row(row, 11) for row in rows[2:]]
    return header_rows, body_rows, ""


def build_simple_rows(rows, header_count=None, remark=""):
    header_rows = [[{"t": label} for label in rows[0]]]
    count = header_count or len(rows[0])
    body_rows = []
    for row in rows[1:]:
        if len(row) == count:
            body_rows.append(pad_row(row, count))
        elif row[0] == "合计":
            span = count - len(row) + 1
            body_rows.append([{"t": row[0], "cs": span}, *row[1:]])
        else:
            body_rows.append(pad_row(row, count))
    return header_rows, body_rows, remark


REMARK_3_3_1 = """由于本隧道为双线隧道，在进行防排水设计时，应注意以下几点：
（1）上表是常规隧道施工方法(钻爆法)情况下双洞同时开挖单洞涌水量的预测。
（2）隧道涌水量计算是基于含水岩层假设是均质体，但实际上含水岩层极不均一，对于岩溶发育、裂隙分布极不均匀的碳酸盐岩更是如此，而且采用了封堵措施后地下水径流将趋复杂化，并且雨后涌水量要大增的事实必须重视。因此，在施工中遇到突发涌水、大涌水等特别情况时其设计封堵措施不受上述计算的限制。
（4）根据水文地质调查及参考《1：20 万区域水文地质报告（南川幅）》，丰水期水量取枯水期的3 倍。
（5）汇水面积考虑采用垂直补给带面积，降雨量采用单日雨后最大降雨量进行计算。经计算，雨后可能产生瞬时的大的涌水。区内最大暴雨强度为 340mm/d，因此暴雨时隧道涌水量呈几何倍数增长"""


def build_table_4_1_1(rows):
    header_rows = [[{"t": "里程桩号"}, {"t": "突水类型"}]]
    body_rows = [
        [{"t": row[0]}, {"t": row[1], "className": "survey-table__text"}]
        for row in rows[1:]
    ]
    return header_rows, body_rows, ""


BUILDERS = {
    23: build_table_1_3_1,
    24: build_table_2_1_1,
    25: build_table_2_1_2,
    26: build_table_2_1_3,
    27: build_table_2_2_1,
    28: lambda rows: build_simple_rows(rows, 9),
    29: lambda rows: build_simple_rows(rows, 8),
    30: lambda rows: build_simple_rows(rows, 5, REMARK_3_3_1),
    31: build_table_4_1_1,
}


def main():
    root = ET.parse(DOCX).getroot()
    tables = root.findall(".//w:tbl", NS)

    for file_key, node_id, docx_idx, table_no, title in META:
        rows = parse_table(tables[docx_idx])
        header_rows, body_rows, remark = BUILDERS[docx_idx](rows)
        emit_matrix(file_key, node_id, table_no, title, header_rows, body_rows, remark)


if __name__ == "__main__":
    main()
