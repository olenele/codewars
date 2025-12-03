// kata: https://www.codewars.com/kata/52449b062fb80683ec000024
// 5 kyu

/*
Description:
The marketing team is spending way too much time typing in hashtags.
Let's help them with our own Hashtag Generator!

Here's the deal:

It must start with a hashtag (#).
All words must have their first letter capitalized, and remaining letters lowercased.
If the final result is longer than 140 chars it must return false.
If the input or the result is an empty string it must return false.
Examples
" Hello there thanks for trying my Kata"  =>  "#HelloThereThanksForTryingMyKata"
"    Hello     World   "                  =>  "#HelloWorld"
""                                        =>  false
*/

function generateHashtag (str) {
  if (str.trim().length == 0) return false; //trim to remove entries with only whitespace
  
  let result = "#" + str.split(" ").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join("");
  
  if (result.length > 140) return false;
  
  return result;
}