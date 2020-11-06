const {nextISSTimesForMyLocation } = require('./iss_promised');

// fetchMyIP()
//   .then(fetchCoordsByIP)
//   .then(fetchISSFlyOverTimes)
//   .then(body => console.log(body));

const printPassTimes = function(flyOver) {
  for (const pass of flyOver) {
    const datetime = new Date(0);
    datetime.setUTCSeconds(pass.risetime);
    const duration = pass.duration;
    console.log(`Next pass at ${datetime} for ${duration} seconds!`);
  }
};

nextISSTimesForMyLocation()
  .then((flyOver) => {
    printPassTimes(flyOver);
  })
  .catch((error) => {
    console.log("It didn't work: ", error.message);
  });