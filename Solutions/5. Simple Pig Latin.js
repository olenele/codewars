// kata:
// 5 kyu

/*
Move the first letter of each word to the end of it, then add "ay" to the end of the word. 
Leave punctuation marks untouched.

Examples:
pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
pigIt('Hello world !');     // elloHay orldway !
*/

function pigIt(str){
  let words = str.split(" ");
  let pigLatin = "";
  let regEx = /^[a-zA-Z]+$/
  
  words.forEach(word => {
    if (regEx.test(word)){
      pigLatin += `${word.slice(1)}${word[0]}ay ` 
    } else { 
      pigLatin += word
    }
  })
  
  return pigLatin.trim();
}