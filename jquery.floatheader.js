// FloatHeader v1.0 - jQuery floatheader plugin
// (c) 2015 Ram Yadav - criticaldevelopers.com
// License: http://www.opensource.org/licenses/mit-license.php

(function ($) {
    $.fn.floatheader = function (options) {
        // Default Settings
        var settings = $.extend({
            vertical: false
        }, options);
        // Apply Settings Variables
        //
        function fixheader(elem) {
            if (settings.vertical) {
                $(elem).wrap('<div class="vmaincontainer">');
                $("div.vmaincontainer").prepend('<div class="vheaderclone"></div>');
                $(elem).clone().appendTo(".vheaderclone");
                $(".vheaderclone").find("table tr td").remove();

                // To get same width/height of header while cloning
                $(elem).find("tr th").each(function (i) {
                    $(".vheaderclone").find("table tr th").eq(i).css({ "height": $(this).height() + "px" });
                });
                $("div.vmaincontainer").bind("scroll", function () {
                    var offset = $(this).scrollLeft();
                    var headerwidth = $(elem).find("tr th").eq(0).outerWidth();
                    $(".vheaderclone").show();
                    $(".vheaderclone").css({ "left": offset + "px" });
                });
            }
            else {
                // Add supportive wrappers to scrollable table
                $(elem).wrap('<div class="hmaincontainer">');
                $("div.hmaincontainer").prepend('<div class="hheaderclone"></div>');
                $(elem).clone().appendTo(".hheaderclone");
                $(".hheaderclone").find("table > tbody").remove();

                // To get same width/height of header while cloning
                $(elem).find("thead th").each(function (i) {
                    $(".hheaderclone").find("table thead tr th").eq(i).css({ "width": $(this).width() + "px" });
                });

                // onscroll show/hide the cloned header
                $("div.hmaincontainer").bind("scroll", function () {
                    var offset = $(this).scrollTop();
                    var headerheight = $(elem).find("thead th").eq(0).outerHeight();
                    $(".hheaderclone").show();
                    $(".hheaderclone").css({ "top": offset + "px" });
                });
            }
        }
        //
        return fixheader(this);
    };
}(jQuery));
