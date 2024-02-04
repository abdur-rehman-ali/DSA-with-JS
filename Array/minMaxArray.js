
// 1. Find min and max in an array and return sum of them
// Used linear search and find the min and max by comparing
const findMinMaxSum = arr => {
  let min = +Infinity;
  let max = -Infinity;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    } else if (arr[i] < min) {
      min = arr[i];
    }
  }
  return min + max;
}

arr = [-2, 1, -4, 5, 3]
// console.log(findMinMaxSum(arr))

// 2. Find min and max in an array and return them
const findMinMax = arr => {
  let min = +Infinity;
  let max = -Infinity;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    } else if (arr[i] < min) {
      min = arr[i];
    }
  }
  return { min, max };
}

// console.log(findMinMax(arr))

