 //recursive
function fib1(n) {
	if (n <= 1) {
		return n;
	} else {
		return fib1(n-1) + fib1(n-2);
	}
}

function fib2(n) {
	var memo = [0, 1];
	return fib2Helper(n, memo);
}

function fib2Helper(n, memo) {
	if (!(n in memo)) {
		f1 = fib2Helper(n - 1, memo);
		f2 = fib2Helper(n - 2, memo);
		memo[n] = f1 + f2;
	}
	return memo[n];
}

function fib3(n) {
	
}

//for (var i = 0; i <= 300; i++) {
//	console.log(fib2(i));
//}

function fib3 (n) {
	var output = [0,1];
	for (var i = 2; i <= n; i++) {
		output.push(output[i - 1] + output[i - 2]);
	}
	return output[n];
}
//for (var i = 0; i <= 300; i++) {
//	console.log(fib3(i));
//}

function fib4 (n) {
	if (n <= 1) {
		return n;
	}else {
		var t;
		var a = 0;
		var b = 1;
		for (var i = 2; i <= n; i++) {
			t = a + b;
			a = b;
			b = t;
		}
		return b;
	}
}
for (var i = 0; i <= 400; i++) {
	console.log(i, fib4(i))
}