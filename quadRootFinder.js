function rootFind (a,b,c) {
    if ((b * b) - (4 * a * c) < 0) {
        var x1 = "" + (-b/(2*a)) + " + " + (Math.sqrt(-((b * b)-(4 * a * c)))/(2*a)) + "i";
		var x2 = "" + (-b/(2*a)) + " - " + (Math.sqrt(-((b * b)-(4 * a * c)))/(2*a)) + "i";
		return "Your Roots Are " + x1 + " and " + x2;
    }
    else {
        var x1 = (-b + Math.sqrt((b*b) - (4 * a * c)))/(2 * a);
        var x2 = (-b - Math.sqrt((b*b) - (4 * a * c)))/(2 * a);
        if (x1 === x2) {
            return "Your Root Is " + x1;
        }
        else {
            return "Your Roots Are " + x1 + " and " + x2;
        }
    }
}
console.log(rootFind(1,5,4));

