( function( $ ) {

	/**
	 * A function to add classes to body depending on window width.
	 */
	function body_class() {

		window_width = $( window ).width();
		$( 'body' ).removeClass( 'small-screen medium-screen large-screen' );
		if ( window_width >= 1020 ) {
			$( 'body' ).addClass( 'small-screen medium-screen large-screen' );
		} else if ( window_width >= 768 ) {
			$( 'body' ).addClass( 'small-screen medium-screen' );
		} else if ( window_width >= 600 ) {
			$( 'body' ).addClass( 'small-screen' );
		}

	}

	/**
	 * A function to move the hero image behind the header.
	 */
	function hero_image() {

		var body, header, header_height, hero, window_width;

		body = $( 'body' );
		header = $( '.site-header' );
		header_height = header.outerHeight();
		if ( $( '.site-top-content' ).length ) {
			header_height = header_height - $( '.site-top-content' ).outerHeight();
		}
		hero = $( '.hero' );
		window_width = $( window ).width();

		if ( body.hasClass( 'hero-image' ) && window_width >= 1230 ) {
			header.css( 'margin-bottom', - header_height );
			if ( hero.hasClass( 'with-featured-image' ) ) {
				hero.css( 'padding-top', 216 + header_height );
			} else {
				hero.css( 'padding-top', 144 + header_height );
			}
		} else if ( body.hasClass( 'hero-image' ) && window_width >= 1020 ) {
			header.css( 'margin-bottom', - header_height );
			if ( hero.hasClass( 'with-featured-image' ) ) {
				hero.css( 'padding-top', 144 + header_height );
			} else {
				hero.css( 'padding-top', 96 + header_height );
			}
		} else {
			header.css( 'margin-bottom', '' );
			hero.css( 'padding-top', '' );
		}

		header.fadeIn( 250 );

	}

	$( window ).load( function() {

		body_class();
		hero_image();

		/* Add dropdown toggle to Custom Menus Widget items */
		$( '.widget_nav_menu .page_item_has_children > a, .widget_nav_menu .menu-item-has-children > a' ).append( '<button class="dropdown-toggle" aria-expanded="false"/>' );

		/* Toggle child menu items */
		$( '.dropdown-toggle' ).click( function( e ) {
			e.preventDefault();
			$( this ).toggleClass( 'toggle-on' );
			$( this ).parent( 'a' ).toggleClass( 'toggle-on' );
			$( this ).parent().next( '.children, .sub-menu' ).toggleClass( 'toggle-on' );
			$( this ).attr( 'aria-expanded', $( this ).attr( 'aria-expanded' ) === 'false' ? 'true' : 'false' );
		} );

	} ).resize( function() {

		body_class();
		hero_image();

	} );

} )( jQuery );
