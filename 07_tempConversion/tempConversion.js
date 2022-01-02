const ftoc = function(tempF) {
  let tempC = (tempF - 32) * (5/9);
  let tempCRound = (Math.round(tempC * 10) / 10);
  return tempCRound;
};

const ctof = function(tempC) {
  let tempF = Math.round(((tempC * (9/5)) + 32) * 10) / 10;
  return tempF
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
