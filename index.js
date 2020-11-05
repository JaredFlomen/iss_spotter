// const {fetchMyIP, fetchCoordsByIP, fetchISSFlyOverTimes} = require('./iss');
const nextISSTimesForMyLocation = require('./iss');
const request = require('request');
const MY_IP = '174.94.0.82';
const MY_CORDS = {lat: 43.6319, lon: -79.3716};

// fetchMyIP((error, ip) => {
//   if (error) {
//     console.log("It didn't work!" , error);
//     return;
//   }
//   console.log('It worked! Returned IP:' , ip);
// });

// fetchCoordsByIP(MY_IP, (error, location) => {
//   if (error) {
//     console.log("It didn't work! ", error);
//     return;
//   }
//   console.log(location);
// });

// fetchISSFlyOverTimes(MY_CORDS, (error, response) => {
//   if (error) {
//     console.log("It didn't work!" , error);
//     return;
//   }
//   console.log("It worked! Returned flyover times:", response);
// });
const printTimes = function(passTimes) {
  for (const pass of passTimes) {
    const datetime = new Date(0);
    datetime.setUTCSeconds(pass.risetime);
    const duration = pass.duration;
    console.log(`Next pass at ${datetime} for ${duration} seconds!`);
  }
};

nextISSTimesForMyLocation((error, passTimes) => {
  if (error) {
    return console.log("It didn't work!", error);
  }
  //Success
  printTimes(passTimes);
});