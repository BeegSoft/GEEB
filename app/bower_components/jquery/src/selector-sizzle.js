define( [
	"./core",
	"../external/sizzle/dist/sizzle"
], function( jQuery, Sizzle ) {

<<<<<<< HEAD
jQuery.find = Sizzle;
jQuery.expr = Sizzle.selectors;
=======
"use strict";

jQuery.find = Sizzle;
jQuery.expr = Sizzle.selectors;

// Deprecated
>>>>>>> 95782b76767dcabf2f7e6e5b8dd257730478b163
jQuery.expr[ ":" ] = jQuery.expr.pseudos;
jQuery.uniqueSort = jQuery.unique = Sizzle.uniqueSort;
jQuery.text = Sizzle.getText;
jQuery.isXMLDoc = Sizzle.isXML;
jQuery.contains = Sizzle.contains;
<<<<<<< HEAD
=======
jQuery.escapeSelector = Sizzle.escape;
>>>>>>> 95782b76767dcabf2f7e6e5b8dd257730478b163

} );
