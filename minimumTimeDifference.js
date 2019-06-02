/**
 * @param {string[]} timePoints
 * @return {number}
 */
var findMinDifference = function(timePoints) {
  timePoints = timePoints.sort((a, b) => {
    return getIntFormat(a) - getIntFormat(b);
  });

  let result = 1440;
  for (let i = 1; i < timePoints.length; i++) {
    result = Math.min(result, calculate(timePoints[i], timePoints[i - 1]));
  }

  result = Math.min(result, calculate(timePoints[0], timePoints[timePoints.length - 1]));

  return result;
};

function calculate(timeA, timeB) {
  let hoursA = parseInt(timeA.slice(0, 2));
  let minutesA = parseInt(timeA.slice(3, 5));

  let hoursB = parseInt(timeB.slice(0, 2));
  let minutesB = parseInt(timeB.slice(3, 5));

  let minutesDiff = minutesA - minutesB;
  let hoursDiffInMin = (hoursA - hoursB) * 60;

  let total = Math.abs(minutesDiff + hoursDiffInMin);

  return Math.min(total, 1440 - total);
}

function getIntFormat(time) {
  return parseInt(time.slice(0, 2)) * 60 + parseInt(time.slice(3, 5));
}
