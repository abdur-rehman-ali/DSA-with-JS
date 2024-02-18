const unionOfTwoArrays = (arr1, arr2) => {
  const hashMap = new Map()
  const union = []
  for (let element of arr1) {
    hashMap.set(element, (hashMap.get(element) || 0) + 1)
  }

  for (let element of arr2) {
    hashMap.set(element, (hashMap.get(element) || 0) + 1)
  }

  for (const [key, value] of hashMap) { 
    union.push(key)
  }

  return union
}

console.log(unionOfTwoArrays([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], [2, 3, 4, 4, 5, 11, 12]));
console.log(unionOfTwoArrays([1, 2, 3, 4, 5], [2, 3, 4, 4, 5]));


