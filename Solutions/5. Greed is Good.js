// kata: https://www.codewars.com/kata/5270d0d18625160ada0000e4
// 5 kyu

/*
Description:
Greed is a dice game played with five six-sided dice. Your mission, should you choose to accept it, 
is to score a throw according to these rules. You will always be given an array with five 
six-sided dice values.

Three 1's => 1000 points
 Three 6's =>  600 points
 Three 5's =>  500 points
 Three 4's =>  400 points
 Three 3's =>  300 points
 Three 2's =>  200 points
 One   1   =>  100 points
 One   5   =>   50 point

Each of 5 dice can only be counted once in each roll. For example, a given "5" can only count 
as part of a triplet (contributing to the 500 points) or as a single 50 points, but not both 
in the same roll.

Example scoring
 Throw       Score
 ---------   ------------------
 5 1 3 4 1   250:  50 (for the 5) + 2 * 100 (for the 1s)
 1 1 1 3 1   1100: 1000 (for three 1s) + 100 (for the other 1)
 2 4 4 5 4   450:  400 (for three 4s) + 50 (for the 5)

Note: your solution must not modify the input array.
*/

function score( dice ) {
  let score = 0;  
  let numberCount = {};
  
  // Add a new proprety to the numberCount object with value 1 or increase the count if the property already exists
  for (let i = 0; i < dice.length; i++){
    if (numberCount.hasOwnProperty(dice[i])){
      numberCount[dice[i]]++;
    } else {
      numberCount[dice[i]] = 1;
    }
  }
 
  for (let number in numberCount){
    // Increase score for each valuable single die
    if (number == 1){
      score += numberCount["1"] * 100;
    }
    if (number == 5){
      score += numberCount["5"] * 50;
    }
    
    // Increase score for sets of three.
    // Take into account, that dices with value 1 & 5 have already been given points as singles
    if (numberCount[number] >= 3){
      if (number == 1){
        score += 700; // 1000 - 3 * 100
      } else if (number == 5){
        score += 350; // 500 - 3 * 50
      } else {
        score += number * 100
      }
    }
    
  }
  
  return score;
}