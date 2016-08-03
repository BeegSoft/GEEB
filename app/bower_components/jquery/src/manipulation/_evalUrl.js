define( [
	"../ajax"
], function( jQuery ) {

<<<<<<< HEAD
=======
"use strict";

>>>>>>> 95782b76767dcabf2f7e6e5b8dd257730478b163
jQuery._evalUrl = function( url ) {
	return jQuery.ajax( {
		url: url,

		// Make this explicit, since user can override this through ajaxSetup (#11264)
		type: "GET",
		dataType: "script",
<<<<<<< HEAD
=======
		cache: true,
>>>>>>> 95782b76767dcabf2f7e6e5b8dd257730478b163
		async: false,
		global: false,
		"throws": true
	} );
};

return jQuery._evalUrl;

} );
