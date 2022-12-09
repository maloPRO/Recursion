function fibsRec (n) {
  if (n <= 2) {
    return [0, 1]
  } 

  let arr = fibsRec(n);
  arr.push( arr[n-1] + arr[n - 2])
  return arr
}

console.log(fibsRec(3))