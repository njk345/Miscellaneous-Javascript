function wLoopFactorial(n) {
  var result = n;
  while (n > 1) {
    result = result * (n-1);
    n--;
  }
  return result;
}

console.log(loopFactorial(5));