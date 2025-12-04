// kata: https://www.codewars.com/kata/52a89c2ea8ddc5547a000863
// 5 kyu

/*
Description:
You are given a node that is the beginning of a linked list. This list contains a dangling piece 
and a loop. Your objective is to determine the length of the loop.

For example in the following picture the size of the dangling piece is 3 and the loop size is 12:

// Use the `getNext' method or 'next' property to get the following node.
node.getNext()
node.next
Notes:

do NOT mutate the nodes!
in some cases there can be just a loop, with no dangling piece.
Don't miss dmitry's article in the discussion after you pass the Kata !!
*/

// Illustration of the kata available at the kata link (line 1) to better grasp the idea

function loop_size(node){
  let nodeSet = new Set();
  let tailSet = new Set();
  let currentNode = node;
  let loopFirstNode = node;
  
  nodeSet.add(node);
 
  // collect all nodes into a set
  while (!nodeSet.has(currentNode.next)){    
    nodeSet.add(currentNode.next)
    currentNode = currentNode.next;
  }
  
  loopFirstNode = currentNode.next; //loop starts at this node
  currentNode = node; //reset to first node
 
  // collect nodes until the start of the loop is found i.e. collect the tail
  while(currentNode !== loopFirstNode){
    tailSet.add(currentNode);
    currentNode = currentNode.next;
  }
  
  // function to remove nodes found in tail from the complete set
  const difference = (setA, setB) => {
    const _difference = new Set(setA);
    for (const elem of setB) {
      _difference.delete(elem);
    }
    return _difference;
  } 
  
  // for newer Node.js version can use built in method: nodeSet.difference(tailSet)
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set/difference
  
  return difference(nodeSet, tailSet).size;
}