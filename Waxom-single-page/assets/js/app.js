/*Sliders*/ 

;(function( $, window, document ) {

	var $doc = $( document );
	var $win = $( window );

	$doc.ready( function() {
		var $main_slider = $( '#main-slider' );
		var $ideas_slider = $( '#ideas-slider' );
		var $post_slider = $( '#post-slider' );
		


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

		$ideas_slider.owlCarousel({			
		    loop:true,
		    items: 1,
		    autoplay: true,
		    autoplayTimeout: 3000,
		    autoplaySpeed: 1000,
		   dots: false,
		   // center: true,
		   // margin: 20,
		   autoHeight: true,

		    pagination: false,
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

		$post_slider.owlCarousel({
		    loop:true,
		    items: 3,
		    autoplay: true,
		    autoplayTimeout: 3000,
		    autoplaySpeed: 1000,
		    navText :true,
		    margin:10,
		    nav:true,
		    responsive:{
		        0:{ 
		            items:1
		        },
		        600:{
		            items:2
		        },
		        1000:{
		            items:3
		        }
		    }
		});



		});

		})( jQuery, window, document );


		/*Counters*/

		jQuery(document).ready(function( $ )
		{
			$( '.counter' ).counterUp({
				delay: 20,
				time: 4000
			});
		});
	