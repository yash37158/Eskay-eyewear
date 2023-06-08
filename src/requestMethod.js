import axios from "axios";

const BASE_URL = "http://localhost:3800/api/";
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyZjdhNjFjM2I1OWQ2NjBhY2ZhNTJmNSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY2MDQ3NTkwMywiZXhwIjoxNjYwNzM1MTAzfQ.e27bM_v7Xw3PWuptDUdUXDJwpWFOOFCEAgzLW_ms-kg"

export const publicRequest = axios.create({
    baseURL: BASE_URL,
    
  });
  
  export const userRequest = axios.create({
    baseURL: BASE_URL,
    header: { token: `Bearer ${TOKEN}` },
  });



