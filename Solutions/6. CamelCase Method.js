// kata: https://www.codewars.com/kata/587731fda577b3d1b0001196
// 6 kyu

/*
Description:
Write a method (or function, depending on the language) that converts a string to camelCase, 
that is, all words must have their first letter capitalized and spaces must be removed.

Examples (input --> output):
"hello case" --> "HelloCase"
"camel case word" --> "CamelCaseWord"
*/

String.prototype.camelCase=function(){
  if (this.toString().length < 1) return "";

  return this.split(" ").map(word => word = word[0].toUpperCase() + word.slice(1)).join("");
}