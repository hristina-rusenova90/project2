;(function( $, window, document) {

	var $win = $( window );
	var $doc = $( document );

	$doc.ready( function() {
		
		var $canvas_button = $('#btn-menu');
		var $main_nav = $('#main-nav');

		$canvas_button.on('click', function() {

			$doc.trigger('show_canvas_menu');				
			});

		

			$doc.on( 'show_canvas_menu', function() {
				$show_menu.addClass('show');

			});
	});

})(jQuery, window, document);