function map(array, newFunction) {
	array.forEach(function(item) {
		console.log(item)
		if (item == "me7 wiksten") {
			newFunction();
		}
	});
}

function lengthercounter(kick) {
	console.log("time to go")
}

// map(["ground", "control", "to", "major", "tom"], (elm) => { return counter.length })
// map(["ground", "control", "to", "major", "tom"], lengthercounter);

map(["me7e", "ta7a", "weytk", "me7 wiksten", "nucwem"], lengthercounter);