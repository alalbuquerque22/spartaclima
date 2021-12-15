import axios from 'axios';
import {REACT_APP_OPEN_WHEATHER_KEY} from '@env';

const api = axios.create({
    baseURL: 'http://api.openweathermap.org/data/2.5', 
    
  
  });
  api.interceptors.request.use(config => {
    config.params = config.params || {};
  
    config.params.APPID = REACT_APP_OPEN_WHEATHER_KEY;
    config.params.units = config.params.units || 'metric';
  
    return config;
  });
  export default api;
  