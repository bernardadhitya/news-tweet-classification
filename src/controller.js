import axios from 'axios';
var FormData = require('form-data');

const service = 'http://d1ab5f21386b.ngrok.io';

export const getAllTweets = async () => {
  const response = await axios.get(`${service}/tweets`);
  try {
    return response.data.tweets;
  } catch (error) {
    return [];
  }
}

export const uploadCsv = async (selectedFile) => {
  let formData = new FormData();
  formData.append(
    "file",
    selectedFile,
  );
  const response = await axios.post(`${service}/tweets/upload`, formData);

  return response.data.tweets;
}