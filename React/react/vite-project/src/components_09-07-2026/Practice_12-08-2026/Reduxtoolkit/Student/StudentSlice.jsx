import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  students: []
};

const studentSlice = createSlice({
  name: "students",

  initialState,

  reducers: {
    addStudent: (state, action) => {
      state.students.push(action.payload);
    },

    removeStudent: (state, action) => {
      state.students = state.students.filter(
        student => student.id !== action.payload
      );
    },

    clearStudents: (state) => {
      state.students = [];
    }
  }
});

export const {
  addStudent,
  removeStudent,
  clearStudents
} = studentSlice.actions;

export default studentSlice.reducer