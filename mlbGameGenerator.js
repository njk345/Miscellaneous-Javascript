//this program pits to random MLB teams against each other

var al = ["Baltimore Orioles","Boston Red Sox","Chicago White Sox","Cleveland Indians","Detroit Tigers","Kansas City Royals","Los Angeles Angels","Minnesota Twins","New York Yankees","Oakland Athletics","Seattle Mariners","Tampa Bay Rays","Texas Rangers","Toronto Blue Jays"];

var nl = ["Arizona Diamondbacks","Atlanta Braves","Chicago Cubs","Cincinnati Reds","Colorado Rockies","Houston Astros","Los Angeles Dodgers","Miami Marlins","Milwaukee Brewers","New York Mets","Philadelphia Phillies","Pittsburgh Pirates","San Diego Padres","San Francisco Giants","St.Louis Cardinals","Washington Nationals"];

function matchUp (league) {
	var num1 = Math.floor(Math.random() * league.length);
	var num2 = Math.floor(Math.random() * league.length);
	if (num1 === num2) {
		return matchUp(league);
	} else {
		console.log(league[num1] + " vs. " + league[num2]);
	}
}

matchUp(al);


