function sieve (n) {
	var A = [];
	for (var i = 0; i <= n; i++) {
		A.push(true);
	}
	for (i = 2; i <= n; i++) {
		if (A[i]) {
			for (var j = 2 * i; j <= n; j += i) {
				A[j] = false;
			}
		}
	}
	
	var rv = [];
	for (i = 2; i <= n; i++) {
		if (A[i]) {
			rv.push(i);
		}
	}
	return rv;
}
console.log(sieve(65));
