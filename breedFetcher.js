const request = require('request');
const userInput = process.argv.slice(2);
const breedName = userInput[0];
console.log("breedname: ", breedName);






const fetchBreedDescription = (breedName, callback) => {

  const catApi = "https://api.thecatapi.com/v1/breeds/search?q=" + breedName;
  request(catApi, (error, response, body) => {
    if (error) {
      callback(error, null)
      // console.log("ERROR: ", error);
    }
    console.log("body: ", body);
    // console.log(typeof body);
    const catData = JSON.parse(body);
    if (catData.length === 0) {
      callback(`${breedName} not found`, null);
      return;
    } else {
      callback(null, catData[0].description)
    }
  })

};



module.exports = { fetchBreedDescription };
