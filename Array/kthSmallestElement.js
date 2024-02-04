let arr = [1, 20, 42, 53, 75, 10, 64, 75, 2, 3, 4, 65]

// Find kth smallest element in an array 
// Using brute force algorithm, sort the array and find kth smallest element
const kthSmallestInAnArray = (arr, k) => (arr.sort((a, b) => a - b)[k - 1])
console.log(kthSmallestInAnArray(arr, 5));
