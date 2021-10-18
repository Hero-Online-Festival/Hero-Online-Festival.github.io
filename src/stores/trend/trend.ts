import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ITREND {
  questionIdx: number;
  answer: number; //+1 혹은 -1
}

type TTREND = {
  answers: Array<number>;
};

const initialState: TTREND = {
  answers: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
};

const reducer = createSlice({
  name: "trend",
  initialState,
  reducers: {
    updateTrendAnswer: (state, action: PayloadAction<ITREND>) => {
      state.answers[action.payload.questionIdx] = action.payload.answer;
    },
    initTrendAnswer: (state, action) => {
      state.answers.map((value, index) => {
        state.answers[index] = 0;
      });
    },
  },
});

export const { updateTrendAnswer, initTrendAnswer } = reducer.actions;
export default reducer.reducer;
