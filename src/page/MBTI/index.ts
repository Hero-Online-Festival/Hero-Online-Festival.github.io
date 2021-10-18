import { loadable } from "../../common/loadable";

export const MBTIPage = loadable(() => import("./MBTI"));
export const MBTIResultPage = loadable(() => import("./Result/Result"));
