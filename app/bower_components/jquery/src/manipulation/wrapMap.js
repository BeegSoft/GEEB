define( function() {

<<<<<<< HEAD
// We have to close these tags to support XHTML (#13200)
var wrapMap = {

	// Support: IE9
=======
"use strict";

// We have to close these tags to support XHTML (#13200)
var wrapMap = {

	// Support: IE <=9 only
>>>>>>> 95782b76767dcabf2f7e6e5b8dd257730478b163
	option: [ 1, "<select multiple='multiple'>", "</select>" ],

	// XHTML parsers do not magically insert elements in the
	// same way that tag soup parsers do. So we cannot shorten
	// this by omitting <tbody> or other required elements.
	thead: [ 1, "<table>", "</table>" ],
	col: [ 2, "<table><colgroup>", "</colgroup></table>" ],
	tr: [ 2, "<table><tbody>", "</tbody></table>" ],
	td: [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],

	_default: [ 0, "", "" ]
};

<<<<<<< HEAD
// Support: IE9
=======
// Support: IE <=9 only
>>>>>>> 95782b76767dcabf2f7e6e5b8dd257730478b163
wrapMap.optgroup = wrapMap.option;

wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
wrapMap.th = wrapMap.td;

return wrapMap;
} );
