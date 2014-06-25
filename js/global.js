//Global Javascript File
    jQuery(document).ready(function($){

	    if ($('.workshop').length > 0) {

			//Float sidebar
			$('#sidebar .block').stickynav();

			//Scroll on Click to location
			$('.workshop #sidebar a').click(function(){
				var linkID = $(this).attr('href').substring(1);
				$.scrollTo($('h2#'+ linkID) , {duration:300,easing:'swing'});
				return false;
			});



			// Talk Tooltip
			$('.talk').tooltipsy({
			    offset: [0, 1]

			});
	    }

	});

// sticky nav
// ---------------
(function($) {
    $.fn.stickynav = function() {

	 var nav = $(this);
	 var aboveHeight = nav.offset().top;

	//when scroll
    $(window).scroll(function(){
	     if ($(window).scrollTop() > aboveHeight){
	     	nav.addClass('sticky');
			nav.find('.navbarbg').stop().animate({opacity:1}, 100);
	     } else {
     	 	nav.removeClass('sticky');
			nav.find('.navbarbg').stop().animate({opacity:0}, 100);
     	 }
     });




  }
})(jQuery);

	 // DOM ready
	 $(function() {

      // Create the dropdown base
      $("<select />").appendTo("#nav");

      // Create default option "Go to..."
      $("<option />", {
         "selected": "selected",
         "value"   : "",
         "text"    : "Menu"
      }).appendTo("#nav select");

      // Populate dropdown with menu items
      $("#nav a").each(function() {
       var el = $(this);
       $("<option />", {
           "value"   : el.attr("href"),
           "text"    : el.text()
       }).appendTo("#nav select");
      });

	   // To make dropdown actually work
	   // To make more unobtrusive: http://css-tricks.com/4064-unobtrusive-page-changer/
      $("#nav select").change(function() {
        window.location = $(this).find("option:selected").val();
      });

	 });

 $(function() {
		$('#button, #close').click(function() {
		    $('#sidebar').toggleClass('show');
		});
	 });
