//this program takes an input value in base 2 and converts it to base 8, and vice-versa.

function bin2Oct (bInput) {
	var input = bInput;
	input = input.toString();
	var arrPut = [];
	for (var i = 0; i < input.length; i++) {
		arrPut.push(input[i]);
	}
	if (arrPut.length % 3 !== 0) {
		if (arrPut.length % 3 === 1) {
			arrPut.unshift("0","0");
		}
		else if (arrPut.length % 3 === 2) {
			arrPut.unshift("0");
		} else {
			return "Did you enter in a binary value to convert? No negatives or decimals allowed.";
		}
	}
	var octOut2 = binGrouper(arrPut);
	var finOut = "";
	for (var i = 0; i < octOut2.length; i++) {
		finOut += octOut2[i];
	}
	return finOut;
}

function binGrouper (array) {
	var octOut = [];
	var x = 0;
	var i = -1; //starts at -1 because I need an i++ at front of first if statement, but i must also initialize at 0.
	while (array[x] !== undefined) { //while end of input array has not been reached
		if (x % 3 === 0) {
			i++;
			octOut.push(array[x] * 4);
		}
		else if (x % 3 === 1) {
			octOut[i] += (array[x] * 2);
		}
		else if (x % 3 === 2) {
			octOut[i] += (array[x] * 1);
		}
		x++;
	}
	return octOut;
}

console.log(bin2Oct(/*enter a base 2 number*/));