// kata: https://www.codewars.com/kata/51b62bf6a9c58071c600001b
// 6 kyu

/*
Create a function taking a positive integer between 1 and 3999 (both included) as its parameter 
and returning a string containing the Roman Numeral representation of that integer.

Modern Roman numerals are written by expressing each digit separately starting with the 
leftmost digit and skipping any digit with a value of zero. There cannot be more than 
3 identical symbols in a row.

In Roman numerals:

1990 is rendered: 1000=M + 900=CM + 90=XC; resulting in MCMXC.
2008 is written as 2000=MM, 8=VIII; or MMVIII.
1666 uses each Roman symbol in descending order: MDCLXVI.

Example:
   1 -->       "I"
1000 -->       "M"
1666 --> "MDCLXVI"

Help:
Symbol    Value
I          1
V          5
X          10
L          50
C          100
D          500
M          1,000
*/

function solution(number){
  let solution = "";
  
  while (number > 0){
    if (number >= 1000){
      solution += "M";
      number -= 1000;
    } else if (number >= 900){
      solution += "CM";
      number -= 900;
    } else if (number >= 500){
      solution += "D";
      number -= 500;
    } else if (number >= 400){
      solution += "CD";
      number -= 400;
    }else if (number >= 100){
      solution += "C";
      number -= 100;
    } else if (number >= 90){
      solution += "XC";
      number -= 90;
    } else if (number >= 50){
      solution += "L";
      number -= 50;
    } else if (number >= 40){
      solution += "XL";
      number -= 40;
    }else if (number >= 10){
      solution += "X";
      number -= 10;
    } else if (number >= 9){
      solution += "IX";
      number -= 9;
    } else if (number >= 5){
      solution += "V";
      number -= 5;
    } else if (number >= 4){
      solution += "IV";
      number -= 4;
    } else {
      solution += "I";
      number--;
    }
  }
    
  return solution;
  
}