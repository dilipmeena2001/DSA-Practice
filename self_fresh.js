function recursiveBinarySearch(
  arr,
  target,
  leftIndex = 0,
  rightIndex = arr.length - 1
) {
  let middleIndex = Math.floor((leftIndex + rightIndex) / 2);

  if (arr[middleIndex] === target) {
    return middleIndex;
  }

  if (target < arr[leftIndex] || target > arr[rightIndex]) {
    return -1;
  }

  if (target < arr[middleIndex]) {
    rightIndex = middleIndex - 1;

    return recursiveBinarySearch(arr, target, leftIndex, rightIndex);
  } else if (target > arr[middleIndex]) {
    leftIndex = middleIndex + 1;

    return recursiveBinarySearch(arr, target, leftIndex, rightIndex);
  }
}

console.log(recursiveBinarySearch([-5, 2, 4, 6, 10, 12], 12));
