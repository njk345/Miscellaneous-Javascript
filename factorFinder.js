function factors (num) {
	var outFacts = [num];
	var start = Math.floor(num/2);
	for (var i = start; i > 0; i--) {
		if (num % i === 0) {
			outFacts.unshift(i);
		}
	}
	return outFacts;
}
console.log(factors(/*enter number to get its factors*/));