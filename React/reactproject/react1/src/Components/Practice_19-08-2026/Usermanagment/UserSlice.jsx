import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: [
    { id: 1, name: "Girish", email: "girish@gmail.com" },
    { id: 2, name: "Rahul", email: "rahul@gmail.com" }
  ]
};

const userSlice = createSlice({
  name: "users",
  initialState,

  reducers: {
    addUser: (state, action) => {
      state.users.push(action.payload);
    },

    deleteUser: (state, action) => {
      state.users = state.users.filter(
        user => user.id !== action.payload
      );
    }
  }
});

export const { addUser, deleteUser } = userSlice.actions;

export default userSlice.reducer;
