// ########################################################################################
// 1. Array Reverse Using an Extra Array  
// Create a new array of the same size as the original array.
// Copy elements from the original array to the new array in reverse order.

const reverseAnArrayUsingExtraArray = (arr) => {
  let sortedArray = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    sortedArray.push(arr[i])
  }
  return sortedArray
}
// console.log(reverseAnArrayUsingExtraArray([1, 2, 3, 4, 5, 6]));

// Time Complexity: O(n)
// Copying elements to a new array is a linear operation.
// Auxiliary Space Complexity: O(n)
// Additional space is used to store the new array.

// ########################################################################################

// 2. Array Reverse Using a Loop
// Iterate through the array using two pointers (start and end).
// Swap elements at the start and end pointers.
// Move the start pointer towards the end and the end pointer towards the start until they meet or cross each other.

const reverseAnArrayUsingTwoPointer = (arr) => {
  let start = 0;
  let end = arr.length - 1;
  while (start < end) {
    let temp = arr[end]
    arr[end] = arr[start]
    arr[start] = temp
    start++;
    end--;
  }
  return arr;
}
// console.log(reverseAnArrayUsingTwoPointer([1, 2, 3, 4, 5, 6]));


// Time Complexity: O(n)
// The loop runs through half of the array, so it’s linear with respect to the array size.
// Auxiliary Space Complexity: O(1)
// In-place reversal, meaning it doesn’t use additional space.

// ########################################################################################

// 3. Array Reverse Inbuilt Methods

const reverseAnArray = arr => arr.reverse()
// console.log(reverseAnArray([1, 2, 3, 4, 5, 6]));


// 4. Array Reverse Stack
// Push each element of the array onto a stack.
// Pop elements from the stack to form the reversed array.
const reverseAnArrayUsingStack = (arr) => {
  let stack = []
  for (let i = 0; i < arr.length; i++) {
    stack.push(arr[i]);
  }

  for (let i = 0; i < arr.length; i++) {
    arr[i] = stack.pop(arr[i]);
  }
  return arr;
}
// console.log(reverseAnArrayUsingStack([1, 2, 3, 4, 5, 6,2,42,53,2]));

// Time Complexity: O(n)
// Pushing and popping each element onto/from the stack requires linear time.
// Auxiliary Space Complexity: O(n)
// Additional space is used to store the stack.
