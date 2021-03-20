/**
 * navigation.js
 *
 * Handles toggling the navigation menu for small screens.
 */
( function( $ ) {

	$( '.main-navigation .page_item_has_children > a, .main-navigation .menu-item-has-children > a' ).append( '<button class="dropdown-toggle" aria-expanded="false"/>' );

	$( '.menu-toggle' ).click( function() {
		$( '#site-navigation' ).toggleClass( 'toggle-on' );
	} );

} )( jQuery );
