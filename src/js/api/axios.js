import axios from "axios";

const BASE_URL = "https://nataliya-backender.org.kg/auth";

export default axios.create({
    baseURL: BASE_URL,  
    headers: {
      "Content-Type": "application/json"
    }
  });


