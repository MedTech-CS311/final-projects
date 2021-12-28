import axios from "axios";

const {REACT_APP_API_URL} =  process.env;


const register = (username, email, password) => {
  return axios.post(REACT_APP_API_URL+"user" + "/register", {
    username,
    email,
    password,
  });
};

const login = (email, password) => {console.log(REACT_APP_API_URL);
  return axios
    .post(REACT_APP_API_URL+"user"+ "/login", {
      email,
      password,
    })
    .then((res) => {
      if (res.data.token) {
        localStorage.setItem("token", JSON.stringify(res.data.token));
        localStorage.setItem("user",JSON.stringify(res.data.user))
      }

      return res.data;
    });
};

const logout = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("user");
  // window.location.reload(false);
};

const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem("user"));
};

export default {
  register,
  login,
  logout,
  getCurrentUser,
};