import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  enrollments: [],
};
const enrollmentsSlice = createSlice({
  name: "enrollments",
  initialState,
  reducers: {
    setEnrollments: (state, action) => {
      state.enrollments = action.payload;
    },
    addEnrollment: (state, { payload: enrollment }) => {
      state.enrollments = [...state.enrollments, enrollment] as any;
    },
    deleteEnrollment: (state, { payload: {courseId, userId} }) => {
      state.enrollments = state.enrollments.filter(
        (e: any) => e.course !== courseId || e.user !== userId);
    },
  },
});
export const { addEnrollment, deleteEnrollment, setEnrollments } =
enrollmentsSlice.actions;
export default enrollmentsSlice.reducer;