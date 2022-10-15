import { combineReducers } from "@reduxjs/toolkit";
import qstateModule from "./qstateModule";

const rootReducer = combineReducers({
  qstate: qstateModule.reducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
