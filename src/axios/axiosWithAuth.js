import axios from "axios";

const axiosWithAuth = () => {
  const token = localStorage.getItem("token");
  const instance = axios.create({
    headers: {
      "Content-Type": "application/json",
      Authorization: token
    }
  });

  return instance;
};

export default axiosWithAuth;
