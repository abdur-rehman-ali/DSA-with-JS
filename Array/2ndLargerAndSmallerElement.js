// 1st approach would work only if array don't contain duplicates
// And approach is sort and array in ascending order
// 2ndSmallestElement = arr[1]
// 2ndLargestElement = arr[arr.length - 2]

const secondLagestAndSmallestElement1 = (arr) => {
  if (arr.length === 0 || arr.length === 1) { return arr }
  arr.sort((a, b) => a - b)
  let secondSmallest = arr[1]
  let secondLargest = arr[arr.length - 2]
  return [secondSmallest, secondLargest]
}

let arr = [1, 2, 3]
// console.log(secondLagestAndSmallestElement1(arr));

// 2nd approach 
const secondLagestAndSmallestElement2 = (arr) => {
  if (arr.length === 0 || arr.length === 1) { return arr }
  arr.sort((a, b) => a - b)
  let smallest = arr[0]
  let largest = arr[arr.length - 1]
  let secondSmallest = smallest;
  let secondLargest = largest
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > smallest) {
      secondSmallest = arr[i]
      break
    }
  }
  for (let i = arr.length - 1; i > 0; i--) {
    if (arr[i] < largest) {
      secondLargest = arr[i]
      break
    }
  }
  return [secondSmallest, secondLargest]
}
let arr1 = [1, 1, 1, 1, 1]
// console.log(secondLagestAndSmallestElement2(arr1));

// 3rd approach
const secondLagestAndSmallestElement3 = (arr) => {
  if (arr.length === 0 || arr.length === 1) { return arr }
  let smallest = Infinity
  let largest = -Infinity

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largest) { largest = arr[i] }
    if (arr[i] < smallest) { smallest = arr[i] }
  }

  let secondSmallest = Infinity
  let secondLargest = -Infinity
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > secondLargest && arr[i] !== largest) { secondLargest = arr[i] }
    if (arr[i] < secondSmallest && arr[i] !== smallest) { secondSmallest = arr[i] }
  }

  return [secondSmallest, secondLargest]
}
let arr2 = [1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 3, 5]
console.log(secondLagestAndSmallestElement3(arr2));

