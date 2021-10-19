import {
  bindActionCreators,
  createSlice,
  PayloadAction,
} from "@reduxjs/toolkit";

export interface IMBTI {
  questionIdx: number;
  answer: number; //+1 혹은 -1
}

export type TMBTI = {
  scores: Array<number>;
};

const initialState: TMBTI = {
  scores: [0, 0, 0, 0],
};

const reducer = createSlice({
  name: "mbti",
  initialState,
  reducers: {
    updateMBTIAnswer: (state, action: PayloadAction<IMBTI>) => {
      switch (action.payload.questionIdx) {
        case 0:
        case 3:
        case 9:
          state.scores[0] += action.payload.answer;
          break;
        case 5:
        case 7:
        case 10:
          state.scores[1] += action.payload.answer;
          break;
        case 1:
        case 2:
        case 8:
          state.scores[2] += action.payload.answer;
          break;
        case 4:
        case 6:
        case 11:
          state.scores[3] += action.payload.answer;
          break;
      }
    },
    initMBTIAnswer: (state, action) => {
      state.scores.map((value, index) => {
        state.scores[index] = 0;
      });
    },
  },
});
export const { updateMBTIAnswer, initMBTIAnswer } = reducer.actions;
export default reducer.reducer;
