var field = document.querySelector(".content-body");

field.addEventListener("click", function(e) {
	if(field.contains(e.target) && e.target !== field) {
// =========
// Variables
// =========
		var movie = e.path.length === 9 ? e.path[1] : e.path[2],
			index = "#" + movie.href.match(/\d+$/m);
			div   = resetDiv();
			
// =========
// Functions
// =========
		function createText(value) {
			return document.createTextNode(value);
		}

		function resetDiv() {
			return document.createElement("div"); 
		}

		function appChild(rootEl, arr) {
			if(rootEl !== undefined) {
				if(arr !== undefined && arr.length && Array.isArray(arr) ) {
					var i = 0;
					for (i, arr; i < arr.length; i++) {
						if(typeof arr[i] === "object")
						rootEl.appendChild(arr[i]);
					}	
				}
			}
			return;
		}

		function createMovieInfo() {
			
		}
	}
});