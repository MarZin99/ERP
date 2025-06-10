import axios from "axios";
const API_BASE_URL = "https://localhost:7075/api/position";

export const fetchPositions = async () => {
  const response = await axios.get(`${API_BASE_URL}`);
  return response.data.data;
}