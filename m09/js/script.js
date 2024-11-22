var  clearButton = document.querySelector("button");
// adds functionality to the button
clearButton.addEventListener("click", function(event) {
	var element = document.getElementsByTagName("div");
	// finds every dot div
	for (index = element.length - 1; index >= 0; index--) {
		//removes every dot div
		element[index].parentNode.removeChild(element[index]);
	}

	// Stops the propagation of events
	event.stopPropagation();
});

addEventListener("click", function(event) {
	var dot = document.createElement("div");
	dot.className = "dot";
	dot.style.left = (event.pageX - 4) + "px";
	dot.style.top = (event.pageY - 4) + "px";
	document.body.appendChild(dot);
});
