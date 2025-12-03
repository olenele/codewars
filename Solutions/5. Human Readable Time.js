// kata: https://www.codewars.com/kata/520b9d2ad5c005041100000f
// 5 kyu

/*
Description:
Write a function, which takes a non-negative integer (seconds) as input and returns the time in a 
human-readable format (HH:MM:SS)

HH = hours, padded to 2 digits, range: 00 - 99
MM = minutes, padded to 2 digits, range: 00 - 59
SS = seconds, padded to 2 digits, range: 00 - 59
The maximum time never exceeds 359999 (99:59:59)

You can find some examples in the test fixtures.
*/

function humanReadable (seconds) {
  let secondsCount = Math.floor(seconds % 60);
  let minutesCount = Math.floor((seconds - secondsCount) % 3600 / 60);
  let hoursCount = Math.floor(seconds / 3600);
  
  const formatNumber = (number) => {
    return ("0" + number).slice(-2)
  }
  
  return `${formatNumber(hoursCount)}:${formatNumber(minutesCount)}:${formatNumber(secondsCount)}`
}