// Create a promise for retrieving Avengers movie title
const getAvengersTitle = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const title = "Avengers: Endgame";
      resolve(title);
    }, 2000);
  });
};

// Create a promise for retrieving the release year of Avengers movie
const getAvengersReleaseYear = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const releaseYear = 2019;
      resolve(releaseYear);
    }, 2000);
  });
};

// Create a promise for retrieving the director of Avengers movie
const getAvengersDirector = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const director = "Anthony Russo and Joe Russo";
      resolve(director);
    }, 2000);
  });
};

// Run and show how promise chaining works here
// Chain promises together to get the details of the Avengers movie
getAvengersTitle()
  .then((title) => {
    console.log(`The title of the movie is ${title}.`); // log the title
    return getAvengersReleaseYear(); // return a new promise to retrieve the release year
  })
  .then((releaseYear) => {
    console.log(`The movie was released in ${releaseYear}.`); // log the release year
    return getAvengersDirector(); // return a new promise to retrieve the directors
  })
  .then((director) => {
    console.log(`The movie was directed by ${director}.`); // log the directors
  })
  .catch((error) => {
    console.log(`Error: ${error}`); // log any errors
  });
