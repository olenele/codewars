// kata: https://www.codewars.com/kata/521c2db8ddc89b9b7a0000c1
// 4 kyu

/*
Description:
Snail Sort
Given an n x n array, return the array elements arranged from outermost elements to the 
middle element, traveling clockwise.

array = [[1,2,3],
         [4,5,6],
         [7,8,9]]
snail(array) #=> [1,2,3,6,9,8,7,4,5]
For better understanding, please follow the numbers of the next array consecutively:

array = [[1,2,3],
         [8,9,4],
         [7,6,5]]
snail(array) #=> [1,2,3,4,5,6,7,8,9]

NOTE: The idea is not sort the elements from the lowest value to the highest; the idea is 
to traverse the 2-d array in a clockwise snailshell pattern.

NOTE 2: The 0x0 (empty matrix) is represented as en empty array inside an array [[]].

*/

// Illustration of the kata available at the kata link (line 1) to better grasp the idea

snail = function(array) {
  if (array.length < 2) return array[0];
  
  let currentPosition = {i : 0, j : 0};
  let nextPosition = {i: 0, j: 0};
  let direction = "right";
  let arrayCopy = array;
  let solution = [];
  
  const directions = {
    right:  {i : 0,   j : 1},
    down:   {i : 1,   j : 0},
    left:   {i : 0,   j : -1},
    up:     {i : -1,  j : 0}
  }
  
  const changeDirection = () => {
    switch(direction){
        case "right": direction = "down"; break;
        case "down": direction = "left"; break;
        case "left": direction = "up"; break;
        case "up": direction = "right"; break;
    }
  }
  
  const shouldDirectionChange = () => {
    // check if going out of bounds or to a previously visited position
    if (nextPosition.i > array.length - 1 
        || nextPosition.i < 0 
        || nextPosition.j > array.length - 1 
        || nextPosition.j < 0 
        || arrayCopy[nextPosition.i][nextPosition.j] === "visited"){
      nextPosition.i = currentPosition.i - directions[direction].i;
      nextPosition.j = currentPosition.j - directions[direction].j;
      return true;
    } else {
      return false;
    }
  }
    
  const calculateNextPosition = () => {
    nextPosition.i = currentPosition.i + directions[direction].i;
    nextPosition.j = currentPosition.j + directions[direction].j;
    
    if (shouldDirectionChange()){
        changeDirection();
        nextPosition.i = currentPosition.i + directions[direction].i;
        nextPosition.j = currentPosition.j + directions[direction].j;
    }
  }
  
  for ( let i = 0; i < array.length * array.length; i++){   
    currentPosition = nextPosition;
    solution.push(array[currentPosition.i][currentPosition.j]);
    arrayCopy[currentPosition.i][currentPosition.j] = "visited";
    
    calculateNextPosition();
  }
  
  return solution;
}