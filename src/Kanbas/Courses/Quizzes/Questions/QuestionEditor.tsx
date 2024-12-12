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
import TrueFalseQuestionEditor from "./TrueFalseQuestionEditor";
import FillInBlankQuestionEditor from "./FillInBlankQuestionEditor";
import MultipleChoiceQuestionEditor from "./MultipleChoiceQuestionEditor";
export default function QuestionEditor() {
  const cid = useLocation().pathname.split("/")[3];
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const quizId = useLocation().pathname.split("/")[5];
  const { quizzes } = useSelector((state: any) => state.quizzesReducer);
  const quiz = quizzes.find((q: { _id: string | undefined; }) => q._id === quizId);
  
  const questionId = useLocation().pathname.split("/")[6];
  const { questions } = useSelector((state: any) => state.questionsReducer);
  const question = questions.find((q: { _id: string | undefined; }) => q._id === questionId);
  const saveQuestion = async (question: any) => {
    await questionsClient.updateQuestion(question);
    dispatch(updateQuestion(question));
  };
    if (!quiz) return null;
    if (question.type == "MULTIPLE CHOICE") {
      return <MultipleChoiceQuestionEditor></MultipleChoiceQuestionEditor>
    }
    if (question.type == "TRUE FALSE") {
      return <TrueFalseQuestionEditor></TrueFalseQuestionEditor>
    }
    if (question.type == "FILL IN BLANK") {
      return <FillInBlankQuestionEditor></FillInBlankQuestionEditor>
    }
    return(<div></div>);}
  