import axios from "axios";

const url = "http://localhost:4000/UpdateUserInfo";

// export const fetch = () => axios.post(url);
export const getNewInfo = (newInfo) => axios.post(url, newInfo);
