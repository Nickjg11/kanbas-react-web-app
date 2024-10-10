import { FaCheckCircle, FaFileAlt, FaPlus } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { BsGripVertical } from "react-icons/bs";
import LessonControlButtons from "../Modules/LessonControlButtons";
import AssignmentControlButtons from "./AssignmentControlButtons";
import { TfiWrite } from "react-icons/tfi";
import { IoEllipsisVertical } from "react-icons/io5";

export default function Assignments() {
    return (
      <div id="wd-assignments">
        <input type="search" 
          id="wd-search-assignment"
          placeholder="Search..."
          />
        <button id="wd-add-assignment" className="btn btn-lg btn-danger me-1 float-end">
          <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
          Assignment</button>
        <button id="wd-add-assignment-group" className="btn btn-lg btn-secondary btn-danger me-1 float-end">
          <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
          Group</button><br /><br /><br /><br />
        <ul id="wd-modules" className="list-group rounded-0">
          <li className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
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
              <li id="assignment1" className="wd-lesson list-group-item p-2 ps-1">
                <div className="assignments-list">
                  <div className="d-flex align-items-center">
                    <div className="border-left border-success me-2"></div>
                    <BsGripVertical className="fs-3" />
                    <TfiWrite className="me-3 fs-4" />
                    <div>
                      <a className="wd-assignment-link"
                        href="#/Kanbas/Courses/1234/Assignments/edit">
                        <h5><b>A1</b></h5>
                      </a>
                      <p><span className="wd-fg-color-red">Multiple Modules</span> | <b>Not available until</b> May 6 at 12:00am |
                      <br/><b>Due</b> May 13 at 11:59pm | 100 pts</p>
                    </div>
                      <span className="ms-auto"><AssignmentControlButtons/></span>
                  </div>
                </div>
              </li>
              <li id="assignment1" className="wd-lesson list-group-item p-2 ps-1">
                <div className="assignments-list">
                  <div className="d-flex align-items-center">
                    <div className="border-left border-success me-2"></div>
                    <BsGripVertical className="fs-3" />
                    <TfiWrite className="me-3 fs-4" />
                    <div>
                      <a className="wd-assignment-link"
                        href="#/Kanbas/Courses/1234/Assignments/edit">
                        <h5><b>A2</b></h5>
                      </a>
                      <p><span className="wd-fg-color-red">Multiple Modules</span> | <b>Not available until</b> May 13 at 12:00am |
                      <br/><b>Due</b> May 20 at 11:59pm | 100 pts</p>
                    </div>
                      <span className="ms-auto"><AssignmentControlButtons/></span>
                  </div>
                </div>
              </li>
              <li id="assignment1" className="wd-lesson list-group-item p-2 ps-1">
                <div className="assignments-list">
                  <div className="d-flex align-items-center">
                    <div className="border-left border-success me-2"></div>
                    <BsGripVertical className="fs-3" />
                    <TfiWrite className="me-3 fs-4" />
                    <div>
                      <a className="wd-assignment-link"
                        href="#/Kanbas/Courses/1234/Assignments/edit">
                        <h5><b>A3</b></h5>
                      </a>
                      <p><span className="wd-fg-color-red">Multiple Modules</span> | <b>Not available until</b> May 20 at 12:00am |
                      <br/><b>Due</b> May 27 at 11:59pm | 100 pts</p>
                    </div>
                      <span className="ms-auto"><AssignmentControlButtons/></span>
                  </div>
                </div>
              </li>
            </ul>
          </li>
        </ul>
        <div>
          <h3 id="wd-assignments-title">
            ASSIGNMENTS 40% of Total <button>+</button>
          </h3>
          <ul id="wd-assignment-list">
            <li className="wd-assignment-list-item">
              <a className="wd-assignment-link"
                href="#/Kanbas/Courses/1234/Assignments/123">
                A1 - ENV + HTML
              </a> <br/>
              Multiple Modules | <b>Not available until</b> May 6 at 12:00am |
              <br/><b>Due</b> May 13 at 11:59pm | 100 pts
            </li>
            <li className="wd-assignment-list-item">
              <a className="wd-assignment-link"
                href="#/Kanbas/Courses/1234/Assignments/456">
                A2 - CSS + BOOSTRAP
              </a> <br/>
              Multiple Modules | <b>Not available until</b> May 13 at 12:00am |
              <br/><b>Due</b> May 20 at 11:59pm | 100 pts
            </li>
            <li className="wd-assignment-list-item">
              <a className="wd-assignment-link"
                href="#/Kanbas/Courses/1234/Assignments/789">
                A3 - JAVASCRIPT + REACT
              </a> <br/>
              Multiple Modules | <b>Not available until</b> May 20 at 12:00am |
              <br/><b>Due</b> May 27 at 11:59pm | 100 pts
            </li>
          </ul>
        </div>
      </div>
  );}
