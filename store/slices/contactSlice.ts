import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type TransmissionStatus = "idle" | "sending" | "success" | "error";

export interface ContactState {
  status: TransmissionStatus;
  errorMessage: string | null;
  lastSubmittedAt: string | null;
}

const initialState: ContactState = {
  status: "idle",
  errorMessage: null,
  lastSubmittedAt: null,
};

export const contactSlice = createSlice({
  name: "contact",
  initialState,
  reducers: {
    setTransmissionSending: (state) => {
      state.status = "sending";
      state.errorMessage = null;
    },
    setTransmissionSuccess: (state) => {
      state.status = "success";
      state.errorMessage = null;
      state.lastSubmittedAt = new Date().toISOString();
    },
    setTransmissionError: (state, action: PayloadAction<string>) => {
      state.status = "error";
      state.errorMessage = action.payload;
    },
    resetTransmission: (state) => {
      state.status = "idle";
      state.errorMessage = null;
    },
  },
});

export const {
  setTransmissionSending,
  setTransmissionSuccess,
  setTransmissionError,
  resetTransmission,
} = contactSlice.actions;

export default contactSlice.reducer;

