var adjectiveIndex = 0;
var nounIndex = 0;
var verbIndex = 0;

var adjective = [ "bacon-loving", "punctual", "nostalgic", "book-hoarding", "contemplative", "dramatic" ];
var noun = [ "information designer", "GIF-addict", "Texan", "dog-lover", "creative coder", "motion graphics guy" ];
var verb = [ "drink craft beer." , "program every once in a while.", "buy nice shoes", "visualize interesting data.", "explore the ironic", "quote Bob Dylan." ];

function startRandom() {

	adjectiveIndex = Math.floor(Math.random() * adjective.length-1);
	nounIndex = Math.floor(Math.random() * noun.length-1);
	verbIndex = Math.floor(Math.random() * verb.length-1);


	document.getElementById("adjective").innerHTML = adjective[adjectiveIndex];
	document.getElementById("noun").innerHTML = noun[nounIndex];
	document.getElementById("verb").innerHTML = verb[verbIndex];
}

function changeAdjective(div) {
	var id = div.id;

	console.log(adjectiveIndex);

	if (id == "adLeft") {
		if (adjectiveIndex == 0) {
			adjectiveIndex = adjective.length-1;
		}
		else {
			adjectiveIndex--;
		}
	}

	if (id == "adRight") {
		if (adjectiveIndex == adjective.length-1) {
			adjectiveIndex = 0;
		}
		else {
			adjectiveIndex++;
		}
	}

	document.getElementById("adjective").innerHTML = adjective[adjectiveIndex];
}

function changeNoun(div) {
	var id = div.id;

	console.log(nounIndex);

	if (id == "nounLeft") {
		if (nounIndex == 0) {
			nounIndex = noun.length-1;
		}
		else {
			nounIndex--;
		}
	}

	if (id == "nounRight") {
		if (nounIndex == noun.length-1) {
			nounIndex = 0;
		}
		else {
			nounIndex++;
		}
	}

	document.getElementById("noun").innerHTML = noun[nounIndex];
}

function changeVerb(div) {
	var id = div.id;

	console.log(verbIndex);

	if (id == "verbLeft") {
		if (verbIndex == 0) {
			verbIndex = verb.length-1;
		}
		else {
			verbIndex--;
		}
	}

	if (id == "verbRight") {
		if (verbIndex == verb.length-1) {
			verbIndex = 0;
		}
		else {
			verbIndex++;
		}
	}

	document.getElementById("verb").innerHTML = verb[verbIndex];
}