var field = document.querySelector(".content-body");

field.addEventListener("click", function(e) {
	console.log(e.target.parentNode);
});