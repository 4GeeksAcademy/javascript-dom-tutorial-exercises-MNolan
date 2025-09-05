let button = document.getElementById("superDuperButton");
button.addEventListener("click", function() {
	// Your code here
	const list = document.querySelector("#myList");
	const newLi = document.createElement("li");
	newLi.innerHTML = "Fourth element";
	list.appendChild(newLi)

});
