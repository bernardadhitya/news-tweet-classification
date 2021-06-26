import axios from 'axios';

const service = 'http://26902269bd8d.ngrok.io'

export const getAllTweets = async () => {
  const response = await axios.get(`${service}/tweets`);
  try {
    return response.data;
  } catch (error) {
    return [];
  }
}