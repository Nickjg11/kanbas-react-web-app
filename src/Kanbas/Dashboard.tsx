import { json, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import React, { useEffect, useState } from "react";
import * as enrollmentsClient from "./Courses/Enrollments/client";
import * as userClient from "./Account/client";
import * as courseClient from "./Courses/client";
import { setEnrollments, addEnrollment, deleteEnrollment } from "./Courses/Enrollments/reducer";
import JsonStringify from "../Labs/Lab3/JsonStringify";
export default function Dashboard(
  { course, setCourse, addNewCourse,
    deleteCourse, updateCourse }: {
    courses: any[]; course: any; setCourse: (course: any) => void; fetchCourses: () => void;
    addNewCourse: () => void; deleteCourse: (course: any) => void;
    updateCourse: () => void;})
 {
  const [courses, setCourses] = useState<any[]>([]);
  const { enrollments } = useSelector((state: any) => state.enrollmentsReducer);
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const [enrollmentsOnly, setEnrollmentsOnly] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    updateEnrollments(currentUser._id)
    fetchEnrollments()
  }, []);
  const fetchCourses = async () => {
      const c = await courseClient.fetchAllCourses();
      setCourses(c);
  };
  const removeEnrollment = async (courseId: string, userId: string) => {
    await enrollmentsClient.deleteEnrollment(courseId, userId);
    dispatch(deleteEnrollment({courseId, userId}));
  };
  const createEnrollment = async (courseId: string, userId: string) => {
    const enrollment = await enrollmentsClient.createEnrollment(courseId, userId);
    dispatch(addEnrollment(enrollment));
  };
  const updateEnrollments = async (userId: string) => {
    const e = await enrollmentsClient.findEnrollmentsForUser(userId);
    dispatch(setEnrollments(e));
  };
  const fetchEnrollments = async () => {
    const c = await courseClient.fetchAllCourses();
    const e = await enrollmentsClient.findEnrollmentsForUser(currentUser._id)
    const enrollments = c.filter((course: any) => e.some((enrollment: any) => enrollment.user === currentUser._id && enrollment.course === course._id))
    setCourses(enrollments);
};

  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      {currentUser.role === "FACULTY" && (
        <div>
          <h5>New Course
            <button className="btn btn-primary float-end"
                    id="wd-add-new-course-click"
                    onClick={addNewCourse} > 
              Add </button>
            <button className="btn btn-warning float-end me-2"
                  onClick={updateCourse} id="wd-update-course-click">
              Update
            </button>
          </h5><br />
          <input    value={course.name} className="form-control mb-2" 
                    onChange={(e) => setCourse({ ...course, name: e.target.value }) } />
          <textarea value={course.description} className="form-control"
                    onChange={(e) => setCourse({ ...course, description: e.target.value }) } />
          <hr />
        </div>)}
        {currentUser.role === "STUDENT" && (
        <div>
            <button className="btn btn-primary float-end"
                    id="wd-add-new-course-click"
                    onClick={() => { setEnrollmentsOnly(!enrollmentsOnly);
                                     if (enrollmentsOnly) {
                                      fetchEnrollments()
                                     }
                                     else {
                                      fetchCourses()
                                     }
                    } } > 
              Enrollments </button>
        </div>)}
      <h2 id="wd-dashboard-published">Published Courses ({courses.length})</h2> <hr />
      <div id="wd-dashboard-courses" className="row">
        <div className="row row-cols-1 row-cols-md-5 g-4">
          {!enrollmentsOnly && (courses
              .map((course) => (
                <div className="wd-dashboard-course col" style={{ width: "300px" }}>
                  <div className="card rounded-3 overflow-hidden">
                    <Link to={`/Kanbas/Courses/${course._id}/Home`}
                          className="wd-dashboard-course-link text-decoration-none text-dark" >
                      <img src="/images/reactjs.webp" width="100%" height={160} />
                      <div className="card-body">
                        <h5 className="wd-dashboard-course-title card-title">
                          {course.name} </h5>
                        <p className="wd-dashboard-course-title card-text overflow-y-hidden" style={{ maxHeight: 100 }}>
                          {course.description} </p>
                        <button className="btn btn-primary"> Go </button>
                        {currentUser.role === "FACULTY" && (
                            <button onClick={(event) => {
                                  event.preventDefault();
                                  deleteCourse(course._id);
                                }} className="btn btn-danger float-end"
                                id="wd-delete-course-click">
                                Delete
                            </button>
                        )}
                        {currentUser.role === "STUDENT" && enrollments.filter((enrollment: any) => enrollment.user === currentUser._id && enrollment.course === course._id).length === 0 && (
                            <button onClick={(event) => {
                                  event.preventDefault();
                                  createEnrollment(course._id, currentUser._id);
                                  updateEnrollments(currentUser._id)
                                  fetchEnrollments()
                                }} className="btn btn-success float-end"
                                id="wd-delete-course-click">
                                Enroll
                            </button>
                        )}
                        {currentUser.role === "STUDENT" && enrollments.filter((enrollment: any) => enrollment.user === currentUser._id && enrollment.course === course._id).length !== 0 && (
                            <button onClick={(event) => {
                                  event.preventDefault();
                                  removeEnrollment(course._id, currentUser._id);
                                  updateEnrollments(currentUser._id)
                                  fetchEnrollments()
                                }} className="btn btn-danger float-end"
                                id="wd-delete-course-click">
                                Unenroll
                            </button>
                        )}
                        {currentUser.role === "FACULTY" && (
                          <button id="wd-edit-course-click"
                            onClick={(event) => {
                              event.preventDefault();
                              setCourse(course);
                            }}
                            className="btn btn-warning me-2 float-end" >
                            Edit
                          </button>
                        )}
                      </div>
                    </Link>
                  </div>
                </div>
              )))
          }
          {enrollmentsOnly && (courses
              .map((course) => (
                <div className="wd-dashboard-course col" style={{ width: "300px" }}>
                  <div className="card rounded-3 overflow-hidden">
                    <Link to={`/Kanbas/Courses/${course._id}/Home`}
                          className="wd-dashboard-course-link text-decoration-none text-dark" >
                      <img src="/images/reactjs.webp" width="100%" height={160} />
                      <div className="card-body">
                        <h5 className="wd-dashboard-course-title card-title">
                          {course.name} </h5>
                        <p className="wd-dashboard-course-title card-text overflow-y-hidden" style={{ maxHeight: 100 }}>
                          {course.description} </p>
                        <button className="btn btn-primary"> Go </button>
                        {currentUser.role === "FACULTY" && (
                            <button onClick={(event) => {
                                  event.preventDefault();
                                  deleteCourse(course._id);
                                }} className="btn btn-danger float-end"
                                id="wd-delete-course-click">
                                Delete
                            </button>
                        )}
                        {currentUser.role === "STUDENT" && enrollments.filter((enrollment: any) => enrollment.user === currentUser._id && enrollment.course === course._id).length === 0 && (
                            <button onClick={(event) => {
                                  event.preventDefault();
                                  createEnrollment(course._id, currentUser._id);
                                  updateEnrollments(currentUser._id)
                                  fetchCourses()
                                }} className="btn btn-success float-end"
                                id="wd-delete-course-click">
                                Enroll
                            </button>
                        )}
                        {currentUser.role === "STUDENT" && enrollments.filter((enrollment: any) => enrollment.user === currentUser._id && enrollment.course === course._id).length !== 0 && (
                            <button onClick={(event) => {
                                  event.preventDefault();
                                  removeEnrollment(course._id, currentUser._id);
                                  updateEnrollments(currentUser._id)
                                  fetchCourses()
                                }} className="btn btn-danger float-end"
                                id="wd-delete-course-click">
                                Unenroll
                            </button>
                        )}
                        {currentUser.role === "FACULTY" && (
                          <button id="wd-edit-course-click"
                            onClick={(event) => {
                              event.preventDefault();
                              setCourse(course);
                            }}
                            className="btn btn-warning me-2 float-end" >
                            Edit
                          </button>
                        )}
                      </div>
                    </Link>
                  </div>
                </div>
              )))
          }
        </div>
      </div>
    </div>);}