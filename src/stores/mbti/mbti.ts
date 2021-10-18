import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IMBTI {
  questionIdx: number;
  answer: number; //+1 혹은 -1
}

type TMBTI = {
  answers: Array<number>;
};

const initialState: TMBTI = {
  answers: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
};

const reducer = createSlice({
  name: "mbti",
  initialState,
  reducers: {
    updateMBTIAnswer: (state, action: PayloadAction<IMBTI>) => {
      state.answers[action.payload.questionIdx] = action.payload.answer;
    },
    initMBTIAnswer: (state, action) => {
      state.answers.map((value, index) => {
        state.answers[index] = 0;
      });
    },
  },
});
export const { updateMBTIAnswer, initMBTIAnswer } = reducer.actions;
export default reducer.reducer;
