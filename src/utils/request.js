import axios from "axios";
import {swApiBaseUrl, swApiStarships} from "./config";

const instance = axios.create({
  baseURL: swApiBaseUrl,
  headers: {
    "Content-Type": "application/json",
  },
});

const requestManager = () => {
  const fetchStarships = async () => {
    try {
      const response = await instance.get(swApiStarships);
      return {data: response.data};
    } catch (err) {
      return {error: err.message};
    }
  };

  const fetchStarship = async (id) => {
    try {
      const response = await instance.get(`${swApiStarships}/${id}`);
      return {data: response.data};
    } catch (err) {
      return {error: err.message};
    }
  };

  return {
    fetchStarships,
    fetchStarship,
  };
};

export default requestManager;
