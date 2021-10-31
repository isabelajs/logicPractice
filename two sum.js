const nums = [3, 7, 11, 2];
const target = 9;

var twoSum = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (var x = i + 1; x < nums.length; x++) {
      if (nums[i] + nums[x] == target) {
        return [i, x];
      }
    }
  }
};

console.log(twoSum(nums, target));
