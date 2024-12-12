import { useLocation, useNavigate, useParams } from "react-router";
import * as db from "../../Database";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setQuizzes, updateQuiz } from "./reducer";
import * as quizzesClient from "./client";
import * as coursesClient from "../client";
import { time } from "console";
export default function QuizEditor() {
  const cid = useLocation().pathname.split("/")[3];
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { qid } = useParams();
  const { quizzes } = useSelector((state: any) => state.quizzesReducer);

  const quiz = quizzes.find((a: { _id: string | undefined; }) => a._id === qid);
  const [title, setTitle] = useState(quiz.title);
  const [instructions, setInstructions] = useState(quiz.instructions);
  const [type, setType] = useState(quiz.type);
  const [group, setGroup] = useState(quiz.group);
  const [shuffleAnswers, setShuffleAnswers] = useState(quiz.shuffleAnswers);
  const [timeLimit, setTimeLimit] = useState(quiz.timeLimit);
  const [minutes, setMinutes] = useState(quiz.minute);
  const [multipleAttempts, setMultipleAttempts] = useState(quiz.multipleAttempts);
  const [numAttempts, setNumAttempts] = useState(quiz.numAttempts);
  const [showCorrectAnswers, setShowCorrectAnswers] = useState(quiz.showCorrectAnswers);
  const [accessCode, setAccessCode] = useState(quiz.accessCode);
  const [oneAtATime, setOneAtATime] = useState(quiz.oneAtATime);
  const [webcamRequired, setWebcamRequired] = useState(quiz.webcamRequired);
  const [lockQuestionsAfterAnswering, setLockQuestionsAfterAnswering] = useState(quiz.lockQuestionsAfterAnswering);
  const [points, setPoints] = useState(quiz.points);
  const [dueDate, setDueDate] = useState(quiz.dueDate);
  const [availableFromDate, setAvailableFromDate] = useState(quiz.availableFromDate);
  const [availableUntilDate, setAvailableUntilDate] = useState(quiz.availableUntilDate);
  const saveQuiz = async (quiz: any) => {
    await quizzesClient.updateQuiz(quiz);
    dispatch(updateQuiz(quiz));
  };
    if (!quiz) return null;
    return (
      <div id="wd-quizzes-editor">
        <div id="wd-css-styling-forms">
          <div className="mb-3">
            <label htmlFor="input1" className="form-label">
              Quiz Name</label>
            <input type="name" className="form-control"
              id="input1" defaultValue={quiz.title}
              onChange={(e) => {setTitle(e.target.value)}}/>
          </div>
          <div className="mb-3">
            Quiz Instructions
            <textarea className="form-control" 
              id="textarea1" 
              rows={15}
              defaultValue={quiz.instructions}
              onChange={(e) => setInstructions(e.target.value)}>
            </textarea>
          </div>
          <div id="wd-css-left-right-layout">
            <div className="mb-3 wd-grid-row">
              <div className="mb-3 wd-grid-col-half-page">
                <label className="mt-2 mb-2 pe-3 float-end">Quiz Type</label>
              </div>
              <div className="wd-grid-col-half-page">
                <select className="form-select"
                  id="quiz-type"
                  defaultValue={quiz.type}
                  onChange={(e) => setType(e.target.value)}>
                  <option>GRADED QUIZ</option>
                  <option>PRACTICE QUIZ</option>
                  <option>GRADED SURVEY</option>
                  <option>UNGRADED SURVEY</option>
                </select>
              </div>
            </div>
            <div className="mb-3 wd-grid-row">
              <div className="mb-3 wd-grid-col-half-page">
                <label className="mt-2 mb-2 pe-3 float-end">Assignment Group</label>
              </div>
              <div className="wd-grid-col-half-page">
                <select className="form-select"
                  id="quiz-group"
                  defaultValue={quiz.group}
                  onChange={(e) => setGroup(e.target.value)}>
                  <option>QUIZZES</option>
                  <option>EXAMS</option>
                  <option>ASSIGNMENTS</option>
                  <option>PROJECT</option>
                </select>
              </div>
            </div>
            <div className="mb-3 wd-grid-row">
              <div className="mb-3 wd-grid-col-half-page">
                <label className="mt-2 mb-2 pe-3 float-end">Shuffle Answers</label>
              </div>
              <div className="wd-grid-col-half-page">
                <input className="mb-3 form-check-input" type="checkbox"
                  id="quiz-shuffleAnswers"
                  defaultChecked={quiz.shuffleAnswers}
                  onChange={(e) => setShuffleAnswers(e.target.checked)}>
                </input>
              </div>
            </div>
            <div className="mb-3 wd-grid-row">
              <div className="mb-3 wd-grid-col-half-page">
                <label className="mt-2 mb-2 pe-3 float-end">Time Limit</label>
              </div>
              <div className="wd-grid-col-half-page">
                <input className="mb-3 form-check-input" type="checkbox"
                  id="quiz-timeLimit"
                  defaultChecked={quiz.timeLimit}
                  onChange={(e) => setTimeLimit(e.target.checked)}>
                </input>
              </div>
            </div>
            <div className="mb-3 wd-grid-row">
              <div className="mb-3 wd-grid-col-half-page">
                <label className="mt-2 mb-2 pe-3 float-end">Minutes</label>
              </div>
              <div className="wd-grid-col-half-page">
                <input
                  type="number"
                  className="form-control"
                  id="quiz-minutes"
                  defaultValue={quiz.minutes ? quiz.minutes : 20}
                  onChange={(e) => setMinutes(e.target.value)}
                  min="0"
                />
              </div>
            </div>
            <div className="mb-3 wd-grid-row">
              <div className="mb-3 wd-grid-col-half-page">
                <label className="mt-2 mb-2 pe-3 float-end">Allow Multiple Attempts</label>
              </div>
              <div className="wd-grid-col-half-page">
                <input className="mb-3 form-check-input" type="checkbox"
                  id="quiz-multipleAttempts"
                  defaultChecked={quiz.multipleAttempts}
                  onChange={(e) => setMultipleAttempts(e.target.checked)}>
                </input>
              </div>
            </div>
            <div className="mb-3 wd-grid-row">
              <div className="mb-3 wd-grid-col-half-page">
                <label className="mt-2 mb-2 pe-3 float-end">Number of Attempts</label>
              </div>
              <div className="wd-grid-col-half-page">
                <input
                  type="number"
                  className="form-control"
                  id="quiz-numAttempts"
                  defaultValue={quiz.numAttempts}
                  onChange={(e) => setNumAttempts(e.target.value)}
                  min="0"
                />
              </div>
            </div>
            <div className="mb-3 wd-grid-row">
              <div className="mb-3 wd-grid-col-half-page">
                <label className="mt-2 mb-2 pe-3 float-end">Show Correct Answers</label>
              </div>
              <div className="wd-grid-col-half-page">
                <input className="mb-3 form-check-input" type="checkbox"
                  id="quiz-showCorrectAnswers"
                  defaultChecked={quiz.showCorrectAnswers}
                  onChange={(e) => setShowCorrectAnswers(e.target.checked)}>
                </input>
              </div>
            </div>
            <div className="mb-3 wd-grid-row">
              <div className="mb-3 wd-grid-col-half-page">
                <label className="mt-2 mb-2 pe-3 float-end">Access Code</label>
              </div>
              <div className="wd-grid-col-half-page">
                <textarea className="form-control"
                  rows={1}
                  id="quiz-accessCode"
                  defaultValue={quiz.accessCode}
                  onChange={(e) => setAccessCode(e.target.value)}>
                </textarea>
              </div>
            </div>
            <div className="mb-3 wd-grid-row">
              <div className="mb-3 wd-grid-col-half-page">
                <label className="mt-2 mb-2 pe-3 float-end">One Question at a Time</label>
              </div>
              <div className="wd-grid-col-half-page">
                <input className="mb-3 form-check-input" type="checkbox"
                  id="quiz-oneAtATime"
                  defaultChecked={quiz.oneAtATime ? quiz.oneAtATime : true}
                  onChange={(e) => setOneAtATime(e.target.checked)}>
                </input>
              </div>
            </div>
            <div className="mb-3 wd-grid-row">
              <div className="mb-3 wd-grid-col-half-page">
                <label className="mt-2 mb-2 pe-3 float-end">Webcam Required</label>
              </div>
              <div className="wd-grid-col-half-page">
                <input className="mb-3 form-check-input" type="checkbox"
                  id="quiz-webcamRequired"
                  defaultChecked={quiz.webcamRequired}
                  onChange={(e) => setWebcamRequired(e.target.checked)}>
                </input>
              </div>
            </div>
            <div className="mb-3 wd-grid-row">
              <div className="mb-3 wd-grid-col-half-page">
                <label className="mt-2 mb-2 pe-3 float-end">Lock Questions after Answering</label>
              </div>
              <div className="wd-grid-col-half-page">
                <input className="mb-3 form-check-input" type="checkbox"
                  id="quiz-lockQuestionsAfterAnswering"
                  defaultChecked={quiz.lockQuestionsAfterAnswering}
                  onChange={(e) => setLockQuestionsAfterAnswering(e.target.checked)}>
                </input>
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
                  defaultValue={`${new Date(quiz.dueDate).getFullYear()}-${String(new Date(quiz.dueDate).getMonth() + 1).padStart(2, '0')}-${String(new Date(quiz.dueDate).getDate()).padStart(2, '0')}`}
                  onChange={(e) => setDueDate(e.target.value)}/>
                <div className="wd-grid-row">
                  <div className="mb-3 wd-grid-col-half-page">
                    <label className="mt-2 mb-2 pe-3 float-start ps-2"><b>Available from</b></label>
                    <div className="wd-grid-row">
                      <input className="form-control" type="date"
                      defaultValue={`${new Date(quiz.dueDate).getFullYear()}-${String(new Date(quiz.availableFromDate).getMonth() + 1).padStart(2, '0')}-${String(new Date(quiz.availableFromDate).getDate()).padStart(2, '0')}`}
                      onChange={(e) => setAvailableFromDate(e.target.value)}/>
                    </div>
                  </div>
                  <div className="mb-3 wd-grid-col-half-page">
                    <label className="mt-2 mb-2 pe-3 float-start ps-2"><b>Until</b></label>
                    <div className="wd-grid-row">
                      <input className="form-control" type="date" 
                      defaultValue={`${new Date(quiz.dueDate).getFullYear()}-${String(new Date(quiz.dueDate).getMonth() + 1).padStart(2, '0')}-${String(new Date(quiz.dueDate).getDate()).padStart(2, '0')}`}
                      onChange={(e) => setAvailableUntilDate(e.target.value)}/>
                    </div>
                  </div>
              </div>
            </div>
          </div>
          <Link className="wd-quiz-link"
                            to="../Quizzes">
            <button id="wd-save-btn" className="btn btn-lg btn-danger me-1 float-end"
                          onClick={() => { saveQuiz({ ...quiz, title: title, course: cid, instructions: instructions, points: points, dueDate: dueDate, availableFromDate: availableFromDate, availableUntilDate: availableUntilDate, type: type, group: group, shuffleAnswers: shuffleAnswers, timeLimit: timeLimit, minutes: minutes, multipleAttempts: multipleAttempts, numAttempts: numAttempts, showCorrectAnswers: showCorrectAnswers, accessCode: accessCode, oneAtATime: oneAtATime, webcamRequired: webcamRequired, lockQuestionsAfterAnswering: lockQuestionsAfterAnswering })
                                navigate(-1)
                        }}>
              Save
            </button>
          </Link>
          <Link className="wd-quiz-link"
                          to="../Quizzes">
                          <button id="wd-cancel-btn" className="btn btn-lg btn-secondary btn-danger me-1 float-end">
                            Cancel
                          </button>
          </Link>
        </div>
      </div>
    </div>
  );}
  