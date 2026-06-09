/** 表 4.2.2-5 洞身段钻孔物探综合测井测试成果表（二） */
export const TABLE_1_2_5 = {
  id: "1-2-5",
  tableNo: "4.2.2-5",
  title: "洞身段钻孔物探综合测井测试成果表（二）",
  schema: "boreholeLog",
  headers: [
    { key: "holeId", label: "孔号" },
    { key: "depthRange", label: "测试范围(m)" },
    { key: "lithology", label: "岩性" },
    { key: "vpRange", label: "Vp速度范围(m/s)" },
    { key: "vpAvg", label: "Vp平均值(m/s)" },
    { key: "avgKv", label: "平均Kv值" },
    { key: "kvRange", label: "岩体完整性系数Kv范围值" },
    { key: "blockVelocity", label: "岩块波速(m/s)" },
    { key: "integrity", label: "岩体完整程度" },
  ],
  groups: [
    {
      holeId: "XSBYSZK02",
      rows: [
        { depthRange: "224.6-375.0", lithology: "灰岩", vpRange: "3276～4863", vpAvg: "4126", avgKv: "0.63", kvRange: "0.52～0.66", blockVelocity: "5198", integrity: "较完整" },
      ],
    },
  ],
  remark: "",
};
