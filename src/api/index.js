import axios from "axios";

const URL='http://localhost:3001';

export const fetchData=(user)=>axios.get(`${URL}/user/memory/${user}`);
export const SearchData=(user)=>axios.get(`${URL}/search/${user}`);
export const register=(newUser)=>axios.post(`${URL}/register`,newUser);
export const login=(newUser)=>axios.post(`${URL}/login`,newUser);
export const createMemory=(newMemory)=>axios.post(`${URL}/user/memory`,newMemory);