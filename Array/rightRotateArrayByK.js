// Approach
// Rotate array by single time
// Then repeat that for k elements

const rightRotateArrayByK = (nums, k = 1) => {
  for (let i = 0; i < k; i++) {
    let temp = nums[nums.length - 1];
    for (let i = nums.length - 1; i > 0; i--) {
      nums[i] = nums[i - 1];
    }
    nums[0] = temp;
  }
  return nums;
}

console.log(rightRotateArrayByK([1, 2, 3, 4, 5, 6, 7, 8, 9], 3));
