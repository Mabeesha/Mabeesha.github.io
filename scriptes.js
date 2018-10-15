function onLoadChangeOpacity()
{
	document.getElementById("divTop").style.opacity = 1;
	document.getElementById("divTop").style.maxWidth = '600px';
	document.getElementById("divTop").style.marginTop = '70px';
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
$(document).ready(function(){ 
$("a[href^='#']").click(function(e) {
	e.preventDefault();
	
	var position = $($(this).attr("href")).offset().top;

	$("body, html").animate({
		scrollTop: position
	} /* speed */ );
});
});

$(document).ready(function(){       
   var scroll_start = 0;
   var startchange = $('#startchange');
   var offset = startchange.offset();
    if (startchange.length){
   $(document).scroll(function() { 
      scroll_start = $(this).scrollTop();
      if(scroll_start > offset.top) {
          $(".navbar").css('background-color', 'rgba(74,74,74,1)');
       } else {
          $('.navbar').css('background-color', 'rgba(74,74,74,0)');
       }
   });
    }
});