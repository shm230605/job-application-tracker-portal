import {
  createSlice,
} from "@reduxjs/toolkit";

const initialState = {
  applications: [],
};

const applicationSlice =
  createSlice({
    name: "applications",

    initialState,

    reducers: {
      setApplications:
        (
          state,
          action
        ) => {
          state.applications =
            action.payload;
        },

      addApplication:
        (
          state,
          action
        ) => {
          state.applications.push(
            action.payload
          );
        },

      deleteApplication:
        (
          state,
          action
        ) => {
          state.applications =
            state.applications.filter(
              (
                app
              ) =>
                app._id !==
                action.payload
            );
        },
    },
  });

export const {
  setApplications,

  addApplication,

  deleteApplication,
} =
  applicationSlice.actions;

export default applicationSlice.reducer;