function fib (num) {
	// "num" is nth fibonacci number you want to display
	if (num === 1) {
		return 1;
	} else if (num === 0) {
		return 0;
	} else {
		return fib (num-1) + fib (num-2);
	}
}
console.log(fib(5));