import { useNavigate, useParams } from "react-router";
import * as db from "../../Database";
import { FaCheckCircle, FaFileAlt, FaPlus } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { BsGripVertical } from "react-icons/bs";
import { TfiWrite } from "react-icons/tfi";
import { IoEllipsisVertical } from "react-icons/io5";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { setQuizzes, addQuiz, deleteQuiz, updateQuiz }
  from "./reducer";
import * as coursesClient from "../client";
import * as quizzesClient from "./client";
import QuizControlButtons from "./QuizControlButtons";
export default function Quizzes() {
  const { cid } = useParams();
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const [ quizTitle, setQuizTitle] = useState("");
  const { quizzes } = useSelector((state: any) => state.quizzesReducer);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const removeQuiz = async (quizId: string) => {
    await quizzesClient.deleteQuiz(quizId);
    dispatch(deleteQuiz(quizId));
  };
  const createQuizForCourse = async () => {
    if (!cid) return;
    const newQuiz = {title: "", course: cid };
    const quiz = await coursesClient.createQuizForCourse(cid, newQuiz);
    dispatch(addQuiz(quiz));
    return quiz;
  };

  const fetchQuizzes = async () => {
    const quizzes = await coursesClient.findQuizzesForCourse(cid as string);
    dispatch(setQuizzes(quizzes));
  };
  useEffect(() => {
    fetchQuizzes();
  }, []);

  return (
    <div id="wd-quizzes">
      <input type="search" 
        id="wd-search-quiz"
        placeholder="Search..."/>
      {currentUser.role === "FACULTY" || currentUser.role === "ADMIN" && (
        <button id="wd-add-quiz" className="btn btn-lg btn-danger me-1 float-end"
            onClick={async () => {  const q = await createQuizForCourse();
                                    navigate(q._id)}}>
            <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
            Quiz
        </button>
      )}
      {currentUser.role === "FACULTY" || currentUser.role === "ADMIN" && (
        <button id="wd-add-quiz-group" className="btn btn-lg btn-secondary btn-danger me-1 float-end">
          <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
          Group</button>                
      )}
      <br /><br /><br /><br />
      <ul id="wd-quizzes" className="list-group rounded-0">
        <li className="wd-quiz list-group-item p-0 mb-5 fs-5 border-gray">
          <div className="wd-title p-3 ps-2 bg-secondary fs-4 d-flex justify-content-between align-items-center">
            <div>
              <BsGripVertical className="me-2 fs-3" />
              <b>Quizzes</b>
            </div>
            <div className="d-flex justify-content-end align-items-center">
              <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
              <IoEllipsisVertical className="fs-4" />
            </div>
          </div>
          <ul className="wd-lessons list-group rounded-0">
          {quizzes
            .map((q: any) => (
              <li id="quiz1" className="wd-lesson list-group-item p-2 ps-1">
                  <div className="quizzes-list">
                    <div className="d-flex align-items-center">
                      <div className="border-left border-success me-2"></div>
                      <BsGripVertical className="fs-3" />
                      <TfiWrite className="me-3 fs-4" />
                      <div>
                        {currentUser.role === "FACULTY" || currentUser.role === "ADMIN" ? 
                          (<Link className="wd-quiz-link"
                              to={q._id}>
                              <h5><b>{q.title}</b></h5>
                            </Link>) :
                            (<Link className="wd-quiz-link"
                              to={q}>
                              <h5><b>{q.title}</b></h5>
                            </Link>)
                        }
                        <p><span className="wd-fg-color-black"><b>{q.availability ? "Available" : "Closed" }</b></span> 
                          | <b>Due</b> {new Date(q.dueDate).toLocaleString('en-US', { month: 'long', day: 'numeric', hour: 'numeric', minute: '2-digit', hour12: true })}
                          | {q.points} pts | {q.numQuestions} Questions</p>
                      </div>
                        <span className="ms-auto">
                          <QuizControlButtons quizId={q._id} deleteQuiz={removeQuiz}/>
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
