import axios from 'axios';
import apiKeys from '../apiKeys.json';

const baseUrl = apiKeys.firebaseKeys.databaseURL;

const getPins = (boardId) => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/pins.json?orderBy="boardId"&equalTo="${boardId}"`)
    .then((response) => {
      const dempins = response.data;
      const pins = [];
      Object.keys(dempins).forEach((fbId) => {
        dempins[fbId].id = fbId;
        pins.push(dempins[fbId]);
      });
      resolve(pins); // Hard code to only return first machine that comes back
    })
    .catch((error) => reject(error));
});

const deletePin = (id) => axios.delete(`${baseUrl}/pins/${id}.json`);
const addPin = (newPin) => axios.post(`${baseUrl}/pins.json`, newPin);


export default {
  getPins,
  deletePin,
  addPin,
};
