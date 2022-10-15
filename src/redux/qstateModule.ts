import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { setState } from "../logic/Logic";
import { QState } from "../type/QType";

type State = {
  qstate: QState;
};

const initialState: State = {
  qstate: {
    current: -1,
    place: "",
    times: "",
    seat: "",
    goods: "",
  },
};

const qstateModule = createSlice({
  name: "qstate",
  initialState,
  reducers: {
    startQuestion(state: State) {
      state.qstate.current = 0;
      state.qstate.place = "";
      state.qstate.times = "";
      state.qstate.seat = "";
      state.qstate.goods = "";
    },
    setAnswer(state: State, action: PayloadAction<string>) {
      state.qstate = setState(state.qstate, action.payload);
      switch (state.qstate.current) {
        case 0:
          state.qstate.current = 1;
          state.qstate.place = action.payload;
          break;
        case 1:
          if (state.qstate.place === "stream") {
            state.qstate.current = 3;
          } else {
            state.qstate.current = 2;
          }
          state.qstate.times = action.payload;
          break;
        case 2:
          state.qstate.current = 3;
          state.qstate.seat = action.payload;
          break;
        case 3:
          state.qstate.current = 999;
          state.qstate.goods = action.payload;
          break;
      }
    },
    backQuestion(state: State) {
      switch (state.qstate.current) {
        case 0:
          state.qstate.current = 0;
          break;
        case 1:
          state.qstate.current = 0;
          state.qstate.times = "";
          break;
        case 2:
          state.qstate.current = 1;
          state.qstate.seat = "";
          break;
        case 3:
          if (state.qstate.place === "stream") {
            state.qstate.current = 1;
          } else {
            state.qstate.current = 2;
          }
          state.qstate.goods = "";
          break;
      }
    },
    testAction(state: State) {
      state.qstate.current += 1;
    },
    resetQuestion(state: State) {
      state.qstate.current = -1;
      state.qstate.place = "";
      state.qstate.times = "";
      state.qstate.seat = "";
      state.qstate.goods = "";
    },
  },
});

export const {
  startQuestion,
  setAnswer,
  backQuestion,
  testAction,
  resetQuestion,
} = qstateModule.actions;

export default qstateModule;
