import axios from "axios";
import * as Const from '../config/Constants';

const API_URL = Const.API_URL;

export const axiosGet = (url) => {
    return axios.get(API_URL + url, {
      headers: {
        "content-type": "application/json",
      },
    });
  };

  export const axiosPost = (url, body) => {
    return axios.post(API_URL + url, body, {
      headers: {
        "content-type": "application/json",
      },
    });
  };
  