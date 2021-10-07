import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import contactSlice from "../app/contactSlice";

export const store = configureStore({
  reducer: {
    contact: contactSlice,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
