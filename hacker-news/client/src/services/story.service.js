import axios from "axios";
import authService from "./auth.service";

const {REACT_APP_API_URL} =  process.env;

const getStories = () => {
 return axios.get(REACT_APP_API_URL+'Stories' + "/")
 
};

const getTopTenStories = () => {
  return axios.get(REACT_APP_API_URL+'Stories' + "/top10")
  
 };

const create = (title,description) => {
  let user = authService.getCurrentUser();
  return axios.post(REACT_APP_API_URL+'Stories' + "/Story", {
    title,
    description,
    score : 1,
    by : {id : user.Username,karma : 0 , about : "still to be done " }  //karma system to be done
  });
}


export default {
  getStories,
  create,
  getTopTenStories
};