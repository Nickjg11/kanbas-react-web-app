import { useNavigate, useParams } from "react-router";
import * as db from "../../Database";
import { FaCheckCircle, FaFileAlt, FaPlus } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { BsGripVertical } from "react-icons/bs";
import AssignmentControlButtons from "./AssignmentControlButtons";
import { TfiWrite } from "react-icons/tfi";
import { IoEllipsisVertical } from "react-icons/io5";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { setAssignments, addAssignment, deleteAssignment, updateAssignment }
  from "./reducer";
import * as coursesClient from "../client";
import * as assignmentsClient from "./client";
export default function Assignments() {
  const { cid } = useParams();
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const [ assignmentTitle, setAssignmentTitle] = useState("");
  const { assignments } = useSelector((state: any) => state.assignmentsReducer);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const removeAssignment = async (assignmentId: string) => {
    await assignmentsClient.deleteAssignment(assignmentId);
    dispatch(deleteAssignment(assignmentId));
  };
  const createAssignmentForCourse = async () => {
    if (!cid) return;
    const newAssignment = {title: "", course: cid };
    const assignment = await coursesClient.createAssignmentForCourse(cid, newAssignment);
    dispatch(addAssignment(assignment));
    return assignment;
  };

  const fetchAssignments = async () => {
    const assignments = await coursesClient.findAssignmentsForCourse(cid as string);
    dispatch(setAssignments(assignments));
  };
  useEffect(() => {
    fetchAssignments();
  }, []);

  return (
    <div id="wd-assignments">
      <input type="search" 
        id="wd-search-assignment"
        placeholder="Search..."/>
      {currentUser.role === "FACULTY" || currentUser.role === "ADMIN" && (
        <button id="wd-add-assignment" className="btn btn-lg btn-danger me-1 float-end"
          onClick={async () => {  const a = await createAssignmentForCourse();
                                  navigate(a._id)}}>
        <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
        Assignment
      </button>
      )}
      {currentUser.role === "FACULTY" || currentUser.role === "ADMIN" && (
        <button id="wd-add-assignment-group" className="btn btn-lg btn-secondary btn-danger me-1 float-end">
          <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
          Group</button>                
      )}
      <br /><br /><br /><br />
      <ul id="wd-assignments" className="list-group rounded-0">
        <li className="wd-assignment list-group-item p-0 mb-5 fs-5 border-gray">
          <div className="wd-title p-3 ps-2 bg-secondary fs-4 d-flex justify-content-between align-items-center">
            <div>
              <BsGripVertical className="me-2 fs-3" />
              <b>Assignments</b>
            </div>
            <div className="d-flex justify-content-end align-items-center">
              <span className="wd-rounded-corners-all-around
                wd-border-solid p-2 fs-6">
                40% of Total
              </span>
              <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
              <IoEllipsisVertical className="fs-4" />
            </div>
          </div>
          <ul className="wd-lessons list-group rounded-0">
          {assignments
            .map((a: any) => (
              <li id="assignment1" className="wd-lesson list-group-item p-2 ps-1">
                  <div className="assignments-list">
                    <div className="d-flex align-items-center">
                      <div className="border-left border-success me-2"></div>
                      <BsGripVertical className="fs-3" />
                      <TfiWrite className="me-3 fs-4" />
                      <div>
                        {currentUser.role === "FACULTY" || currentUser.role === "ADMIN" ? 
                          (<Link className="wd-assignment-link"
                              to={a._id}>
                              <h5><b>{a.title}</b></h5>
                            </Link>) :
                            (<Link className="wd-assignment-link"
                              to={a}>
                              <h5><b>{a.title}</b></h5>
                            </Link>)
                        }
                        <p><span className="wd-fg-color-red">Multiple Modules</span> 
                          | <b>Not available until</b> {new Date(a.availableFromDate).toLocaleString('en-US', { month: 'long', day: 'numeric', hour: 'numeric', minute: '2-digit', hour12: true })}
                          | <br/><b>Due</b> {new Date(a.dueDate).toLocaleString('en-US', { month: 'long', day: 'numeric', hour: 'numeric', minute: '2-digit', hour12: true })}
                          | {a.points} pts</p>
                      </div>
                        <span className="ms-auto">
                          <AssignmentControlButtons assignmentId={a._id} deleteAssignment={removeAssignment}/>
                        </span>
                    </div>
                  </div>
                </li>
              ))}
          </ul>
        </li>
      </ul>
    </div>
  );}
