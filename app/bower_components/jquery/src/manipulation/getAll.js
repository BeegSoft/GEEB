define( [
	"../core"
], function( jQuery ) {

<<<<<<< HEAD
function getAll( context, tag ) {

	// Support: IE9-11+
=======
"use strict";

function getAll( context, tag ) {

	// Support: IE <=9 - 11 only
>>>>>>> 95782b76767dcabf2f7e6e5b8dd257730478b163
	// Use typeof to avoid zero-argument method invocation on host objects (#15151)
	var ret = typeof context.getElementsByTagName !== "undefined" ?
			context.getElementsByTagName( tag || "*" ) :
			typeof context.querySelectorAll !== "undefined" ?
				context.querySelectorAll( tag || "*" ) :
			[];

	return tag === undefined || tag && jQuery.nodeName( context, tag ) ?
		jQuery.merge( [ context ], ret ) :
		ret;
}

return getAll;
} );
