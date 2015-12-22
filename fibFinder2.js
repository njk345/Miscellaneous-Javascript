//prints out however many fibonacci numbers you want to see
function fib(num) {
	var vals = [1,1];
	for (var i = 1; i < num -1; i++) {
		vals.push(vals[i] + vals[i-1]);
	}
	function unWrap (array) {
		for (var x = 0; x < array.length; x++) {
			console.log(array[x]);
		}
	}
	return unWrap(vals);
}
console.log(fib(15));