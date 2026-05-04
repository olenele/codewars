// kata: https://www.codewars.com/kata/5954584610080b7252000003
// 6 kyu

/*
Description:
Task
Some people have long queues in front of the cash machine. Some people need to withdraw money. 
They are ordinary people; Some people want to steal other people's money, yes, they are thieves ;-) 
Some people are policemen. They are looking for thieves.

Given a queue in string format, like this: "X1X#2X#XX". # represents the ordinary people; "X" 
represents the thief; digit 1-9 represents the policeman. The numerical value represents the 
police's watching range. For example, 1 means the police could see 1 people in front of him 
and 1 people in the back.

All the thieves in the line of sight of the police will be caught!

Your task is to calculate the number of thieves who have been caught.

Example
For queue = "X1X#2X#XX", the output should be 3.

X1X#2X#XX
^ ^  ^  <--- These 3 thieves will be caught!
For queue = "X5X#3X###XXXX##1#X1X", the output should be 5.

X5X#3X###XXXX##1#X1X
^ ^  ^           ^ ^ <--- These 5 thieves will be caught!
For queue = "X#X1#X9XX", the output should be 5.

X#X1#X9XX
^ ^  ^ ^^ <--- All thieves will be caught!
*/

function catchThief(queue){  
  let thieves = new Set();
  let policeVision = new Set();
  
  for(let i = 0; i < queue.length; i++){
    if (queue[i] === "X") thieves.add(i)
    if (queue[i] == Number(queue[i])){
      for(let j = 0; j <= queue[i]; j++){
        policeVision.add(i - j)
        policeVision.add(i + j)
      }
    }
  }
  // No intersection support yet on node v18
  // For node version 22 could just return policeVision.intersection(thieves).size  
  
  return new Set([...policeVision].filter(policeVision => thieves.has(policeVision))).size
}