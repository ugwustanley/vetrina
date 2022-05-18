
import axios from "axios";

const REACT_APP_API_BASEURL = "https://stark-mesa-12909.herokuapp.com/http://api.mediastack.com/v1/" ;

//https://cors-anywhere.herokuapp.com/https://newsapi.org/v2/

export const Http = axios.create({
  baseURL: REACT_APP_API_BASEURL,
  timeout: 45000,
  headers: {
    "X-Requested-With": "XMLHttpRequest",
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});


export default Http;
