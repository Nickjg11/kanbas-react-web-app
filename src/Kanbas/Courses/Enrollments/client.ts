import axios from "axios";
const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;
const ENROLLMENTS_API = `${REMOTE_SERVER}/api/enrollments`

export const deleteEnrollment = async (courseId: string, userId: string) => {
    const response = await axios.delete(`${ENROLLMENTS_API}/${courseId}/${userId}`);
    return response.data;
    };
export const createEnrollment = async (courseId: string, userId: string) => {
    const response = await axios.post(`${ENROLLMENTS_API}/${courseId}/${userId}`);
    return response.data;
   };
export const findEnrollmentsForUser = async (userId: string) => {
    const response = await axios.get(`${ENROLLMENTS_API}/${userId}`);
    return response.data;
   };