/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  const numMap = {};

  let indexes = [];

  for(numIndex in nums) {
    const requiredValue = target - nums[numIndex];

    // Check if the required value is in the map
    if (numMap[requiredValue]) {
      // found it
      indexes = [numIndex, numMap[requiredValue]];
      break
    }

    // cache this value
    numMap[nums[numIndex]] = numIndex;
  }

  return indexes;
}

console.log(twoSum([3, 3], 6));

console.log(twoSum([7,3,4,6, 8], 15));