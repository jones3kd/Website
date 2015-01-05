$(document).ready(function () {
		$('.scroll-link').on('click', function(event){
		event.preventDefault();
		var sectionID = $(this).attr("data-id");
		scrollToID('#' + sectionID, 700);
	});
		
		$('.scroll-top').on('click', function(event) {
			event.preventDefault();
			$('html, body').animate({scrollTop: 0}, 'slow');
			
			
		});
		
		//aboutItems animation in about section
		
		$('.aboutItem').mouseenter(function() {
			$(this).animate( {
				opacity: '0.5',
				marginTop: '1px'
			});
		});
		
		$('.aboutItem').mouseleave(function() {
			$(this).animate( {
				opacity: '1',
				marginTop: '0px'
			});
		})
		
		/*
		$(".exp-effect").mouseenter(function() {
			$('.caption').animate( {
				borderBottom :'8px solid #000',
				'width' :'20%' 
			}, 500);
		})
		*/
		
	});
	
	function scrollToID(id, speed){
	  var offSet = 50;
	  var targetOffset = $(id).offset().top - offSet;
	  var mainNav = $('#main-nav');
	  
	  
	  $('html,body').animate({scrollTop:targetOffset}, speed);
	  
	  if (mainNav.hasClass("open")) {
		  mainNav.css("height", "1px").removeClass("in").addClass("collapse");
		  mainNav.removeClass("open");
	  }
}
	
	if (typeof console === "undefined") {
		
		console = {
			log: function () {}	
		}	
	}