/*
	A fancy beautifal way to showcase youtube videos.

	
	@author Jordan Goldin <jorgoldin@gmail.com>
	@requires jQuery


*/


var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);



var ytIdPlayList = [
    "RFeUNoOaQUo",
	"SEEznjguqBs",
	"AmDl1t7DCKU",
	"GQsiQx9q3d8",
	"YJ3C6v9D4kE",
	"Agz3IwQKVqk",
	"x7wvGY969ZM",
]

var player;
function onYouTubeIframeAPIReady() {
	player = new YT.Player('player', {
		  videoId: ytIdPlayList[0],
		  events: {
		    'onReady': onPlayerReady,
		    'onStateChange': onPlayerStateChange
		  }
	});

	$(".ytexpo-vid").click(function() {
		var clickedItem = $(this);


		player.loadVideoById(clickedItem.attr("data-ytexpo-id"), 0, "hd720");

		$(".ytexpo-vid").removeClass("selected");
		clickedItem.addClass("selected");


	})
}

function onPlayerReady(event) {
	
}

function onPlayerStateChange(event) {

}