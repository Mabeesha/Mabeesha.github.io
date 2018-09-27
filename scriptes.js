function onLoadChangeOpacity()
{
	document.getElementById("divTop").style.opacity = 1;
	document.getElementById("divTop").style.maxWidth = '600px';
	document.getElementById("divTop").style.marginTop = '105px';
	document.getElementById("divIntro").style.opacity = 1;
	document.getElementById("background").style.opacity = 1;
	//document.getElementById("divEducation").style.opacity = 1;
	//document.getElementById("divSkills").style.opacity = 1;
	//document.getElementById("divProjects").style.opacity = 1;
}
/*
$('#divSkills').waypoint(function() 
{
    alert('You have scrolled to an entry.');
}, 
{
    offset: '100%'
}
);*/
$("a[href^='#']").click(function(e) {
	e.preventDefault();
	
	var position = $($(this).attr("href")).offset().top;

	$("body, html").animate({
		scrollTop: position
	} /* speed */ );
});