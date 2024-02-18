const unionOfTwoArrays = (arr1, arr2) => {
  const set = new Set()
  const union = []
  for (let element of arr1) {
    set.add(element)
  }

  for (let element of arr2) {
    set.add(element)
  }

  for (const element of set) { 
    union.push(element)
  }

  return union
}

console.log(unionOfTwoArrays([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], [2, 3, 4, 4, 5, 11, 12]));
console.log(unionOfTwoArrays([1, 2, 3, 4, 5], [2, 3, 4, 4, 5]));
