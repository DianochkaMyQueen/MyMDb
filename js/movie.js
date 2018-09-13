var field = document.querySelector(".content-body"),

	sidebar = document.querySelector(".movie-sidebar"),
	html = "<div class='movie-sidebar-wrap flex flex-col'>\
				<div class='movie_img-wrap movie-s_img-wrap'>\
					<span class='movie-s_index absol'>#12</span>\
					<span class='movie-s_close absol'>X</span>\
					<img class='movie-img movie-s-img'>\
				</div>\
				<div class='movie-s_content-wrap grid'>\
					<h3 class='movie-s_title'>Movie title</h3>\
					<div class='movie-s_info'>1997, Comedy</div>\
					<div class='movie-s_description flex flex-col'>\
						<div>\
							<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum dolorum modi placeat doloribus odit ab provident, eligendi rerum dignissimos deleniti laboriosam nisi repellat impedit sit deserunt, adipisci architecto porro asperiores aspernatur quo maxime recusandae, suscipit ipsa dolor laborum. Labore consequatur voluptates laboriosam itaque necessitatibus, vel animi quibusdam, minus dolorem hic!</p>\
						</div>\
						<span class='movie-s_btn k-link desc-btn'>read more</span>\
					</div>\
					<div class='movie-s_actors-list flex flex-col'>\
						<div class='grid'>\
							<figure class='actors-list_actor flex flex-row'>\
								<div class='actor-img_wrap'><img class='actor-img'></div>\
								<div class='flex flex-col'>\
									<h4 class='actor-name'>Jeniffer Eniston</h4>\
									<span class='actor-role'>Actris</span>\
								</div>\
							</figure>\
							<figure class='actors-list_actor flex flex-row'>\
								<div class='actor-img_wrap'><img class='actor-img'></div>\
								<div class='flex flex-col'>\
									<h4 class='actor-name'>Actor</h4>\
									<span class='actor-role'>role</span>\
								</div>\
							</figure>\
							<figure class='actors-list_actor flex flex-row'>\
								<div class='actor-img_wrap'><img class='actor-img'></div>\
								<div class='flex flex-col'>\
									<h4 class='actor-name'>Actor</h4>\
									<span class='actor-role'>role</span>\
								</div>\
							</figure>\
							<figure class='actors-list_actor flex flex-row'>\
								<div class='actor-img_wrap'><img class='actor-img'></div>\
								<div class='flex flex-col'>\
									<h4 class='actor-name'>Actor</h4>\
									<span class='actor-role'>role</span>\
								</div>\
							</figure>\
							<figure class='actors-list_actor flex flex-row'>\
								<div class='actor-img_wrap'><img class='actor-img'></div>\
								<div class='flex flex-col'>\
									<h4 class='actor-name'>Actor</h4>\
									<span class='actor-role'>role</span>\
								</div>\
							</figure>\
							<figure class='actors-list_actor flex flex-row'>\
								<div class='actor-img_wrap'><img class='actor-img'></div>\
								<div class='flex flex-col'>\
									<h4 class='actor-name'>Actor</h4>\
									<span class='actor-role'>role</span>\
								</div>\
							</figure>\
							<figure class='actors-list_actor flex flex-row'>\
								<div class='actor-img_wrap'><img class='actor-img'></div>\
								<div class='flex flex-col'>\
									<h4 class='actor-name'>Actor</h4>\
									<span class='actor-role'>role</span>\
								</div>\
							</figure>\
						</div>\
						<span class='movie-s_btn k-link actors-btn'>see more</span>\
					</div>\
				</div>\
			</div>";

			sidebar.innerHTML = html;

			// TODO:
			// update function
			// clear html var

field.addEventListener('click', function(e) {
	if(field.contains(e.target) && e.target !== field) {
// =========
// Variables
// =========
		var movie = e.path.length === 9 ? e.path[1] : e.path[2],
			index = "#" + movie.href.match(/\d+$/m);

// =========
// Functions
// =========


		function createMovieInfo() {

		}
	}
});