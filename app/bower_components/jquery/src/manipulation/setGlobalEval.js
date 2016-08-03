define( [
	"../data/var/dataPriv"
], function( dataPriv ) {

<<<<<<< HEAD
=======
"use strict";

>>>>>>> 95782b76767dcabf2f7e6e5b8dd257730478b163
// Mark scripts as having already been evaluated
function setGlobalEval( elems, refElements ) {
	var i = 0,
		l = elems.length;

	for ( ; i < l; i++ ) {
		dataPriv.set(
			elems[ i ],
			"globalEval",
			!refElements || dataPriv.get( refElements[ i ], "globalEval" )
		);
	}
}

return setGlobalEval;
} );
