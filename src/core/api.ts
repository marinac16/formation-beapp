import axios from 'axios';

export const APIKey = 'eac86f2a1287f417645f574439af24278441bd8a';

export enum APIEndpoints {
  API_STATIONS = '/stations',
  API_CONTRACTS = '/contracts',
}

const APIClient = axios.create({
  baseURL: 'https://api.jcdecaux.com/vls/v3/',
  responseType: 'json',
});

export default APIClient;
