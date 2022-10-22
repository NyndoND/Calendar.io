import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';
import { Imonitor } from '../models/modelsApi';

const api = axios.create({
  baseURL: 'http://localhost:3333',
});

export { api };


