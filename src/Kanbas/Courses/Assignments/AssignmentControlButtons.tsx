import { IoEllipsisVertical } from "react-icons/io5";
import GreenCheckmark from "./GreenCheckmark";
import { useSelector } from "react-redux";
import { FaTrash } from "react-icons/fa";
import AssignmentDeleter from "./AssignmentDeleter";
export default function AssignmentControlButtons(
  { assignmentId, deleteAssignment }: { 
    assignmentId: string; deleteAssignment: (assignmentId: string) => void;}
) {
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  return (
    <div className="float-end">
      <GreenCheckmark />
      <IoEllipsisVertical className="fs-4" />
      {currentUser.role === "FACULTY" && (
        <button id="wd-delete-assignment-btn"
          data-bs-toggle="modal" data-bs-target="#wd-delete-assignment-dialog" >
          <FaTrash className="text-danger me-2 mb-1"/>
        </button>
      )}
      <AssignmentDeleter dialogTitle="Add Module" deleteAssignment={() => deleteAssignment(assignmentId)} />
    </div>
);}