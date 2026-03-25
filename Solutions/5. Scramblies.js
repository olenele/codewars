// kata: https://www.codewars.com/kata/55c04b4cc56a697bb0000048
// 5 kyu

/*
Description:
Complete the function scramble(str1, str2) that returns true if a portion of str1 characters can 
be rearranged to match str2, otherwise returns false.

Notes:

Only lower case letters will be used (a-z). No punctuation or digits will be included.
Performance needs to be considered.
Examples
scramble('rkqodlw', 'world') ==> True
scramble('cedewaraaossoqqyt', 'codewars') ==> True
scramble('katas', 'steak') ==> False
*/

function scramble(str1, str2) {
  let characters = {}
  
  //round up all characters and their count in string1 to characters object
  for (let i = 0; i < str1.length; i++){
    characters[str1[i]] ? characters[str1[i]]++ : characters[str1[i]] = 1;
  }
  
  //if char of str2 found in str1 reduce the count of the character, if not found return false
  for (let i = 0; i < str2.length; i++){
    if (characters[str2[i]]) {
      characters[str2[i]]-- 
    } else {
      return false;
    }     
  }
  
  return true;
}