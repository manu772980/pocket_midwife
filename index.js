
function clickFunction(){
	console.log("click works!!!")
}

function searchBar(){
	var tagList = ["h3", "p", "a", "h1", "h2"];
	$('#nav_searchbar_btn').click(
		// if someone clicks the button
		function(){
			var input = $("#nav_searchbar_inp").val() //Takes the textbox textmy search text
			$( tagList ).each(function() {
  				$(this + ":contains('" + input + "')").css("background-color", "yellow");
			});
		}
	);
}
function function_name(argument) {
	$('#nav_searchbar_form').submit(function () {
 		searchBar();
 		return false;
	});
}


$(document).ready(function() {
      console.log("Howdy!!!");
      clickFunction();
      searchBar();
});
