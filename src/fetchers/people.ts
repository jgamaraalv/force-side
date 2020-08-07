import { API_URL } from "../config/api";

import { fetchUrlsArray } from "./index";
import People from "../types/People";

export interface FetchDataResponse {
  time: number;
  data: People;
}

export const fetchData = async (): Promise<FetchDataResponse[]> => {
  return await fetchUrlsArray([`${API_URL}/people/1`, `${API_URL}/people/4`]);
};
