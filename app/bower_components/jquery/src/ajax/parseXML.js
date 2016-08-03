define( [
	"../core"
], function( jQuery ) {

<<<<<<< HEAD
=======
"use strict";

>>>>>>> 95782b76767dcabf2f7e6e5b8dd257730478b163
// Cross-browser xml parsing
jQuery.parseXML = function( data ) {
	var xml;
	if ( !data || typeof data !== "string" ) {
		return null;
	}

<<<<<<< HEAD
	// Support: IE9
=======
	// Support: IE 9 - 11 only
	// IE throws on parseFromString with invalid input.
>>>>>>> 95782b76767dcabf2f7e6e5b8dd257730478b163
	try {
		xml = ( new window.DOMParser() ).parseFromString( data, "text/xml" );
	} catch ( e ) {
		xml = undefined;
	}

	if ( !xml || xml.getElementsByTagName( "parsererror" ).length ) {
		jQuery.error( "Invalid XML: " + data );
	}
	return xml;
};

return jQuery.parseXML;

} );
