import axios from "axios";

const BASE_URL = "http://159.223.28.95/auth";

export default axios.create({
    baseURL: BASE_URL,  
    headers: {
      "Content-Type": "application/json"
    }
  });


