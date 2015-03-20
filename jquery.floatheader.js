// FloatHeader v1.0 - jQuery floatheader plugin
// (c) 2015 Ram Yadav - criticaldevelopers.com
// License: http://www.opensource.org/licenses/mit-license.php
(function ($) {
$.fn.floatheader = function (options) {
// Default Settings
var settings = $.extend({
}, options);
// Apply Settings Variables
//
function fixheader(elem) {
// Add supportive wrappers to scrollable table
$(elem).wrap('<div class="maincontainer">');
$("div.maincontainer").prepend('<div class="headerclone"></div>');
$(elem).clone().appendTo(".headerclone")
$(".headerclone").find("table > tbody").remove();
// To get same width of header while cloning
$(elem).find("thead th").each(function(i){
//alert($(this).width());
$(".headerclone").find("table thead tr th").eq(i).css({"width":$(this).width()+"px"});
});
// onscroll show/hide the cloned header
$("div.maincontainer").bind("scroll", function () {
var offset = $(this).scrollTop();
//console.log(offset);
var headerheight = $(elem).find("thead th").eq(0).outerHeight();
if (offset >= headerheight) {
$(".headerclone").show();
$(".headerclone").css({ "top": offset + "px" });
}
else {
$(".headerclone").hide();
$(".headerclone").css({ "top": offset + "px" });
}
});
}
//
return fixheader(this);
};
} (jQuery));
