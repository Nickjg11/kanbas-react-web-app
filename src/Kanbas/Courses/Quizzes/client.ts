import axios from "axios";
const axiosWithCredentials = axios.create({ withCredentials: true });
const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;
const QUIZZES_API = `${REMOTE_SERVER}/api/quizzes`;
export const updateQuiz = async (quiz: any) => {
    const { data } = await axiosWithCredentials.put(`${QUIZZES_API}/${quiz._id}`, quiz);
    return data;
  };  
export const deleteQuiz = async (quizId: string) => {
 console.log(quizId)
 const response = await axiosWithCredentials.delete(`${QUIZZES_API}/${quizId}`);
 return response.data;
};

export const createMCQuestionForQuiz = async (quizId: string, question: any) => {
  const newQuestion = {
    ...question,
    type: "MULTIPLE CHOICE",
  };
  const response = await axiosWithCredentials.post(
    `${QUIZZES_API}/${quizId}/questions/mc`,
    newQuestion
  );
  return response.data;
};
export const createTFQuestionForQuiz = async (quizId: string, question: any) => {
  const newQuestion = {
    ...question,
    type: "TRUE FALSE",
  };
  console.log(quizId, newQuestion.quiz)
  const response = await axiosWithCredentials.post(
    `${QUIZZES_API}/${quizId}/questions/tf`,
    newQuestion
  );
  return response.data;
};
export const createFIQuestionForQuiz = async (quizId: string, question: any) => {
  const newQuestion = {
    ...question,
    type: "FILL IN BLANK",
  };
  console.log(quizId, newQuestion.quiz)
  const response = await axiosWithCredentials.post(
    `${QUIZZES_API}/${quizId}/questions/fi`,
    newQuestion
  );
  return response.data;
};
export const findQuestionsForQuiz = async (quizId: string) => {
  const response = await axiosWithCredentials
    .get(`${QUIZZES_API}/${quizId}/questions`);
  return response.data;
};