const rotateArrayByK = (arr, k, left_rotate) => {
  if (left_rotate) {
    return rotateArrayToleft(arr, k)
  } else {
    return rotateArrayToRight(arr, k)
  }
}


const rotateArrayToRight = (arr, k) => {
  let arr1 = []
  for (let i = arr.length - k; i < arr.length; i++) {
    arr1.push(arr[i])
  }
  let arr2 = []
  for (let i = 0; i < arr.length - k; i++) {
    arr2.push(arr[i])
  }
  for (let element of arr2) {
    arr1.push(element)
  }
  return arr1;
}

const rotateArrayToleft = (arr, k) => {
  let arr1 = []
  for (let i = 0; i < k; i++) {
    arr1.push(arr[i])
  }
  let arr2 = []
  for (let i = k; i < arr.length; i++) {
    arr2.push(arr[i])
  }

  for (let element of arr1) {
    arr2.push(element)
  }
  return arr2;
}




let arr = [1, 2, 3, 4, 5, 6, 7]
let k = 3;
left_rotate = false
console.log(rotateArrayByK(arr, k, left_rotate));