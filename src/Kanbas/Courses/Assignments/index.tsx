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
import { useState } from "react";
import { addAssignment, deleteAssignment }
  from "./reducer";

export default function Assignments() {
  const { cid } = useParams();
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const [ assignmentName, setAssignmentName] = useState("");
  const { assignments } = useSelector((state: any) => state.assignmentsReducer);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <div id="wd-assignments">
      <input type="search" 
        id="wd-search-assignment"
        placeholder="Search..."/>
      {currentUser.role === "FACULTY" && (
        <button id="wd-add-assignment" className="btn btn-lg btn-danger me-1 float-end"
          onClick={() => { const time = new Date().getTime().toString();
                            dispatch(addAssignment({ _id: time, title: "", description: "", points: "", dueDate: "", availableFromDate: "", availableUntilDate: "" }))
                            navigate(time.toString())}}>
        <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
        Assignment
      </button>
      )}
      {currentUser.role === "FACULTY" && (
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
            .filter((assignment: any) => assignment.course === cid)
            .map((assignment: any) => (
              <li id="assignment1" className="wd-lesson list-group-item p-2 ps-1">
                  <div className="assignments-list">
                    <div className="d-flex align-items-center">
                      <div className="border-left border-success me-2"></div>
                      <BsGripVertical className="fs-3" />
                      <TfiWrite className="me-3 fs-4" />
                      <div>
                        {currentUser.role === "FACULTY" ? 
                          (<Link className="wd-assignment-link"
                              to={assignment._id}>
                              <h5><b>{assignment.title}</b></h5>
                            </Link>) :
                            (<Link className="wd-assignment-link"
                              to={assignment}>
                              <h5><b>{assignment.title}</b></h5>
                            </Link>)
                        }
                        <p><span className="wd-fg-color-red">Multiple Modules</span> 
                          | <b>Not available until</b> {new Date(assignment.availableFromDate).toLocaleString('en-US', { month: 'long', day: 'numeric', hour: 'numeric', minute: '2-digit', hour12: true })}
                          | <br/><b>Due</b> {new Date(assignment.dueDate).toLocaleString('en-US', { month: 'long', day: 'numeric', hour: 'numeric', minute: '2-digit', hour12: true })}
                          | {assignment.points} pts</p>
                      </div>
                        <span className="ms-auto">
                          <AssignmentControlButtons assignmentId={assignment._id}
                            deleteAssignment={() => dispatch(deleteAssignment(assignment._id))}/>
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
