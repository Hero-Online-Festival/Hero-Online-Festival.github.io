import { Trend as TrendQuestion } from "./Questions";
import { Trend as TrendSelect } from "./Selections";

function MBTIScorePermute(scores: Array<number>): string {
  let grade: string = "";
  if (scores[0] > 0) {
    grade += "E";
  } else {
    grade += "I";
  }
  if (scores[1] > 0) {
    grade += "S";
  } else {
    grade += "N";
  }
  if (scores[2] > 0) {
    grade += "F";
  } else {
    grade += "T";
  }
  if (scores[3] > 0) {
    grade += "J";
  } else {
    grade += "P";
  }
  return grade;
}

function TrendScorePermute(scores: Array<number>): number {
  let score: number = 0;
  scores.map((answer, index) => {
    if (answer === TrendSelect[index].answer) {
      score += TrendQuestion[index].score;
    }
  });

  if (score >= 43) {
    return 8;
  } else if (score >= 37) {
    return 7;
  } else if (score >= 31) {
    return 6;
  } else if (score >= 25) {
    return 5;
  } else if (score >= 19) {
    return 4;
  } else if (score >= 13) {
    return 3;
  } else if (score >= 7) {
    return 2;
  } else {
    return 1;
  }
}

export { MBTIScorePermute, TrendScorePermute };
