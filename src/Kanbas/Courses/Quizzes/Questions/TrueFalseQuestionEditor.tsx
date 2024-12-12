import { useLocation, useNavigate, useParams } from "react-router";
import * as db from "../../../Database";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setQuestions, updateQuestion } from "./reducer";
import * as questionsClient from "./client";
import * as quizzesClient from "../client";
import * as coursesClient from "../../client";
import { time } from "console";
export default function QuizEditor() {
  const cid = useLocation().pathname.split("/")[3];
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const quizId = useLocation().pathname.split("/")[5];
  const { quizzes } = useSelector((state: any) => state.quizzesReducer);
  const quiz = quizzes.find((q: { _id: string | undefined; }) => q._id === quizId);
  
  const questionId = useLocation().pathname.split("/")[6];
  const { questions } = useSelector((state: any) => state.questionsReducer);
  const question = questions.find((q: { _id: string | undefined; }) => q._id === questionId);
  
  const [title, setTitle] = useState(question.title);
  const [questionContent, setQuestionContent] = useState(question.question);
  const [points, setPoints] = useState(question.points);
  const [trueFalse, setTrueFalse] = useState(question.choices.isCorrect);
  
  const saveQuestion = async (question: any) => {
    console.log(question)
    await questionsClient.updateQuestion(question);
    dispatch(updateQuestion(question));
  };
    if (!quiz) return null;
    return (
      <div id="wd-quizzes-editor">
        <div id="wd-css-styling-forms">
          <div className="mb-3">
            <label htmlFor="input1" className="form-label">
              Question Title</label>
            <input type="name" className="form-control"
              id="input1" defaultValue={question.title}
              onChange={(e) => {setTitle(e.target.value)}}/>
          </div>
          <div className="mb-3">
            Question Content
            <textarea className="form-control" 
              id="textarea1" 
              rows={15}
              defaultValue={question.question}
              onChange={(e) => setQuestionContent(e.target.value)}>
            </textarea>
          </div>
          <div className="mb-3 wd-grid-row">
              <div className="mb-3 wd-grid-col-half-page">
                <label className="mt-2 mb-2 pe-3 float-end">Points</label>
              </div>
              <div className="wd-grid-col-half-page">
                <input
                  type="number"
                  className="form-control"
                  id="question-points"
                  defaultValue={question.points}
                  onChange={(e) => setPoints(e.target.value)}
                  min="0"
                />
              </div>
            </div>
          <div id="wd-css-left-right-layout">
            <div className="mb-3 wd-grid-row">
              <div className="mb-3 wd-grid-col-half-page">
                <label className="mt-2 mb-2 pe-3 float-end">True/False</label>
              </div>
              <div className="wd-grid-col-half-page">
                <input className="mb-3 form-check-input" type="checkbox"
                  id="quiz-shuffleAnswers"
                  defaultChecked={question.choices.isCorrect}
                  onChange={(e) => setTrueFalse(e.target.checked)}>
                </input>
              </div>
            </div>
          </div>
          <Link className="wd-quiz-link"
                            to="../Quizzes">
            <button id="wd-save-btn" className="btn btn-lg btn-danger me-1 float-end"
                          onClick={() => { saveQuestion({ ...question, title: title, quiz: quizId, question: questionContent, points: points, choices: [{text: "True", isCorrect: trueFalse}, {text: "False", isCorrect: !trueFalse}]})
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
  );}
  