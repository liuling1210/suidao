import { TABLE_1_1_1 } from "./tables/table_1_1_1.js";
import { TABLE_1_1_2 } from "./tables/table_1_1_2.js";
import { TABLE_1_1_3 } from "./tables/table_1_1_3.js";
import { TABLE_1_1_4 } from "./tables/table_1_1_4.js";
import { TABLE_1_1_5 } from "./tables/table_1_1_5.js";
import { TABLE_1_1_6 } from "./tables/table_1_1_6.js";
import { TABLE_1_1_7 } from "./tables/table_1_1_7.js";
import { TABLE_1_1_8 } from "./tables/table_1_1_8.js";
import { TABLE_1_1_9 } from "./tables/table_1_1_9.js";
import { TABLE_1_1_10 } from "./tables/table_1_1_10.js";
import { TABLE_1_1_11 } from "./tables/table_1_1_11.js";
import { TABLE_1_1_12 } from "./tables/table_1_1_12.js";
import { TABLE_1_1_13 } from "./tables/table_1_1_13.js";
import { TABLE_1_1_14 } from "./tables/table_1_1_14.js";
import { TABLE_1_1_15 } from "./tables/table_1_1_15.js";
import { TABLE_1_1_16 } from "./tables/table_1_1_16.js";
import { TABLE_1_1_17 } from "./tables/table_1_1_17.js";
import { TABLE_1_2_1 } from "./tables/table_1_2_1.js";
import { TABLE_1_2_2 } from "./tables/table_1_2_2.js";
import { TABLE_1_2_3 } from "./tables/table_1_2_3.js";
import { TABLE_1_2_4 } from "./tables/table_1_2_4.js";
import { TABLE_1_2_5 } from "./tables/table_1_2_5.js";
import { TABLE_1_2_6 } from "./tables/table_1_2_6.js";
import { TABLE_1_3_1 } from "./tables/table_1_3_1.js";
import { TABLE_2_1_1 } from "./tables/table_2_1_1.js";
import { TABLE_2_1_2 } from "./tables/table_2_1_2.js";
import { TABLE_2_1_3 } from "./tables/table_2_1_3.js";
import { TABLE_2_2_1 } from "./tables/table_2_2_1.js";
import { TABLE_3_1_1 } from "./tables/table_3_1_1.js";
import { TABLE_3_2_1 } from "./tables/table_3_2_1.js";
import { TABLE_3_3_1 } from "./tables/table_3_3_1.js";
import { TABLE_4_1_1 } from "./tables/table_4_1_1.js";

const TABLE_BY_ID = {
  [TABLE_1_1_1.id]: TABLE_1_1_1,
  [TABLE_1_1_2.id]: TABLE_1_1_2,
  [TABLE_1_1_3.id]: TABLE_1_1_3,
  [TABLE_1_1_4.id]: TABLE_1_1_4,
  [TABLE_1_1_5.id]: TABLE_1_1_5,
  [TABLE_1_1_6.id]: TABLE_1_1_6,
  [TABLE_1_1_7.id]: TABLE_1_1_7,
  [TABLE_1_1_8.id]: TABLE_1_1_8,
  [TABLE_1_1_9.id]: TABLE_1_1_9,
  [TABLE_1_1_10.id]: TABLE_1_1_10,
  [TABLE_1_1_11.id]: TABLE_1_1_11,
  [TABLE_1_1_12.id]: TABLE_1_1_12,
  [TABLE_1_1_13.id]: TABLE_1_1_13,
  [TABLE_1_1_14.id]: TABLE_1_1_14,
  [TABLE_1_1_15.id]: TABLE_1_1_15,
  [TABLE_1_1_16.id]: TABLE_1_1_16,
  [TABLE_1_1_17.id]: TABLE_1_1_17,
  [TABLE_1_2_1.id]: TABLE_1_2_1,
  [TABLE_1_2_2.id]: TABLE_1_2_2,
  [TABLE_1_2_3.id]: TABLE_1_2_3,
  [TABLE_1_2_4.id]: TABLE_1_2_4,
  [TABLE_1_2_5.id]: TABLE_1_2_5,
  [TABLE_1_2_6.id]: TABLE_1_2_6,
  [TABLE_1_3_1.id]: TABLE_1_3_1,
  [TABLE_2_1_1.id]: TABLE_2_1_1,
  [TABLE_2_1_2.id]: TABLE_2_1_2,
  [TABLE_2_1_3.id]: TABLE_2_1_3,
  [TABLE_2_2_1.id]: TABLE_2_2_1,
  [TABLE_3_1_1.id]: TABLE_3_1_1,
  [TABLE_3_2_1.id]: TABLE_3_2_1,
  [TABLE_3_3_1.id]: TABLE_3_3_1,
  [TABLE_4_1_1.id]: TABLE_4_1_1,
};

export function getSurveyTable(id) {
  return TABLE_BY_ID[id] ?? null;
}

export const DEFAULT_TABLE_ID = TABLE_1_1_1.id;
