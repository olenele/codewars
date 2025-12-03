// kata: https://www.codewars.com/kata/52efefcbcdf57161d4000091
// 6 kyu

/*
Description:
The main idea is to count all the occurring characters in a string. 
If you have a string like aba, then the result should be {'a': 2, 'b': 1}.

What if the string is empty? Then the result should be empty object literal, {}.
*/

function count(string) {
  let result = {};
  
  for (let i = 0; i < string.length; i++){
    if (result[string.charAt(i)]){
      result[string.charAt(i)]++;
    } else {
      result[string.charAt(i)] = 1;
    }
  }
  
  return result;
}