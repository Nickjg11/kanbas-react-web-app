import { useLocation, useNavigate, useParams } from "react-router";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as questionsClient from "./client";
import * as quizzesClient from "../client";
import { time } from "console";
import { FaCheckCircle, FaFileAlt, FaPlus } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { BsGripVertical } from "react-icons/bs";
import { TfiWrite } from "react-icons/tfi";
import { IoEllipsisVertical } from "react-icons/io5";
import { setQuestions, addQuestion, deleteQuestion, updateQuestion }
  from "./reducer";
import QuestionControlButtons from "./QuestionControlButtons";
export default function QuestionsEditor() {
  const cid = useLocation().pathname.split("/")[3];
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const qid = useLocation().pathname.split("/")[5];
  const { quizzes } = useSelector((state: any) => state.quizzesReducer);
  const quiz = quizzes.find((a: { _id: string | undefined; }) => a._id === qid);
  
  const { questions } = useSelector((state: any) => state.questionsReducer);

  useEffect(() => {
    fetchQuestions();
  }, []);
  const { currentUser } = useSelector((state: any) => state.accountReducer);

  const removeQuestion = async (questionId: string) => {
    await questionsClient.deleteQuestion(questionId);
    dispatch(deleteQuestion(questionId));
  };

  const [questionType, setQuestionType] = useState<any>("MC");

  const createQuestionForQuiz = async () => {
    if (!cid) return;
    const newQuestion = {
      quiz: qid,
      title: '',
      question: '',
      choices: [],
      points: 10,
    };
    var question;
    if(questionType == "MC") {
      question = await quizzesClient.createMCQuestionForQuiz(qid, newQuestion);
    }
    if(questionType == "TF") {
      question = await quizzesClient.createTFQuestionForQuiz(qid, newQuestion);
    }
    if(questionType == "FI") {
      question = await quizzesClient.createFIQuestionForQuiz(qid, newQuestion);
    }
    dispatch(addQuestion(question));
    return question;
  };

  const fetchQuestions = async () => {
    const questions = await quizzesClient.findQuestionsForQuiz(qid as string);
    dispatch(setQuestions(questions));
    console.log(questions)
  };
  useEffect(() => {
    fetchQuestions();
  }, []);

    if (!quiz) return null;
    return (
      <div id="wd-questions">
      {currentUser.role === "FACULTY" || currentUser.role === "ADMIN" && (
     <div>
      <button id="wd-add-question" className="btn btn-lg btn-danger me-1 float-end"
      onClick={async () => {  const q = await createQuestionForQuiz();
                              navigate(q._id)}}><FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
        Question</button>
      <select className="btn btn-lg btn-danger me-1 float-end" 
        value={questionType}
        onChange={(e) => setQuestionType(e.target.value)}>
        <option value="MC">Multiple Choice</option>
        <option value="TF">True/False</option>
        <option value="FI">Fill in the Blank</option>
      </select>
      </div>
      )}
      <br /><br /><br /><br />
      <ul id="wd-questions" className="list-group rounded-0">
        <li className="wd-question list-group-item p-0 mb-5 fs-5 border-gray">
          <div className="wd-title p-3 ps-2 bg-secondary fs-4 d-flex justify-content-between align-items-center">
            <div>
              <BsGripVertical className="me-2 fs-3" />
              <b>Questions</b>
            </div>
            <div className="d-flex justify-content-end align-items-center">
              <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
              <IoEllipsisVertical className="fs-4" />
            </div>
          </div>
          <ul className="wd-lessons list-group rounded-0">
          {questions
            .map((q: any) => (
              <li id="question1" className="wd-lesson list-group-item p-2 ps-1">
                  <div className="questions-list">
                    <div className="d-flex align-items-center">
                      <div className="border-left border-success me-2"></div>
                      <BsGripVertical className="fs-3" />
                      <TfiWrite className="me-3 fs-4" />
                      <div>
                        {currentUser.role === "FACULTY" || currentUser.role === "ADMIN" ? 
                          (<Link className="wd-question-link"
                              to={q._id}>
                              <h5><b>{q.title}</b></h5>
                            </Link>) :
                            (<Link className="wd-question-link"
                              to={q}>
                              <h5><b>{q.title}</b></h5>
                            </Link>)
                        }
                        <p><span className="wd-fg-color-black"><b>{q.availability ? "Available" : "Closed" }</b></span> 
                          | <b>Due</b> {new Date(q.dueDate).toLocaleString('en-US', { month: 'long', day: 'numeric', hour: 'numeric', minute: '2-digit', hour12: true })}
                          | {q.points} pts | {q.numQuestions} Questions</p>
                      </div>
                        <span className="ms-auto">
                          <QuestionControlButtons questionId={q._id} deleteQuestion={removeQuestion}/>
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
  