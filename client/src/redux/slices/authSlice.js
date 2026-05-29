import {
  createSlice,
} from "@reduxjs/toolkit";

const user =
  JSON.parse(
    localStorage.getItem(
      "userInfo"
    )
  ) || null;

const authSlice =
  createSlice({
    name: "auth",

    initialState: {
      user,
    },

    reducers: {
      loginSuccess:
        (
          state,
          action
        ) => {
          state.user =
            action.payload;
        },

      logout: (
        state
      ) => {
        state.user =
          null;

        localStorage.removeItem(
          "userInfo"
        );
      },
    },
  });

export const {
  loginSuccess,
  logout,
} = authSlice.actions;

export default authSlice.reducer;