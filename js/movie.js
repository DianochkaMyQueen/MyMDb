// =========
// Variables
// =========
var field = document.querySelector(".content-body"),
	sidebar = document.querySelector(".movie-sidebar"),
	
	html = "<div class='movie-sidebar-wrap flex flex-col'>\
				<div class='movie_img-wrap fs1em movie-s_img-wrap'>\
					<span class='movie-s_index absol'></span>\
					<span class='movie-s_close absol'></span>\
					<img class='movie-img movie-s-img'>\
				</div>\
				<div class='movie-s_content-wrap grid'>\
					<h3 class='movie-s_title'></h3>\
					<div class='movie-s_info fs1em'></div>\
					<div class='movie-s_description fs1em flex flex-col'>\
						<div>\
							<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio dolorum aliquid iste, assumenda debitis, ipsam voluptate eligendi dolore, autem eius nulla sed neque voluptas, architecto quam libero magnam. Itaque perspiciatis, animi eaque totam sit fugiat dolorum obcaecati quaerat sed ipsam?</p>\
						</div>\
						<span class='movie-s_btn k-link desc-btn'>read more</span>\
					</div>\
					<div class='movie-s_actors-list fs1em flex flex-col'>\
						<div class='grid'></div>\
						<span class='movie-s_btn k-link actors-btn'>see more</span>\
					</div>\
				</div>\
			</div>",
	htmlActorElement = "<figure class='actors-list_actor flex flex-row'>\
							<div class='actor-img_wrap'><img class='actor-img'></div>\
							<div class='flex flex-col'>\
								<h4 class='actor-name'>Actor's name</h4>\
								<span class='actor-role'>Role</span>\
							</div>\
						</figure>";

	sidebar.innerHTML = html;

	var indexEl = sidebar.querySelector(".movie-s_index"),
		titleEl = sidebar.querySelector(".movie-s_title"),
		infoEl  = sidebar.querySelector(".movie-s_info"),
		// descEl  = sidebar.querySelector(".movie-s_description").children[0].children[0],
		movieListEl  = sidebar.querySelector(".movie-s_actors-list").children[0];

// =========
// Functions
// =========
	function randomN(max, min) {
		return Math.floor(Math.random() * (max - min)) + min;
	}

	function createList(list) {
		return list;
	}

	function closeSidebar() {
		document.body.classList.remove("body-scrollbar-hidden");
		sidebar.classList.remove("movie-sidebar-open");

		return;
	}

	function hideOrShow() {
		var el = this.parentElement.children[0];

		if(!el.classList.contains("show")) {
			el.classList.add("show");
			this.innerText = "hide";
		} else {
			el.classList.remove("show");
			this.innerText = "see more";
		}
	}

	function createMovieInfo(movie, index, callback) {
		var movieTitleTextNode = movie.querySelector(".movie-title").textContent,
			movieInfoTextNode  = movie.querySelector(".movie-info").textContent,
			actorsCount		   = randomN(6,12);

		callback(movieTitleTextNode, index, movieInfoTextNode, actorsCount);
	}

field.addEventListener('click', function(e) {
	if(this.contains(e.target) && e.target !== this) {
		// TODO IF ()
		var movie    = e.path.length === 9 ? e.path[1] : e.path[2],
			index = "#" + movie.href.match(/\d+$/m),
			closeBtn = sidebar.querySelector(".movie-s_close"),
			collapseBtn = Array.from(sidebar.querySelectorAll(".movie-s_btn"));

			createMovieInfo(movie, index, function(t,i, info, n) {
				indexEl.innerText = i;
				titleEl.innerText = t;
				infoEl.innerText  = info;
				movieListEl.innerHTML = "";

				for(var i = 0, length = n; i < n; i++) {
					movieListEl.innerHTML += createList(htmlActorElement);
				}
			});
			movie = null;
			index = null;
			document.body.classList.add("body-scrollbar-hidden");
			sidebar.classList.add("movie-sidebar-open")
		}

		collapseBtn.forEach(function(btn) {btn.addEventListener("click", hideOrShow)})
		closeBtn.addEventListener("click", closeSidebar);
		document.onkeyup = function(e) { if(e.keyCode === 27) closeSidebar(); }
});