function mergeSort(arr) {
  if (arr.length < 2) {
    return arr;
  }

  let mid = Math.floor(arr.length / 2);
  let leftArr = arr.slice(0, mid);
  let rightArr = arr.slice(mid);

  return merge(mergeSort(leftArr), mergeSort(rightArr));
}

function merge(leftArr, rightArr) {
  let tempArr = [];

  while (leftArr.length && rightArr.length) {
    if (leftArr[0] <= rightArr[0]) {
      tempArr.push(leftArr.shift());
    } else {
      tempArr.push(rightArr.shift());
    }
  }

  return [...tempArr, ...leftArr, ...rightArr];
}

let arr = [-6, 20, 8, -2, 4];
console.log("🚀 ~ arr:", mergeSort(arr));

// Big-O = O(nlogn)