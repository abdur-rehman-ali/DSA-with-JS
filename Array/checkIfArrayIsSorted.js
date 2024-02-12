const isArraySorted = (arr) => {
  if (arr.length === 0 || arr.length === 1) return true;
  let isSortedInAsc = true;
  let isSortedInDesc = true;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > arr[i + 1]) {
      isSortedInAsc = false;
    }

    if (arr[i] < arr[i + 1]) {
      isSortedInDesc = false;
    }
  }
  return [isSortedInAsc, isSortedInDesc]
}

let arr = [1, 2, 3, 3, 3, 4]
let arr2 = [4, 2, 1, 0, -1, -2, -2, -2]

console.log(isArraySorted(arr2));