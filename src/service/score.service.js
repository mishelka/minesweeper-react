import axios from 'axios';

const API_URL = "http://localhost:8080/api/score/";

export const getScore = async (gameName) => {
  const fetchData = await axios.get(API_URL + gameName);
  if(fetchData && fetchData.data) return fetchData.data;
  return [];
};