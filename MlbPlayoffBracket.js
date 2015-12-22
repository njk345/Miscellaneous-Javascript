//this program creates a random MLB playoff bracket

var al = ["Baltimore Orioles","Boston Red Sox","Chicago White Sox","Cleveland Indians","Detroit Tigers","Houston Astros","Kansas City Royals","Los Angeles Angels","Minnesota Twins","New York Yankees","Oakland Athletics","Seattle Mariners","Tampa Bay Rays","Texas Rangers","Toronto Blue Jays"];

var nl = ["Arizona Diamondbacks","Atlanta Braves","Chicago Cubs","Cincinnati Reds","Colorado Rockies","Los Angeles Dodgers","Miami Marlins","Milwaukee Brewers","New York Mets","Philadelphia Phillies","Pittsburgh Pirates","San Diego Padres","San Francisco Giants","St.Louis Cardinals","Washington Nationals"];

function bracker () {
	//American league team #1
	var num1 = Math.floor(Math.random() * al.length);
	var team1 = al[num1];
	al.splice(num1,1);
	//American league team #2
	var num2 = Math.floor(Math.random() * al.length);
	var team2 = al[num2];
	al.splice(num2,1);
	//American league team #3
	var num3 = Math.floor(Math.random() * al.length);
	var team3 = al[num3];
	al.splice(num3,1);
	//American league team #4
	var num4 = Math.floor(Math.random() * al.length);
	var team4 = al[num4];
	al.splice(num4,1);
	//American league team #5
	var num5 = Math.floor(Math.random() * al.length);
	var team5 = al[num5];
	al.splice(num5,1);
	
	//National league team #1
	var num6 = Math.floor(Math.random() * nl.length);
	var team6 = nl[num6];
	nl.splice(num6,1);
	//National leauge team #2
	var num7 = Math.floor(Math.random() * nl.length);
	var team7 = nl[num7];
	nl.splice(num7,1);
	//National league team #3
	var num8 = Math.floor(Math.random() * nl.length);
	var team8 = nl[num8];
	nl.splice(num8,1);
	//National league team #4
	var num9 = Math.floor(Math.random() * nl.length);
	var team9 = nl[num9];
	nl.splice(num9,1);
	//National leauge team #5
	var num10 = Math.floor(Math.random() * nl.length);
	var team10 = nl[num10];
	nl.splice(num10,1);
	
	//now for the match making!
	var alWC = "ALWC: " + team1 + " vs. " + team2;
	var alDS1 = "ALDS #1: " + team3 + " vs. Winner of ALWC";
	var alDS2 = "ALDS #2: " + team4 + " vs. " + team5;
	var nlWC = "NLWC: " + team6 + " vs. " + team7;
	var nlDS1 = "NLDS #1: " + team8 + " vs. Winner of NLWC";
	var nlDS2 = "NLDS #2: " + team9 + " vs. " + team10;
	
	//print it all out
	console.log(alWC);
	console.log(alDS1);
	console.log(alDS2);
	console.log("");
	console.log(nlWC);
	console.log(nlDS1);
	console.log(nlDS2);
	console.log("");
	console.log("Let the playoffs begin!");
	
}

bracker();


