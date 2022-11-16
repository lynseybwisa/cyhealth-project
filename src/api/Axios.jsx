import axios from "axios";

const baseURL = `${process.env.REACT_APP_BASE_API_URL}`;

const axiosInstance = axios.create({
  baseURL: baseURL,
  headers: {
    "Content-Type": "application/json",
    accept: "application/json",
    // Authorization: `Bearer  ${token}`
  },
});

export const get_all_statistics = () => {
  return axiosInstance.get(`${baseURL}/statistics`,
);
}

console.log("This is the base URL", baseURL)


export default axiosInstance;
