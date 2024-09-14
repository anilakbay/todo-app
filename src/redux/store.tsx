import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../redux/todoSlice";

// Redux store'u yapılandırma
export const store = configureStore({
  reducer: {
    todo: todoReducer,
  },
});

// RootState ve AppDispatch türlerini tanımlama
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
