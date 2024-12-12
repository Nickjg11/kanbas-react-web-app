import { useLocation, useNavigate, useParams } from "react-router";
import * as db from "../../Database";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setQuizzes, updateQuiz } from "./reducer";
import * as quizzesClient from "./client";
import * as coursesClient from "../client";
import { time } from "console";
import DetailsEditor from "./DetailsEditor";
import QuestionsEditor from "./Questions/QuestionsEditor";
export default function QuizEditor() {
  const cid = useLocation().pathname.split("/")[3];
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { qid } = useParams();
  const { quizzes } = useSelector((state: any) => state.quizzesReducer);
  const fetchQuizzes = async () => {
    const quizzes = await coursesClient.findQuizzesForCourse(cid as string);
    dispatch(setQuizzes(quizzes));
  };
  useEffect(() => {
    fetchQuizzes();
  }, []);
  const quiz = quizzes.find((a: { _id: string | undefined; }) => a._id === qid);

  const saveQuiz = async (quiz: any) => {
    await quizzesClient.updateQuiz(quiz);
    dispatch(updateQuiz(quiz));
  };
    if (!quiz) return null;
    return (
      <div className="container mt-5">
    <ul className="nav nav-tabs" id="myTab" role="tablist">
      <li className="nav-item" role="presentation">
        <button
          className="nav-link active"
          id="tab1-tab"
          data-bs-toggle="tab"
          data-bs-target="#tab1"
          type="button"
          role="tab"
          aria-selected="true"
        >
          Details
        </button>
      </li>
      <li className="nav-item" role="presentation">
        <button
          className="nav-link"
          id="tab2-tab"
          data-bs-toggle="tab"
          data-bs-target="#tab2"
          type="button"
          role="tab"
          aria-selected="false"
        >
          Questions
        </button>
      </li>
    </ul>

    <div className="tab-content" id="myTabContent">
      <div
        className="tab-pane fade show active"
        id="tab1"
      >
        <DetailsEditor></DetailsEditor>
      </div>
      <div
        className="tab-pane fade"
        id="tab2"
      >
        <QuestionsEditor></QuestionsEditor>
      </div>
    </div>
  </div>
  );}
  