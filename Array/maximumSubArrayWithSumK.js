
// 1st approach
const longestSubarrayWithSumK = (arr, k) => {
  let longestLength = - 1;
  for (let i = 0; i < arr.length; i++) {
    for (let j = i; j < arr.length; j++) {
      let sum = 0;
      for (let k = i; k <= j; k++) {
        sum += arr[k];
      }
      if (sum === k) {
        longestLength = Math.max(longestLength, j - i + 1)
      }
    }
  }
  return longestLength
}

console.log(longestSubarrayWithSumK([1, 2, 3, 4, 1, 1, 1], 3));

const longestSubarrayWithSumK2 = (arr, k) => {
  let longestLength = - 1;
  for (let i = 0; i < arr.length; i++) {
    let sum = 0;
    for (let j = i; j < arr.length; j++) {
      sum += arr[j];
      if (sum === k) {
        longestLength = Math.max(longestLength, j - i + 1)
      }
    }
  }
  return longestLength
}

console.log(longestSubarrayWithSumK2([1, 2, 3, 4, 1, 1, 1], 3));
