// Remove Duplicates in-place from Sorted Array

// 1st approach
const removeDuplicates = (arr) => {
  const uniqueSet = new Set(arr)
  const uniqueArray = Array.from(uniqueSet)
  arr = uniqueArray
  return arr.length
}

let arr = [1, 1, 2, 2, 2, 3, 3,4,5,6]
// removeDuplicates(arr)

// 2nd approach is to
const removeDuplicates1 = (arr) => {
  let i = 0;
  for (let j = 1; j < arr.length; j++) { 
    if (arr[i] !== arr[j]) {
      i++;
      arr[i] = arr[j]
    }
  }
  return arr.slice(0, i + 1)
}

console.log(removeDuplicates1(arr));