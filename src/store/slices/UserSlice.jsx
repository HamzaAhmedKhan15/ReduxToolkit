import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: [],
  reducers: {
    addUser(state, action) {
      state.push(action.payload);
    },
    deleteUser(state, action) {
      state.splice(action.payload, 1);
    },
    ClearAllUsers(state, action) {},
  },
});

// console.log(userSlice.actions);

export default userSlice.reducer;

export const { addUser, deleteUser } = userSlice.actions;
