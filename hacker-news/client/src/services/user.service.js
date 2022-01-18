import axios from "axios";
import authService from "./auth.service";
const {REACT_APP_API_URL} =  process.env;

const getProfile = () => { 
  const token = authService.getCurrentUser();
  
  return axios.get(REACT_APP_API_URL+'user/'+token._id,{headers: { Authorization: ` ${token}` }})
  .then(res => {
    console.log(res.data)
    return res.data;
  });
};

const updateProfile = (username,email,password) => {
  const token = authService.getCurrentUser();
  return axios.put(REACT_APP_API_URL+'user/'+token._id,{username,email,password});
};

const deleteProfile = () => {
  const token = authService.getCurrentUser();
  console.log(token.id);
  return axios.delete(REACT_APP_API_URL+'user/' +token._id);
};


export default {
  getProfile,
  updateProfile,
  deleteProfile,
};