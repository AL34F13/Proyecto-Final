// JavaScript Document
$(document).ready(function(e) {
document.addEventListener("deviceready",function(){
	
	$('#menu').on ('tap',function(){
		navigator.vibrate(2000);
		
		

	audio = window.plugins.LowLatencyAudio;
	audio.preloadFX ('cancion1','music/one.mp3',function(){}, function(msg){ alert ("Error " + msg);});
	audio.preloadFX ('cancion2','music/two.mp3',function(){}, function(msg){ alert ("Error " + msg);});
	audio.preloadFX ('btnmenu','music/Illuminati_Confirmed.mp3',function(){}, function(msg){ alert ("Error " + msg);});
	audio.preloadFX ('btnjugadores','music/Smoke_Weed_Everyday.mp3',function(){}, function(msg){ alert ("Error " + msg);});
	audio.preloadFX ('btntrofeos','music/GET_NOSCOPED.mp3',function(){}, function(msg){ alert ("Error " + msg);});
	audio.preloadFX ('btnchamp','music/DAMN_SON.mp3',function(){}, function(msg){ alert ("Error " + msg);});
	audio.preloadFX ('sa1','music/.mp3',function(){}, function(msg){ alert ("Error " + msg);});
});
});
});
