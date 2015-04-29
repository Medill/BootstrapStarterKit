/**
	* Medill.co
*/  

/**
	Bootstrap Project Template
	Designed and built by Zach Wise at VéritéCo
*/  

/*	Required Files
	CodeKit Import
	http://incident57.com/codekit/
================================================== */

// @codekit-prepend "source/jquery.smooth-scroll.js";

// @codekit-prepend "source/bootstrap/transition.js";
// @codekit-prepend "source/bootstrap/scrollspy.js";
// @codekit-prepend "source/bootstrap/tab.js";
// @codekit-prepend "source/bootstrap/tooltip.js";
// @codekit-prepend "source/bootstrap/carousel.js";
// @codekit-prepend "source/bootstrap/collapse.js";
// @codekit-prepend "source/bootstrap/modal.js";
// @codekit-prepend "source/bootstrap/dropdown.js";
// @codekit-prepend "source/bootstrap/affix.js";

// @codekit-prepend "source/waypoints.js";
// @codekit-prepend "source/waypoints-sticky.js";


/* Custom
================================================== */

$('.navbar a, .subnav a').smoothScroll();


$(document).ready(function(){
	
	$('.subnav').waypoint('sticky', {
		offset: 61,
		wrapper: '<div class="sticky-wrapper" />',
		stuckClass: 'navbar-fixed-top'
	});
	
});


/*	Analytics
----------------------------------------------------- */


var _gaq = _gaq || [];
_gaq.push(['_setAccount', 'UA-27443321-1']);
_gaq.push(['_setDomainName', 'medill.co']);
_gaq.push(['_trackPageview']);

(function() {
	var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
	ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
	var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
})();

