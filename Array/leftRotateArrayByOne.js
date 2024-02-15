
const leftRotateArrayByOne = (arr) => {
  if(arr.length === 0 || arr.length === 1) { return arr }
  let temp = arr[0];
  let i = 1;
  for (i; i < arr.length; i++) {
    arr[i - 1] = arr[i]
  }
  arr[i - 1] = temp;
  return arr;
}

let arr = [1, 2, 3, 4, 5]
console.log(leftRotateArrayByOne(arr));