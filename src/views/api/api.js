import axios from 'axios';
const api = axios.create({baseURL:"https://kiumsystem.herokuapp.com"});

export default api;