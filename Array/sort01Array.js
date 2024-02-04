
// 1. The algorithm uses a two-pointer approach to sort an array containing only 0s and 1s. It iterates, moving the start pointer forward to find 0s and the end pointer backward to find 1s, swapping them until start is no longer less than end. The result is a sorted array with 0s on the left and 1s on the right.

const sortArrayContaining01 = (arr) => {
  let start = 0;
  let end = arr.length - 1;

  while (start < end) {
    while (arr[start] == 0) {
      start++;
    }

    while (arr[end] == 1) {
      end--;
    }

    [arr[start], arr[end]] = swap(arr[start], arr[end])
    start++;
    end--;
  }
  return arr;
}

const swap = (num1, num2) => {
  let temp = num1;
  num1 = num2;
  num2 = temp;
  return [num1, num2];
}

arr = [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0]


// 2. Sort 0,1 using count technqiue

const sortO1WithCount = (arr) => {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) { count++ }
  }
  for (let i = 0; i < count; i++) { 
    arr[i] = 0;
  }
  for (let i = count; i < arr.length; i++) { 
    arr[i] = 1;
  }
  return arr
}

console.log(sortO1WithCount(arr));
