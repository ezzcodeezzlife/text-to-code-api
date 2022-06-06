const axios = require("axios");

const options = {
  method: 'POST',
  url: 'https://text-to-code-ai.p.rapidapi.com/api/text-to-code',
  headers: {
    'content-type': 'application/json',
    'X-RapidAPI-Host': 'text-to-code-ai.p.rapidapi.com',
    'X-RapidAPI-Key': 'fc5f8b88b8msh0958fdaf12htfd278ap105471jsn1e2e43207380'
  },
  data: '{"prompt":"Add two numbers and return them in javascript"}'
};

axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});