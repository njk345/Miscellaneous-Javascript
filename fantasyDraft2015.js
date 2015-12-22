function getMin (arr) {
	var minimum = arr[0];
	for (var i = 1; i < arr.length; i++) {
		if (arr[i] < minimum) {
			minimum = arr[i];
		}
	}
	return minimum;
}

function draftOrder (teams) {
	var r;
	var orderedTeams = [];
	var copy = [];
	
	for (var i = 0; i < teams.length; i++) {
		copy.push(teams[i]);
	}
	
	while (teams.length > 0) {
		r = Math.floor(Math.random() * teams.length);
		orderedTeams.push(teams[r]);
		teams.splice(r,1);
	}
	
	//refill teams (so it leaves function unchanged)
	for (var x = 0; x < copy.length; x++) {
		teams.push(copy[x]);
	}
	
	return orderedTeams;
}

function avgPositions (teams, n) {
	var positions = new Array(teams.length); //to hold avg position values for each team
	
	for (var a = 0; a < positions.length; a++) {
		positions[a] = 0;
	}
	
	for (var i = 0; i < n; i++) {
		var order = draftOrder(teams); //teams array in randomized order

		for (var x = 0; x < teams.length; x++) {
			positions[x] += (order.indexOf(teams[x]) + 1);
		}
	}
	
	for (var z = 0; z < positions.length; z++) {
		positions[z] /= n;
	}
	
	return positions;
}

function orderByFreq (freqs, teams) {
	var orderedTeams = [];
	for (var i = 0; i < teams.length; i++) {
		var m = getMin(freqs);
		var mind = freqs.indexOf(m);
		orderedTeams.push(teams[mind]);
		freqs[mind] = 100000;
	}
	return orderedTeams;
}

function printTeams (teams) {
	for (var i = 0; i < teams.length; i++) {
		console.log("Pick #" + (i + 1) + ": " + teams[i]);
	}
}

function performDraft (players, n) {
	printTeams(orderByFreq(avgPositions(players,n),players));
}

var players = ["Nick K.", "Joseph", "Austen", "Henry", "Omar", "Jackson", "Seamus", "Nick V."];

performDraft(players, 10000);