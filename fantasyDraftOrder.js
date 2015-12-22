function draftOrder (p1, p2, p3, p4, p5, p6, p7, p8) {
	var teams = [p1, p2, p3, p4, p5, p6, p7, p8];
	var numTeams = teams.length;
	var newOrder = [];
	var rand;
	for (var i = 0; i < numTeams; i++) {
		rand = Math.floor(Math.random() * teams.length);
		newOrder.push(teams[rand]);
		teams.splice(rand,1);
	}
	return unpack(newOrder);
}

function unpack (array) {
	for (var i = 0; i < array.length; i++) {
		console.log("Pick #" + (i + 1) + " is " + array[i]);
	}
}

draftOrder("Austen","Nick", "Joe", "Jackson", "Seamus", "Henry","Kevin", "Tolo");