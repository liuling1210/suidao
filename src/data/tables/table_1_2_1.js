/** 表 4.2.2-1 进出洞口钻孔物探声波测井测试成果表 */
export const TABLE_1_2_1 = {
  id: "1-2-1",
  tableNo: "4.2.2-1",
  title: "进出洞口钻孔物探声波测井测试成果表",
  schema: "boreholeLog",
  headers: [
    { key: "holeId", label: "孔 号" },
    { key: "depthRange", label: "测试范围(m)" },
    { key: "lithology", label: "岩性" },
    { key: "vpRange", label: "Vp速度范围(m/s)" },
    { key: "vpAvg", label: "Vp平均速度(m/s)" },
    { key: "blockVelocity", label: "岩块波速(m/s)" },
    { key: "kv", label: "岩体完整性系数Kv" },
    { key: "kvCommon", label: "岩体完整性系数常见值Kv" },
    { key: "integrity", label: "完整性程度" },
  ],
  groups: [
    {
      holeId: "BYSCK2",
      rows: [
        { depthRange: "1.5～2.5", lithology: "灰岩", vpRange: "4667～4759", vpAvg: "4715", blockVelocity: "6141", kv: "0.58～0.60", kvCommon: "0.59", integrity: "较完整" },
        { depthRange: "2.5～26.0", lithology: "灰岩", vpRange: "4762～5421", vpAvg: "4989", blockVelocity: "6141", kv: "0.60～0.78", kvCommon: "0.66", integrity: "较完整" },
      ],
    },
    {
      holeId: "BYSCK4",
      rows: [
        { depthRange: "6.0～60.0", lithology: "灰岩", vpRange: "4238～5039", vpAvg: "4622", blockVelocity: "5823", kv: "0.53～0.75", kvCommon: "0.63", integrity: "较完整" },
        { depthRange: "60.0～88.0", lithology: "泥质灰岩", vpRange: "2462～4038", vpAvg: "3043", blockVelocity: "5379", kv: "0.21～0.56", kvCommon: "0.32", integrity: "破碎" },
        { depthRange: "88.0～118.0", lithology: "泥岩", vpRange: "2926～3748", vpAvg: "3509", blockVelocity: "4386", kv: "0.45～0.73", kvCommon: "0.64", integrity: "较完整" },
        { depthRange: "118.0～124.0", lithology: "灰岩", vpRange: "4143～4656", vpAvg: "4457", blockVelocity: "5660", kv: "0.54～0.68", kvCommon: "0.62", integrity: "较完整" },
      ],
    },
    {
      holeId: "BYSCK10",
      rows: [
        { depthRange: "2.0～3.5", lithology: "白云质灰岩", vpRange: "3542～3720", vpAvg: "3654", blockVelocity: "5416", kv: "0.43～0.47", kvCommon: "0.46", integrity: "较破碎" },
        { depthRange: "3.5～38.0", lithology: "白云质灰岩", vpRange: "4141～4598", vpAvg: "4400", blockVelocity: "5416", kv: "0.58～0.72", kvCommon: "0.66", integrity: "较完整" },
      ],
    },
  ],
  remark: "",
};
