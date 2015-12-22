var rl = require('readline');

module.exports.ask = function (question, callback) {
  var r = rl.createInterface({
    input: process.stdin,
    output: process.stdout});
  r.question(question + '\n', function(answer) {
    r.close();
    callback(answer);
  });
}

module.exports.ask('  Ask any addition problem:', function(answer) {
	var num1 = "";
	var num2 = "";
	var i = 0;
	while (answer[i] !== "+") {
		num1 += answer[i];
		i++;
	}
	i++;
	while (answer[i] != undefined) {
		num2 += answer[i];
	}
	num1 = +num1;
	num2 = +num2;
	console.log(num1 + num2);
});

