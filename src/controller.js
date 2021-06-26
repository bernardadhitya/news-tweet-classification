import axios from 'axios';
var FormData = require('form-data');
var fs = require('fs');

const service = 'http://200be9805e58.ngrok.io'

export const getAllTweets = async () => {
  const response = await axios.get(`${service}/tweets`);
  try {
    return response.data;
  } catch (error) {
    return [];
  }
}

export const uploadCsv = async (selectedFile) => {
  let formData = new FormData();
  formData.append(
    "myFile",
    selectedFile,
    selectedFile.name
  );
  console.log(formData);
  const response = await axios.post(`${service}/tweets/upload`, formData);
}