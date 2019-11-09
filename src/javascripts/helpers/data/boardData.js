import axios from 'axios';
import apiKeys from '../apiKeys.json';

const baseUrl = apiKeys.firebaseKeys.databaseURL;

const getBoard = (uid) => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/boards.json?orderBy="uid"&equalTo="${uid}"`)
    .then((response) => {
      const demboards = response.data;
      const boards = [];
      Object.keys(demboards).forEach((fbId) => {
        demboards[fbId].id = fbId;
        boards.push(demboards[fbId]);
      });
      resolve(boards); // Hard code to only return first machine that comes back
    })
    .catch((error) => reject(error));
});

export default { getBoard };
