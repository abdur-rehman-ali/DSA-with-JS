var moveZeroesToEndInPlace = function (nums) {
  if (nums.length === 0 || nums.length === 1) return nums;
  let start = 0;
  let end = 1;
  while (end < nums.length ) {
    if (nums[end] !== 0 && nums[start] === 0) {
      [nums[end], nums[start]] = [nums[start], nums[end]]
      start++;
      end++;
    } else {
      end++;
      if (nums[start] !== 0) {
        start++;
      }
    }
  }
  return nums;
};

let nums = [0,1,0,3,12]
console.log(moveZeroesToEndInPlace([1, 0, 1]));
console.log(moveZeroesToEndInPlace(nums));


