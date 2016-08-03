define( [
	"../core",
	"../selector",
	"../effects"
], function( jQuery ) {

<<<<<<< HEAD
jQuery.expr.filters.animated = function( elem ) {
=======
"use strict";

jQuery.expr.pseudos.animated = function( elem ) {
>>>>>>> 95782b76767dcabf2f7e6e5b8dd257730478b163
	return jQuery.grep( jQuery.timers, function( fn ) {
		return elem === fn.elem;
	} ).length;
};

} );
