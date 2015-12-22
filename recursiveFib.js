function fibber (specNum) {
	if (specNum === 0) {
		return 0;
	}
	else if (specNum === 1) {
		return 1;
	}
	
	return fibber (specNum-1) + fibber (specNum-2);
}

console.log(fibber(6));