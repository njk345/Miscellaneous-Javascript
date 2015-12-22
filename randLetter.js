var letts = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

function choose () {
	var num = Math.floor(Math.random() * letts.length);
	return letts[num];
}

console.log(choose());