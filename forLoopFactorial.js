function fLoopFactorial(lim) {
	var factTot = lim;
	if (lim === 1 || lim === 0) {
		return 1;
	}
	for (var i = lim; i > 2; i--) {
		var factTot = factTot * (i-1);
	}
	return factTot;
}
console.log(fLoopFactorial());