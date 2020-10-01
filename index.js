
function clickFunction(){
	console.log("click works!!!");
}

function homeClickFunction(){
	console.log("This is home option");
}
function myStoryClickFunction(){
	console.log("This is my story option");
}
function vlogClickFunction(){
	console.log("This is vlog option");
}
function storeClickFunction(){
	console.log("This is store option");
}
function contactClickFunction(){
	console.log("This is contact option");
}
function prepForBirthClickFunction(){
	console.log("This is buy now for preparing for birth option");
}
function birthCompanionClickFunction(){
	console.log("This is buy now for birth companion option");
}
function secretWomenBusinessClickFunction(){
	console.log("This is click here for secret women's business option");
}

//security architect
function checkCharacter(str){
	if(/^[a-zA-Z0-9- ]*$/.test(str) == false) {
    	console.warn('Your search string contains illegal characters.');
    	return false;
	}
}
//security architect

function searchBar(){
	var tagList = ["h3", "h4", "p", "a", "h1", "h2"];
	$('#nav_searchbar_btn').click(
		// if someone clicks the button
		function(){
			var input = $("#nav_searchbar_inp").val() //Takes the textbox textmy search text
			checkCharacter(input);
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

function preventEnterKeyResponse(){
	$('#nav_searchbar_form').keypress(function(e) { 
    	return e.keyCode != 13;
	});
}

function create_menu(){
	$("#nav-bar-menu").append('<li class="nav-item" onClick="homeClickFunction()"><a class="nav-link" href="#">HOME</a></li>'
	+'<li class="nav-item" onClick="myStoryClickFunction()"><a class="nav-link" href="#">MY STORY</a></li>'
	+'<li class="nav-item" onClick="vlogClickFunction()"><a class="nav-link" href="#">VLOG</a></li>'
	+'<li class="nav-item" onClick="storeClickFunction()"><a class="nav-link" href="#">STORE</a></li>'
	+'<li class="nav-item" onClick="contactClickFunction()"><a class="nav-link" href="#">CONTACT</a></li>');
}

$(document).ready(function() {
      searchBar();
      create_menu();
      preventEnterKeyResponse();
});
