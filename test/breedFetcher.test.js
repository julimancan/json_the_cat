// breedFetcherTest.js

const { fetchBreedDescription } = require('../breedFetcher');
const { assert } = require('chai');

describe('fetchBreedDescription', () => {
  it('returns a string description for a valid breed, via callback', (done) => {
    fetchBreedDescription('siberian', (err, desc) => {
      // we expect no error for this scenario
      assert.equal(err, null);
      const expectedDesc = "The Siberians dog like temperament and affection makes the ideal lap cat and will live quite happily indoors. Very agile and powerful, the Siberian cat can easily leap and reach high places, including the tops of refrigerators and even doors. ";
      // compare returned description
      assert.equal(expectedDesc, desc);
      done();
    });
  });

  it('should return Error fetch details: breed not found invalid/non-existent breed is passed in.', (done) => {
    fetchBreedDescription('caca', (err, desc) => {
      const expectedDesc = "caca not found";
      assert.equal(expectedDesc, err);
      done();
    });
  });
});