var page = require('webpage').create();
// specify the url
var url = ''
page.open(url, function() {
    var i = 0;
    var takeScreenshot = function() {
        var clipRect = page.evaluate(function() {
            return document.getElementById("").getBoundingClientRect();
        });
        page.clipRect = {
            top: clipRect.top,
            left: clipRect.left,
            width: clipRect.width,
            height: clipRect.height
        };
        var screenshot_name = "screenshot" + i + ".png";
        page.render(screenshot_name);
        console.log("Successfully rendered : " + screenshot_name);
        page.reload();
        i++;
        if (i == 20) {
            phantom.exit();
        }
        setTimeout(function() {
            takeScreenshot();
        }, 2000);
    }
    takeScreenshot();
});