function piFind (x) {
	var sign = 1;
	var sum = 0;
	for (var i = 1; i <= x; i += 2) {
		sum += sign * (1/i);
		sign *= -1;
	}
	return sum * 4;
}

for (var i = 1; i <= 10000000; i*= 10) {
	console.log(i + "  ||  " + piFind(i));
}

