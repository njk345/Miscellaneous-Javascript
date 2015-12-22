/* This function uses brute-force to find the greatest prime factor of a number. It essentially no longer works for a number over 9 digits long...a more efficient algorithm needs to be made;)
*/

function isPrime (num1) {
	var nRoot = Math.floor(Math.sqrt(num1));
	for (var i = nRoot; i > 1; i--) {
		if (num1 % i === 0) {
			return false;
		}
	}
	return true;
}

function lPrimeFactFind (num) {
	if (num <= 0) {
		return "Umm...I cannot do this operation";
	}
	var nStart = Math.floor(num/2);
	for (var i = nStart; i > 1; i--) {
		if (num % i === 0 && isPrime(i)) {
			return "The largest prime factor of " + num + " is " + i;
		}
	}
	return "The largest prime factor of " + num + " is " + num + ", for it is already prime";
}

console.log(lPrimeFactFind());
