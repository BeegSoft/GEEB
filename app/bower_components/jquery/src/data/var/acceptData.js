define( function() {

<<<<<<< HEAD
=======
"use strict";

>>>>>>> 95782b76767dcabf2f7e6e5b8dd257730478b163
/**
 * Determines whether an object can have data
 */
return function( owner ) {

	// Accepts only:
	//  - Node
	//    - Node.ELEMENT_NODE
	//    - Node.DOCUMENT_NODE
	//  - Object
	//    - Any
<<<<<<< HEAD
	/* jshint -W018 */
=======
>>>>>>> 95782b76767dcabf2f7e6e5b8dd257730478b163
	return owner.nodeType === 1 || owner.nodeType === 9 || !( +owner.nodeType );
};

} );
