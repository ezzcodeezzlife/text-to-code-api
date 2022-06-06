const axios = require("axios");

const options = {
  method: 'GET',
  url: 'http://localhost:3000/api/text-to-code',
  data:  '{"prompt":"print hello world"}',
  headers: {
    'X-RapidAPI-Host': 'crypto-ai.p.rapidapi.com',
    'X-RapidAPI-Key': 'fc5f8b88b8msh0958fdaf12d278ap105471jsn1e2e43207380'
  }
};

axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});