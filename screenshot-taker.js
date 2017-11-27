var page = require('webpage').create();
// place the url here
var url = ''
page.open(url, function(){
    var clipRect = page.evaluate(function(){
    	// place the id of the element here
    	var id = ''
        return document.getElementById(id).getBoundingClientRect();
    });
	page.clipRect = {
		top: clipRect.top,
		left: clipRect.left,
		width: clipRect.width,
		height: clipRect.height
	};
	page.render('capture.png');
	phantom.exit();
});