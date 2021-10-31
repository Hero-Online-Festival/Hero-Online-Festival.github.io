import { loadable } from "../../common/loadable";

export const MentorPage = loadable(() => import("./Mentor"));
export const MentorAnswerPage = loadable(() => import("./Answer/Answer"));
