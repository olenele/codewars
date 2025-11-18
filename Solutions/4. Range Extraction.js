// kata: https://www.codewars.com/kata/51ba717bb08c1cd60f00002f
// 4 kyu

/*
A format for expressing an ordered list of integers is to use a comma separated list of either

  -individual integers

  -or a range of integers denoted by the starting integer separated from the end integer in the range 
  by a dash, '-'. The range includes all integers in the interval including both endpoints. 
  It is not considered a range unless it spans at least 3 numbers. For example "12,13,15-17"

Complete the solution so that it takes a list of integers in increasing order and returns a 
correctly formatted string in the range format.

Example:
solution([-10, -9, -8, -6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20]);
// returns "-10--8,-6,-3-1,3-5,7-11,14,15,17-20"
*/


function solution(list){
  let solution = [];
  let rangeSize = 1;
  let firstNumber = list[0];
  let lastNumber = list[0];

  for (let i = 0; i < list.length; i++){
    // Reset firstNumber and lastNumber of range to be current index
    firstNumber = list[i];
    lastNumber = list[i];
    
    // Combine current index number +1 to the number in the next index, 
    // increase range size and i if the numbers are equal (which means sequent)
    // Also set lastNumber of range to equal the bigger number
    // Once numbers are not consequent anymore, set rangeSize back to 1 to get out of the loop
    do {
      if (list[i] + 1 === list[i + 1]){
        rangeSize++;
        i++;
        lastNumber = list[i]; // row above increases i so the index of the bigger number is i not i + 1
      } else {
        rangeSize = 1;
      }
    } while (rangeSize > 1);
    
    if (firstNumber + 1 == lastNumber){ // in case of only two sequent numbers insert them individually in order
      solution = solution.concat(list[i - 1]);
      solution = solution.concat(list[i]);
    } else if (firstNumber < lastNumber){ // bigger ranges are inserted as ranges
      solution = solution.concat(`${firstNumber}-${lastNumber}`);
    } else { // no sequent numbers, just insert the number
      solution = solution.concat(list[i]);
    }
  }
  
  return solution.join(",")
}