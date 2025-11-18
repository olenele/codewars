// kata: https://www.codewars.com/kata/5287e858c6b5a9678200083c
// 6 kyu
/*
A Narcissistic Number (or Armstrong Number) is a positive number which is the sum of its own digits, 
each raised to the power of the number of digits in a given base. In this Kata, we will restrict 
ourselves to decimal (base 10).

For example, take 153 (3 digits), which is narcissistic:
  1^3 + 5^3 + 3^3 = 1 + 125 + 27 = 153

  Your code must return true or false (not 'true' and 'false') depending upon 
  whether the given number is a Narcissistic number in base 10.

  Error checking for text strings or other invalid inputs is not required, 
  only valid positive non-zero integers will be passed into the function.
*/


function narcissistic(value) {
  let power = value.toString().length;
  let valueString = value.toString();
  let sumOfDigitsToPower = 0;
  
  for (let i = 0; i < power; i++){
    sumOfDigitsToPower += Math.pow(valueString[i], power);
  }
  
  return value === sumOfDigitsToPower;
}