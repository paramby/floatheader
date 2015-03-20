# floatheader
As there are lots of plugins to fix/float the table header and they are also included with bunch of options and features. But sometime we do not need all those features, so here in I have written a simple and a light weight plugin which floats the table header. And but obvious we all know why we need floating headers, because our user hate to scroll up and down when there are numbers numbers of records on a page.

FloatHeader is a very light-weight jQuery plugin used to fix the table header. The logic is very simple so that you can tweak as per you requirement. Only a few lines of code, thats it; what else you need.

Lets learn how to use it:-

Very first we need a table markups as shown below:-

 <table class="tblList">
      <thead>
        <tr>
          <th>Header#1</th>
          <th>Header#2</th>
          <th>Header#3</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Column-1</td>
          <td>Column-2</td>
          <td>Column-3</td>
        </tr>
        <tr>
          <td>Column-4</td>
          <td>Column-5</td>
          <td>Column-6</td>
        </tr>
        <tr>
        <tr>
          <td>Column-22</td>
          <td>Column-23</td>
          <td>Column-24</td>
        </tr>
        <tr>
          <td>Column-25</td>
          <td>Column-26</td>
          <td>Column-27</td>
        </tr>
      </tbody>
    </table>

Add styles for table as in here:-

/* primary styles */

html, body{
  margin:0;
  padding:0;
  height:100%;
  color: #000000;
}

/* required styles for plugin */
.maincontainer
{
   width:100%;
   overflow-x: hidden;
   overflow-y: auto;
   margin: 0 auto;
   position:relative;
   height:200px;
}

.headerclone
{
    width:100%;
   z-index: 9999;
   display:none;
   position:absolute;
}
/* yours table styles */
.tblList
{
    width: 100%;
    border-collapse: collapse;
    border-style: None;
}

.tblList thead th {
    background-color: #f7f7f7 !important;
    border-color: #cbc8c8 #cbc8c8 #e0e0e0 #cbc8c8;
    border-style: solid;
    border-width: 1px;
    font-size: 15px;
    font-weight: bold;
    height: 25px;
    padding: 4px 10px 3px;
    text-align: left;
    vertical-align: top;
}
.tblList tbody td {
    border-color: #cbc8c8 #cbc8c8 #e0e0e0 #cbc8c8;
    border-style: solid;
    border-width: 1px;
    font-size: 14px;
    font-weight: normal;
    padding: 4px 10px 6px;
    vertical-align: top;
}
.tblList tr.alt td {
    background-color: #FFFFFF !important;
}
.tblList tbody tr:nth-child(2n+1) {
    background-color: #F7F7F7 !important;
}
.tblList tbody tr:nth-child(2n) {
    background-color: #FFFFFF !important;
}

Add a reference of jQuery.js either using local path or using cdn.

Then Add floatheader.js plugin which is written as below:-

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
               $(".headerclone").find("table thead tr th").eq(i).css({"width":$(this).width()+"px"});           
               });

               // onscroll show/hide the cloned header
               $("div.maincontainer").bind("scroll", function () {
                   var offset = $(this).scrollTop();
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

And Now its time to call the floatheader as here below:-

    $(document).ready(function () {
        $("table.tblList").floatheader();
    });
