const request = require('request');
const userInput = process.argv.slice(2);
const catBreed = userInput[0];
const catApi = "https://api.thecatapi.com/v1/breeds/search?q=" + catBreed;

// console.log(catBreed);
// console.log(catApi);


request(catApi, (error, response, body) => {
  if (error) {
    console.log("ERROR: " , error);
  } else if (body.length === 2) {
    console.log(`${catBreed} not found`);
    return;
  } else {
    const catData = JSON.parse(body);
    console.log(catData);
  }
});



