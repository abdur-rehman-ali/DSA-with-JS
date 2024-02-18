const unionOfTwoArrays = (arr1, arr2) => {
  const hashMap = {}
  for (let element of arr1) {
    if (hashMap.hasOwnProperty(element)) {
      hashMap[element] += 1
    } else {
      hashMap[element] = 1
    }
  }

  for (let element of arr2) {
    if (hashMap.hasOwnProperty(element)) {
      hashMap[element] += 1
    } else {
      hashMap[element] = 1
    }
  }
  return Object.keys(hashMap).map(Number)
}

console.log(unionOfTwoArrays([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], [2, 3, 4, 4, 5, 11, 12]));
console.log(unionOfTwoArrays([1, 2, 3, 4, 5], [2, 3, 4, 4, 5]));