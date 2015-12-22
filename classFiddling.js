function Person (name, gender, hometown) {
	this.nomen = name;
	this.gender = gender;
	this.hometown = hometown;
	this.getProps = function () {
		return this.nomen + ", " + this.gender + ", " + this.hometown + ".";
	}
	this.nameCheck = function() {
		if (this.nomen === "Nick") {
			this.declaration = "I am of a superior kind.";
			return this.declaration;
		}
	}
}
var nick = new Person ("Nick","Male","New York");
console.log(nick.getProps());
console.log(nick.nameCheck());
