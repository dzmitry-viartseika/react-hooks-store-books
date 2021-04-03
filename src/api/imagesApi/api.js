import { CURRENT_SERVER } from '../domain';
const axios = require('axios');

export default {
  getImagesList() {
    const instCred = axios.create({
      baseURL: CURRENT_SERVER,
    });
    return instCred.get('photos?_start=0&_limit=5');
  },
};
