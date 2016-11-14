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
	$('#content').load(toLoad,'',showNewContent);
}

function hideContent() {
	$('#content').hide();
}

function showNewContent() {
	$('#content').show('normal',hideLoader);
}

function showLoader() {
	$('#wrapper').empty();
	$('#wrapper').append('<span id="load">Loading...</span>');
	$('#load').fadeIn('normal');
}

function hideLoader() {
	$('#load').fadeOut('normal');
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
