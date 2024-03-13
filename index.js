function hasTargetSum(array, target) {
   // Write your algorithm here
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] + array[j] === target) {
        return true;
      }
    }
  }
  return false;
}

/* 
  Write the Big O time complexity of your function here
   Write the Big O time complexity of your function here
   O(n^2)
   n is the number of elements in the input array
   and there are two nested loops resulting in n * (n-1) iterations
*/

/* 
  Add your pseudocode here
   for(i=0 in array){
      for(j=i+1 in array){
        if(array[j]+array[i]===targey)
        return true;
      }
  }return false;
*/

/*
  Add written explanation of your solution here
   The hasTargetSum function takes an array and a target value as input, 
  sorts the array, and then uses two pointers to find if there are two number
  s that sum up to the target value. If such a pair exists, it returns true; otherwise, 
  it returns false. The function's time complexity is O(n log n) due to the sorting operation, 
  where n is the number of elements in the input array.
  
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
