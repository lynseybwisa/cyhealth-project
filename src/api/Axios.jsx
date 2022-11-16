import axios from "axios";

const baseURL = `${process.env.REACT_APP_BASE_API_URL}`;

const axiosInstance = axios.create({
  baseURL: baseURL,
  headers: {
    "Content-Type": "application/json",
    accept: "application/json",
    'X-RapidAPI-Key': '45fbf8b1f5mshf3f09ea818b57a3p1937c1jsn0663bbd7e47c',
    'X-RapidAPI-Host': 'covid-193.p.rapidapi.com'
    // Authorization: `Bearer  ${token}`
  },
});

export const get_all_statistics = () => {
  return axiosInstance.get(`${baseURL}/statistics`,
);
}

// console.log("This is the base URL", baseURL)


export default axiosInstance;
