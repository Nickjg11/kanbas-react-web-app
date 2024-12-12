import { IoEllipsisVertical } from "react-icons/io5";
import GreenCheckmark from "./GreenCheckmark";
import { useSelector } from "react-redux";
import { FaTrash } from "react-icons/fa";
import QuizDeleter from "./QuizDeleter";
export default function QuizControlButtons(
  { quizId, deleteQuiz }: { 
    quizId: string; deleteQuiz: (id: string) => void;}
) {
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  return (
    <div className="float-end">
      <GreenCheckmark />
      <IoEllipsisVertical className="fs-4" />
      {currentUser.role === "FACULTY" || currentUser.role === "ADMIN" && (
        <button id="wd-delete-quiz-btn" onClick={() => deleteQuiz(quizId)}>
          <FaTrash className="text-danger me-2 mb-1"/>
        </button>
      )}
    </div>
);}