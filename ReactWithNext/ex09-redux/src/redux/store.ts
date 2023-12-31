import { configureStore } from "@reduxjs/toolkit";
import useReducer from "./reducers/useReducer";

export const store = configureStore({
  reducer: {
    user: useReducer
  }
})

export type RootState = ReturnType<typeof store.getState>;