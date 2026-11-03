import { configureStore } from "@reduxjs/toolkit";
import uiReducer from "./slices/uiSlice";
import projectReducer from "./slices/projectSlice";
import contactReducer from "./slices/contactSlice";

export const makeStore = () => {
  return configureStore({
    reducer: {
      ui: uiReducer,
      projects: projectReducer,
      contact: contactReducer,
    },
    devTools: process.env.NODE_ENV !== "production",
  });
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];

