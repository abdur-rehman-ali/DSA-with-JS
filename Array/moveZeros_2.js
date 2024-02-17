const moveZeroesToEndInPlace = (nums) => {
  let ptr1 = 0;
  // Point 1st pinter to first zero
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) {
      ptr1 = i;
      break;
    }
  }
  // If no non-zero element then return from here
  if (ptr1 === -1) { return nums }

  let ptr2 = ptr1 + 1;
  while (ptr2 < nums.length) {
    if (nums[ptr2] === 0) {
      ptr2++
    } else {
      [nums[ptr2], nums[ptr1]] = [nums[ptr1], nums[ptr2]]
      ptr1++;
      ptr2++
    }
  }
  return nums;
}

console.log(moveZeroesToEndInPlace([2, 1]));