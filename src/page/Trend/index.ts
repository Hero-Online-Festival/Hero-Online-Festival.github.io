import { loadable } from "../../common/loadable";

export const TrendPage = loadable(() => import("./Trend"));
export const TrendResultPage = loadable(() => import("./Result/Result"));
