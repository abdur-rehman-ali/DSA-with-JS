

const sort012Array = (arr) => {
  let start = 0;
  let end = arr.length - 1;
  let mid = start;

  while (mid <= end) {
    if (arr[mid] === 1) {
      mid++;
    } else if (arr[mid] === 0) {
      [arr[mid], arr[start]] = swap(arr[mid], arr[start]);
      start++;
      mid++;
    } else if (arr[mid] === 2) {
      [arr[mid], arr[end]] = swap(arr[mid], arr[end]);
      end--;
    }
  }
  return arr;
}

const swap = (num1, num2) => {
  let temp = num1;
  num1 = num2;
  num2 = temp;
  return [num1, num2];
}



const arr = [0, 2, 1, 0, 2, 2, 2, 2, 2, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 2, 2, 2, 0, 0, 0]
console.log(sort012Array(arr));