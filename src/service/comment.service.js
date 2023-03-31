import axios from 'axios';

const API_URL = "http://localhost:8080/api/comment/";

export const getComments = async (gameName) => {
  const fetchData = await axios.get(API_URL + gameName);
  if(fetchData && fetchData.data) return fetchData.data;
  return [];
};