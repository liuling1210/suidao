/** 表 4.2.2-5 洞身段钻孔物探综合测井测试成果表（一） */
export const TABLE_1_2_4 = {
  id: "1-2-4",
  tableNo: "4.2.2-5",
  title: "洞身段钻孔物探综合测井测试成果表（一）",
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
      holeId: "XSBYSZK01",
      rows: [
        { depthRange: "78.8-102.0", lithology: "炭质页岩", vpRange: "2221～3241", vpAvg: "2897", avgKv: "0.57", kvRange: "0.34～0.72", blockVelocity: "3821", integrity: "较完整" },
        { depthRange: "102.0-125.7", lithology: "灰岩", vpRange: "2079～4287", vpAvg: "3886", avgKv: "0.65", kvRange: "0.18～0.79", blockVelocity: "4835", integrity: "较完整" },
        { depthRange: "125.7-138.3", lithology: "页岩", vpRange: "2118～3687", vpAvg: "3315", avgKv: "0.6", kvRange: "0.25～0.74", blockVelocity: "4278", integrity: "较完整" },
        { depthRange: "138.3-205.0", lithology: "灰岩", vpRange: "2077～4232", vpAvg: "3987", avgKv: "0.66", kvRange: "0.18～0.74", blockVelocity: "4914", integrity: "较完整" },
        { depthRange: "205.0-213.4", lithology: "角砾岩", vpRange: "2022～3965", vpAvg: "3389", avgKv: "0.56", kvRange: "0.2～0.77", blockVelocity: "4525", integrity: "较完整" },
        { depthRange: "213.4-216.5", lithology: "铝土岩", vpRange: "1810～3156", vpAvg: "2874", avgKv: "0.57", kvRange: "0.22～0.68", blockVelocity: "3816", integrity: "较完整" },
        { depthRange: "216.5-228.3", lithology: "页岩", vpRange: "2004～3334", vpAvg: "3359", avgKv: "0.62", kvRange: "0.22～0.61", blockVelocity: "4252", integrity: "较完整" },
        { depthRange: "228.3-250.47", lithology: "灰岩", vpRange: "2913～3512", vpAvg: "4038", avgKv: "0.65", kvRange: "0.34～0.49", blockVelocity: "4998", integrity: "较完整" },
        { depthRange: "250.47-255.17", lithology: "采空区", vpRange: "898～1012", vpAvg: "976", avgKv: "0.04", kvRange: "0.03～0.04", blockVelocity: "4935", integrity: "破碎" },
        { depthRange: "255.17-270.37", lithology: "灰岩", vpRange: "2286～4568", vpAvg: "3857", avgKv: "0.61", kvRange: "0.21～0.86", blockVelocity: "4935", integrity: "较完整" },
      ],
    },
  ],
  remark: "",
};
