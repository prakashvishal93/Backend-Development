const axios = require('axios');
// import axios from 'axios'; // this will work if we change the extension of the file as index.mjs

async function fetch() {
  const response = await axios
    .get('https://www.omdbapi.com/?t=harry&apikey=aa4fc371')
    .then((response) => {
      console.log(response.data);
    });
}

fetch();
