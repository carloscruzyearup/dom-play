function setBold(className) {
	let elements = document.querySelectorAll(className);
	for ( i = 0; i < elements.length ; i++ ) {
		elements[i].style.fontWeight = "bold";
	}
}

function resetBold(listOfElems) {
	for( i = 0; i < listOfElems.length ; i++ ) {
		listOfElems[i].style.fontWeight = "normal";
	}
}

document.querySelector(".info-btn").addEventListener("click", function () {
	alert("This page demonstrates how to utilize the DOM (Document Object Model) to target multiple elements at once. Makes use of arrays and for loops in JavaScript.\n\nClick on any of the character's lines in script sample and all lines spoken by that character should be bolded.");
});


let allElements = document.querySelectorAll("*");
let actorsClasses = [];
let actors = [];

for( i = 0; i < allElements.length ; i++ ) {
	let classes = allElements[i].classList;

	for( j = 0; j < classes.length ; j++ ) {
		if (classes[j].substring(0, 5) == "actor")
		{
			actors.push(allElements[i]);

			let index = parseInt(classes[j].substring(5));
			actorsClasses[index] = classes[j];

			allElements[i].addEventListener("click", function () {
				resetBold(actors);
				resetBold(document.querySelectorAll(".stage-direction"));
				setBold(`.${classes[j]}`)
			});

			j = classes.length;
		}
	}
}

let stageDir = document.querySelectorAll(".stage-direction");

for (let i = 0; i < stageDir.length; i++) {
	stageDir[i].addEventListener("click", function () {
		resetBold(actors);
		setBold(`.stage-direction`)
	});
	
}