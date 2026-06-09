/** 表 4.2.2-6 洞身段钻孔物探综合测井测试成果表 */
export const TABLE_1_2_6 = {
  id: "1-2-6",
  tableNo: "4.2.2-6",
  title: "洞身段钻孔物探综合测井测试成果表",
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
      holeId: "XSBYSZK03",
      rows: [
        { depthRange: "110.0-376.8", lithology: "灰岩", vpRange: "1710～4512", vpAvg: "4376", avgKv: "0.68", kvRange: "0.1～0.72", blockVelocity: "5320", integrity: "较完整" },
        { depthRange: "376.8-561.4", lithology: "灰岩", vpRange: "1110～4412", vpAvg: "3960", avgKv: "0.65", kvRange: "0.05～0.8", blockVelocity: "4918", integrity: "较完整" },
        { depthRange: "561.4-582.4", lithology: "页岩", vpRange: "1525～3745", vpAvg: "3376", avgKv: "0.62", kvRange: "0.13～0.77", blockVelocity: "4280", integrity: "较完整" },
        { depthRange: "582.4-583.3", lithology: "煤层", vpRange: "1079～2887", vpAvg: "2582", avgKv: "0.41", kvRange: "0.07～0.52", blockVelocity: "4021", integrity: "较破碎" },
        { depthRange: "583.3-605.0", lithology: "页岩", vpRange: "1996～3700", vpAvg: "3388", avgKv: "0.63", kvRange: "0.22～0.75", blockVelocity: "4278", integrity: "较完整" },
        { depthRange: "605.0-622.8", lithology: "页岩", vpRange: "2077～3632", vpAvg: "3257", avgKv: "0.6", kvRange: "0.24～0.74", blockVelocity: "4214", integrity: "较完整" },
      ],
    },
  ],
  remark: "",
};
