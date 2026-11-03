import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type CursorVariant = "default" | "hover" | "magnify";

export interface UIState {
  isMobileMenuOpen: boolean;
  cursorVariant: CursorVariant;
  cursorLabel: string | null;
  isPreloaderComplete: boolean;
}

const initialState: UIState = {
  isMobileMenuOpen: false,
  cursorVariant: "default",
  cursorLabel: null,
  isPreloaderComplete: false,
};

export const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    toggleMobileMenu: (state) => {
      state.isMobileMenuOpen = !state.isMobileMenuOpen;
    },
    setMobileMenuOpen: (state, action: PayloadAction<boolean>) => {
      state.isMobileMenuOpen = action.payload;
    },
    setCursorVariant: (state, action: PayloadAction<CursorVariant>) => {
      state.cursorVariant = action.payload;
    },
    setCursorLabel: (state, action: PayloadAction<string | null>) => {
      state.cursorLabel = action.payload;
    },
    setPreloaderComplete: (state, action: PayloadAction<boolean>) => {
      state.isPreloaderComplete = action.payload;
    },
  },
});

export const {
  toggleMobileMenu,
  setMobileMenuOpen,
  setCursorVariant,
  setCursorLabel,
  setPreloaderComplete,
} = uiSlice.actions;

export default uiSlice.reducer;

