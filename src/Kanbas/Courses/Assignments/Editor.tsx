import { useParams } from "react-router";
import * as db from "../../Database";
import { Link } from "react-router-dom";
export default function AssignmentEditor() {
  const { aid } = useParams();
  const assignment = db.assignments.find((a) => a._id === aid);
    if (!assignment) return null;
    return (
      <div id="wd-assignments-editor">
        <div id="wd-css-styling-forms">
          <div className="mb-3">
            <label htmlFor="input1" className="form-label">
              Assignment Name</label>
            <input type="name" className="form-control"
              id="input1" defaultValue={assignment.title}/>
          </div>
          <div className="mb-3">
            <textarea className="form-control" 
              id="textarea1" 
              rows={15}
              defaultValue={assignment.description}>
            </textarea>
          </div>
          <div id="wd-css-left-right-layout">
            <div className="mb-3 wd-grid-row">
              <div className="mb-3 wd-grid-col-half-page">
                <label className="mt-2 mb-2 pe-3 float-end">Points</label>
              </div>
              <div className="wd-grid-col-half-page">
                <input className="form-control" type="number" defaultValue={assignment.points}/>
              </div>
            </div>
            <div className="mb-3 wd-grid-row">
              <div className="mb-3 wd-grid-col-half-page">
                <label className="mt-2 mb-2 pe-3 float-end">Assignment Group</label>
              </div>
              <div className="wd-grid-col-half-page">
                <select className="form-select">
                  <option>ASSIGNMENTS</option>
                </select>
              </div>
            </div>
            <div className="mb-3 wd-grid-row">
              <div className="mb-3 wd-grid-col-half-page">
                <label className="mt-2 mb-2 pe-3 float-end">Display grade as</label>
              </div>
              <div className="wd-grid-col-half-page">
                <select className="form-select">
                  <option>Percentage</option>
                </select>
              </div>
            </div>
            <div className="mb-3 wd-grid-row">
              <div className="mb-3 wd-grid-col-half-page">
                <label className="mt-2 mb-2 pe-3 float-end">Submission Type</label>
              </div>
              <div className="mb-3 wd-grid-col-half-page form-control">
                <select className="form-select">
                  <option>Online</option>
                </select>
                <p className="mt-4">
                  <b>Online Entry Options</b>
                </p>
                <div className="wd-grid-row">
                  <input className="mb-3 form-check-input" type="checkbox"/>
                  <label className="mb-3 form-check-label ps-2">
                    Text Entry
                  </label>
                </div>
                <div className="wd-grid-row">
                  <input className="mb-3 form-check-input" type="checkbox"/>
                  <label className="mb-3 form-check-label ps-2">
                    Website URL
                  </label>
                </div>
                <div className="wd-grid-row">
                  <input className="mb-3 form-check-input" type="checkbox"/>
                  <label className="mb-3 form-check-label ps-2">
                    Media Recordings
                  </label>
                </div>
                <div className="wd-grid-row">
                  <input className="mb-3 form-check-input" type="checkbox"/>
                  <label className="mb-3 form-check-label ps-2">
                    Student Annotation
                  </label>
                </div>
                <div className="wd-grid-row">
                  <input className="mb-3 form-check-input" type="checkbox"/>
                  <label className="mb-3 form-check-label ps-2">
                    File Uploads
                  </label>
                </div>
              </div>
            </div>
            <div className="mb-3 wd-grid-row">
              <div className="mb-3 wd-grid-col-half-page">
                <label className="mt-2 mb-2 pe-3 float-end">Assign</label>
              </div>
              <div className="mb-3 wd-grid-col-half-page form-control">
                <label className="mb-3 mt-3 form-label ps-2">
                  <b>Assign To</b>
                </label>
                <select className="form-select">
                  <option>Everyone</option>
                </select>
                <p className="mt-4">
                  <b>Due</b>
                </p>
                <input className="mb-3 form-control" type="date" 
                  defaultValue={`${new Date(assignment.dueDate).getFullYear()}-${String(new Date(assignment.dueDate).getMonth() + 1).padStart(2, '0')}-${String(new Date(assignment.dueDate).getDate()).padStart(2, '0')}`}/>
                <div className="wd-grid-row">
                  <div className="mb-3 wd-grid-col-half-page">
                    <label className="mt-2 mb-2 pe-3 float-start ps-2"><b>Available from</b></label>
                    <div className="wd-grid-row">
                      <input className="form-control" type="date"
                      defaultValue={`${new Date(assignment.dueDate).getFullYear()}-${String(new Date(assignment.availableDate).getMonth() + 1).padStart(2, '0')}-${String(new Date(assignment.availableDate).getDate()).padStart(2, '0')}`}/>
                    </div>
                  </div>
                  <div className="mb-3 wd-grid-col-half-page">
                    <label className="mt-2 mb-2 pe-3 float-start ps-2"><b>Until</b></label>
                    <div className="wd-grid-row">
                      <input className="form-control" type="date" 
                      defaultValue={`${new Date(assignment.dueDate).getFullYear()}-${String(new Date(assignment.dueDate).getMonth() + 1).padStart(2, '0')}-${String(new Date(assignment.dueDate).getDate()).padStart(2, '0')}`}/>
                    </div>
                  </div>
              </div>
            </div>
          </div>
            <Link className="wd-assignment-link"
                            to="../Assignments">
                            <button id="wd-save-btn" className="btn btn-lg btn-danger me-1 float-end">Save</button>
            </Link>
            <Link className="wd-assignment-link"
                            to="../Assignments">
                            <button id="wd-cancel-btn" className="btn btn-lg btn-secondary btn-danger me-1 float-end">Cancel</button>
            </Link>
        </div>
      </div>
    </div>
  );}
  