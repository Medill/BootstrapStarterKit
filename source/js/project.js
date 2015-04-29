/**
	Bootstrap Project Template
	Designed and built by Zach Wise at VéritéCo
*/  

/*	Required Files
	CodeKit Import
	http://incident57.com/codekit/
================================================== */


// BOOTSTRAP
	// @codekit-prepend "Library/bootstrap/source/bootstrap/transition.js";
	// @codekit-prepend "Library/bootstrap/source/bootstrap/scrollspy.js";
	// @codekit-prepend "Library/bootstrap/source/bootstrap/tab.js";
	// @codekit-prepend "Library/bootstrap/source/bootstrap/tooltip.js";
	// @codekit-prepend "Library/bootstrap/source/bootstrap/carousel.js";
	// @codekit-prepend "Library/bootstrap/source/bootstrap/collapse.js";
	// @codekit-prepend "Library/bootstrap/source/bootstrap/modal.js";
	// @codekit-prepend "Library/bootstrap/source/bootstrap/dropdown.js";
	// @codekit-prepend "Library/bootstrap/source/bootstrap/affix.js";

// JQUERY PLUGINS
	// @codekit-prepend "Library/jquery.smooth-scroll.js";
	// @codekit-prepend "Library/jquery.easing.1.3.js";
	// @codekit-prepend "Library/waypoints.js";
	// @codekit-prepend "Library/waypoints-sticky.js";
	// @codekit-prepend "Library/jquery.fluidbox.js"; 
	// @codekit-prepend "Library/jquery.laziestloader.js";



$(document).ready(function(){
	
	var _speed = 500,
		_story_nav_active = false,
		_has_story_cover = false,
		_story_cover_height = 100,
		_path = "../",
		_is_index = false;
		
	
	
	/*	Smooth Scroll
	================================================== */
	$('a').smoothScroll({
		offset: -290
	});
	
	/*	LAZY LOAD AND ZOOMABLE IMAGES
	================================================== */
	// Find Images and make them zoomable
	function makeImagesZoomable() { 
		
		$( "figure" ).each(function(figure) {
			if ($(this).find( "a img" ).length ) {
				
			} else {
				var img_url,
					el_link = createEl("a", "enlarge"),
					el_img = $(this).find("img");
					
					
				img_url = $(this).find("img").attr("data-src");
				
				if (img_url == undefined) {
					img_url = $(this).find("img").attr("src");
				}
				
				$( el_img ).detach();
				
				$(el_link).attr("href", img_url);
				$(el_link).append(el_img);
				$(this).prepend(el_link);
				

			}
		});
		
		
		
		
		/*	Laziest Loader
		================================================== */
		$("img").laziestloader();
	 
		$('img').load(function() {
			this.style.opacity = 1;
		});
		
		$('.enlarge').fluidbox({
		 	viewportFill:0.85
		});
		
	}
	
	/*	STORY COVER
	================================================== */
	if ($('#story-cover').length ) {
		_has_story_cover = true;
		
		_story_cover_height = window.innerHeight;
		
		$('#story-cover').height(_story_cover_height);
		
		$( window ).resize(function() {
			_story_cover_height = window.innerHeight;
			$('#story-cover').height(_story_cover_height);
		});

		/*
		$('article').waypoint({
			handler: function(direction) {
			
				if (direction === "up") {
					//$('.story-cover-image').css("opacity", "1");
					$('.story-cover-content').css("opacity", "1");
					navbarChange(false);
				}
				if (direction === "down") {

					//$('.story-cover-image').css("opacity", "0");
					$('.story-cover-content').css("opacity", "0");
					navbarChange(true);
				}
			 
			},
			offset:100
		});
		*/
		$('.story-cover-arrow').click(function() {
			$.smoothScroll({
				scrollElement: $('body'),
				scrollTarget: 'article'
			});
		});
		
	} else {
		
		$('#navbar-product').addClass('no-cover');
		/*
		$('article').waypoint({
			handler: function(direction) {
			
				if (direction == "down") {
					$('#navbar-product').addClass('in-article');
				} else if (direction == "up") {
					$('#navbar-product').removeClass('in-article');
				}
			 
			},
			offset:-2
		});
		*/
	}
	
	makeImagesZoomable();
});

/* Trace (console.log)
================================================== */
trace = function( msg ) {
	if (window.console) {
		console.log(msg);
	} else if ( typeof( jsTrace ) != 'undefined' ) {
		jsTrace.send( msg );
	} else {
		//alert(msg);
	}
};

/* Create Element
================================================== */
createEl = function(tagName, className) {
	var el = document.createElement(tagName);
	el.className = className;
	return el;
} ;

/* Google Analytics
================================================== */
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','http://www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-537357-22', 'auto');
ga('send', 'pageview');