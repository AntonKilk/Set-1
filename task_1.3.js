// Write a function range to generate sequences of numbers. 
// The function takes two numeric offsets and returns an array of numbers
// between those offsets. The first offset is inclusive, the second offset is exclusive.
// This one is among the most important missing pieces in the "pure JS, no libraries" toolkit.

function range(from, to) {
    if (from > to){
        return [];
    } else {
        let arr = [];
        for (let i = from; i < to; i++){
            arr.push(i);
        }
        return arr;
    }
  }
  
  range(0, 0) // []
  range(0, 1) // [0]
  range(0, 2) // [0, 1]
  range(0, 3) // [0, 1, 2]
  
  range(1, 0) // [] -- edge case, arguments make no sense
  range(1, 1) // []
  range(1, 2) // [1]
  range(1, 3) // [1, 2]
  
  // ...