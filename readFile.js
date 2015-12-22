/*this program reads a text file and replaces all the r's and l's with w's. It uses node commands, which make like no sense when used in browser javascript - also why most commands here dont show up in colored text*/

//shoves a whole node.js library into a variable, so the its commands can be used later
var fs = require('fs');

/*in terminal, process.argv is an array containing "node", which allows you invokes node, a program file for node to run - in this case, "readFile.js", the last item in the array is the file to execute this program on*/

//checks to make sure process.argv array only has 3 items (only one input file)
if (process.argv.length !== 3) {
	console.error("Chill out - I can only read one file at a time!");
	process.exit(1);
}

var input = process.argv[2];

//calls the readFile method of fs library (which is one big object). It reads it, uses a callback function to write the changes to the file, and checks if any error occur in the process
fs.readFile(input, "utf-8", function (err, text) {
	if (err) throw err;
	var messedUp = text.replace(/[rl]/g, "w").replace(/[RL]/g, "W");
	fs.writeFile(input, messedUp, function (err) {
		if (err) throw err;
	}
}));