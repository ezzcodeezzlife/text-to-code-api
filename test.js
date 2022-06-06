const axios = require("axios");

const options = {
  method: 'POST',
  url: 'https://text-to-code-ai.p.rapidapi.com/',
  headers: {
    'content-type': 'application/json',
    'X-RapidAPI-Host': 'text-to-code-ai.p.rapidapi.com',
    'X-RapidAPI-Key': 'jksd'
  },
  data: '{"prompt":"Add two numbers and return them in javascript"}'
};

axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});