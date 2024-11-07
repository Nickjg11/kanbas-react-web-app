import { useState } from "react";
import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";
import * as db from "../Database";
export default function ProtectedCourseRoute({ children }: { children: any }) {
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const cid = useLocation().pathname.split("/")[3];
  const [enrollments, setEnrollments] = useState<any[]>(db.enrollments);
  if (currentUser.role === "STUDENT") {
    if (enrollments.filter((enrollment) => enrollment.user === currentUser._id && enrollment.course === cid).length >= 1) {
      return children;
    } 
    else {
      return <Navigate to="/Kanbas/Dashboard" />;
    }
  }
  else {
    return children;
  }}