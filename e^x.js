function factorial (x) {
	if (x === 0) {
		return 1;
	} else {
		var prod = 1;
		for (var i = x; i >= 1; i--) {
			prod *= i;
		}
		return prod;
	}
}






function myExp (x) {
	var sum = 0; 
	for (var n = 0; n <= 50; n++) {
		sum += (Math.pow(x,n))/factorial(n);
	}
	return(sum);
}

console.log(myExp(1));