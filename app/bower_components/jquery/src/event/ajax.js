define( [
	"../core",
	"../event"
], function( jQuery ) {

<<<<<<< HEAD
=======
"use strict";

>>>>>>> 95782b76767dcabf2f7e6e5b8dd257730478b163
// Attach a bunch of functions for handling common AJAX events
jQuery.each( [
	"ajaxStart",
	"ajaxStop",
	"ajaxComplete",
	"ajaxError",
	"ajaxSuccess",
	"ajaxSend"
], function( i, type ) {
	jQuery.fn[ type ] = function( fn ) {
		return this.on( type, fn );
	};
} );

} );
