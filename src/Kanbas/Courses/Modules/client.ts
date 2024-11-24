import axios from "axios";
const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;
const MODULES_API = `${REMOTE_SERVER}/api/modules`
export const updateModule = async (module: any) => {
    const response = await axios.put(`${MODULES_API}/${module._id}`, module);
    return response.data;
  };
  
export const deleteModule = async (moduleId: string) => {
 const response = await axios.delete(`${MODULES_API}/${moduleId}`);
 return response.data;
};
