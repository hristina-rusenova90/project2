;(function( $, window, document ) {

	var $doc = $( document );
	var $win = $( window );

	$doc.ready( function() {
		var $main_slider = $( '#main-slider' );
		var $client_says = $( '#cl-slider' );
		var $our_team = $( '#our-team' );



		$main_slider.owlCarousel({
		    loop:true,
		    items: 1,
		    autoplay: true,
		    autoplayTimeout: 3000,
		    autoplaySpeed: 1000,
		    navText :true,
		    //margin:10,
		    nav:true,
		    responsive:{
		        0:{ 
		            items:1
		        },
		        600:{
		            items:1
		        },
		        1000:{
		            items:1
		        }
		    }
		});

		$client_says.owlCarousel({
		    loop:true,
		    dots: false,
		    items: 1,
		    autoplay: true,
		    autoplayTimeout: 3000,
		    autoplaySpeed: 1000,
		    navText : true,
		    //margin:10,
		    nav:true,
		    responsive:{
		        0:{
		            items:1
		        },
		        600:{
		            items:1
		        },
		        1000:{
		            items:1
		        }
		    }
		});

		$our_team.owlCarousel({
		    loop:true,
		    dots: true,
		    items: 1,
		    autoplay: true,
		    autoplayTimeout: 3000,
		    autoplaySpeed: 1000,
		    autoplayHoverPause: true,
		    
		    nav: false,
		    responsive:{
		        0:{
		            items:1
		        },
		        600:{
		            items:2
		        },
		        1000:{
		            items:4
		        }
		    }
		});
	});	

})( jQuery, window, document );