// kata: https://www.codewars.com/kata/52597aa56021e91c93000cb0
// 5 kyu

/*
Write an algorithm that takes an array and moves all of the zeros to the end, 
preserving the order of the other elements.

moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]
*/

function moveZeros(arr) {
  
  let result = arr;
  let arrayIndex = 0;  

  for (let i = 0; i < arr.length; i++){
    if (result[arrayIndex] === 0){   
      result.splice([arrayIndex], 1);
      result.push(0);
    } else {
      arrayIndex++;
    }
  }
  return result;
}