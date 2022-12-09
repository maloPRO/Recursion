const mergeSort = (arr) => {
  if (arr.length <= 1) return arr;

  const mid = Math.floor(arr.length / 2);
  const leftHalf = mergeSort(arr.slice(0, mid));
  const rightHalf = mergeSort(arr.slice(mid));
  return merge(leftHalf, rightHalf);
};

const merge = (leftArray, rightArray) => {
  const mergedCollection = [];

  while (leftArray.length > 0 && rightArray.length > 0) {
    const arrayWithMin = leftArray[0] < rightArray[0] ? leftArray : rightArray;
    const mergeElement = arrayWithMin.shift();
    mergedCollection.push(mergeElement);
  }

  return mergedCollection.concat(leftArray, rightArray);
}

console.log(mergeSort([5,5,7,3,8]));