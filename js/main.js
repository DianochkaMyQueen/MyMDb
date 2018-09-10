(function() {

	// =========
	// Variables
	// =========
	var cBody 		  = document.querySelector(".content-body"),
		schemaBtn 	  = document.querySelector(".schema"),

		h3Tag 		  = {},
		figCaptionTag = {},
		figureTag 	  = {},
		imgTag 		  = {},
		divTag  	  = {},
		aTag  		  = {},
		titleArr 	  = ["Movie Title", "Very Longer Movie Title"],
		genreArr 	  = ["Action", "Adventure", "Comedy", "Horror", "Western", "Science Fiction"],

		movieCount 	  = 10;

	// =========
	// Functions
	// =========
	function randomN(max, min) {
		return Math.floor(Math.random() * (max - min)) + min;
	}

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

	function createMovie(index) {

		var movieData  = createText("Was viewed " + randomN(1, 9) + "/" + randomN(1, 28) + "/" + randomN(2014, 2018)),
			movieTitle = createText(titleArr[randomN(0, 2)]),
			movieInfo  = createText(randomN(1972, 2018) + ", " + genreArr[randomN(0, 5)]),
			aHref 	   = "#movie-" + index;

			figCaptionTag = document.createElement("figCaption");
			figureTag	  = document.createElement("figure");
			imgTag 		  = document.createElement("img");
			divTag  	  = resetDiv();
			h3Tag 		  = document.createElement("h3");
			aTag   		  = document.createElement("a");

		h3Tag.appendChild(movieTitle);
		divTag.appendChild(movieInfo);
		divTag.classList.add("movie-info", "s-1-info");
		appChild(figCaptionTag, [h3Tag, divTag])
		divTag = resetDiv();
		divTag.appendChild(movieData);
		divTag.classList.add("viewed", "s-1-viewed");
		figCaptionTag.appendChild(divTag);
		divTag = resetDiv();
		divTag.appendChild(imgTag);
		divTag.classList.add("movie_img-wrap");
		appChild(aTag, [divTag, figCaptionTag])
		divTag = resetDiv();
		figureTag.appendChild(aTag);

		h3Tag.classList.add("movie-title", "s-1-title")
		imgTag.classList.add("movie_img");
		// imgTag.setAttribute("href", "#")

		aTag.setAttribute("href", aHref);
		figCaptionTag.classList.add("flex", "flex-col");
		figureTag.classList.add("movie", "flex", "flex-col");

		return figureTag;



		console.log(figureTag)

	}

	function changeSchema() {

		if(!this.classList.contains("s-2")) {
			this.classList.remove("s-1");
			this.children[2].classList.add("hide")
			this.children[3].classList.add("hide")
			this.classList.add("s-2");
		} else {
			this.classList.remove("s-2");
			this.children[2].classList.remove("hide")
			this.children[3].classList.remove("hide")
			this.classList.add("s-1");
		}
	}

	// =========
	// loops
	// =========
	for(var i = 0; i < movieCount; i++) {
		cBody.appendChild(createMovie(i));
	}

	// Event Listeners
	schemaBtn.addEventListener("click", changeSchema);

	// Lazy-load
	// TODO:

}())