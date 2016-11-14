$(document).ready(onReady);

function onReady() {
	checkPreload();
	$('nav a').click(onNavClick);
}

function convertLink(link) {
	return link.substring(1) + ".html";
}

function onNavClick() {
	var toLoad = convertLink($(this).attr('href'));
	hideContent();
	showLoader();
	$('#content').load(toLoad,'',hideLoader);
}

function hideContent() {
	$('#content').hide();
}

function showNewContent() {
	$('#content').show('normal');
}

function showLoader() {
	$('#wrapper').empty();
	$('#wrapper').append('<div class="loader" id="load"></div>');
	$('#load').fadeIn('normal');
}

function hideLoader() {
	$('#load').fadeOut('normal',showNewContent);
}

var preloaded = false;

function checkPreload() {
	var hash = window.location.hash.substr(1);
	$('nav li a').each(checkPreloadItem);
	if( preloaded == false ) {	
		$('#content').load("home.html");
	}
}

function checkPreloadItem() {
	var hash = window.location.hash.substr(1);
	var toLoad = convertLink($(this).attr('href'));
	if(hash+".html" == toLoad ){
		preloaded = true;
		$('#content').load(toLoad);
	}
}
