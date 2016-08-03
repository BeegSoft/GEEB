define( function() {
<<<<<<< HEAD
	return function( elem ) {

		// Support: IE<=11+, Firefox<=30+ (#15098, #14150)
=======
	"use strict";

	return function( elem ) {

		// Support: IE <=11 only, Firefox <=30 (#15098, #14150)
>>>>>>> 95782b76767dcabf2f7e6e5b8dd257730478b163
		// IE throws on elements created in popups
		// FF meanwhile throws on frame elements through "defaultView.getComputedStyle"
		var view = elem.ownerDocument.defaultView;

		if ( !view || !view.opener ) {
			view = window;
		}

		return view.getComputedStyle( elem );
	};
} );
