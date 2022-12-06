function fibs(n) {
  let arr = [0,1];
  if (n === 1) {
    return arr[0]
  } else if (n === 2) {
    return arr;
  }
  else if (n <= 0) {
    return 'Error'
  }
  for (let i = 2; i < n; i++) {
    arr.push( arr[arr.length - 1] + arr[arr.length-2])
  }
  return arr;
};
console.log(fibs(-8))