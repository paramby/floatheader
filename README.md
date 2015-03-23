# floatheader
As there are lots of plugins to fix/float the table header and they are also included with bunch of options and features. But sometime we do not need all those features, so here in I have written a simple and a light weight plugin which floats the table header. And but obvious we all know why we need floating headers, because our user hate to scroll up and down when there are numbers numbers of records on a page.

FloatHeader is a very light-weight jQuery plugin used to fix the table header. The logic is very simple so that you can tweak as per you requirement. Only a few lines of code, thats it; what else you need.

<h2>Changelog:</h2>
<h3>Version 1.0.1</h3>

    Fixed Vertical Table Header

<h3>Version 1.0.0</h3>

    First Release - Fixed Horizontal Table Header


Lets learn how to use it:-

Very first we need a table markups as shown below:-

<h3>Horizontal Headers</h3>
<table class="tblList" width="100%" cellpadding="2" cellspacing="2">
<thead>
<tr>
<th>
Header#1
</th>
<th>
Header#2
</th>
<th>
Header#3
</th>
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
<td>Column-7</td>
<td>Column-8</td>
<td>Column-9</td>
</tr>
<tr>
<td>Column-10</td>
<td>Column-11</td>
<td>Column-12</td>
</tr>
<tr>
<td>Column-13</td>
<td>Column-14</td>
<td>Column-15</td>
</tr>
<tr>
<td>Column-16</td>
<td>Column-17</td>
<td>Column-18</td>
</tr>
<tr>
<td>Column-19</td>
<td>Column-20</td>
<td>Column-21</td>
</tr>
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
<br>
<h3>Vertical Headers</h3>
<br>
    <table id="vtable" class="tblList">
      <tbody>
        <tr>
          <th>Header#1</th>
          <td>Column-2</td>
          <td>Column-3</td>
          <td>Column-4</td>
          <td>Column-5</td>
          <td>Column-6</td>
          <td>Column-7</td>
          <td>Column-8</td>
          <td>Column-9</td>
        </tr>
        <tr>
          <th>Header#2</th>
          <td>Column-11</td>
          <td>Column-12</td>
          <td>Column-13</td>
          <td>Column-14</td>
          <td>Column-15</td>
          <td>Column-16</td>
          <td>Column-17</td>
          <td>Column-18</td>
        </tr>
        <tr>
          <th>Header#3</th>
          <td>Column-20</td>
          <td>Column-21</td>
          <td>Column-22</td>
          <td>Column-23</td>
          <td>Column-24</td>
          <td>Column-25</td>
          <td>Column-26</td>
          <td>Column-27</td>
        </tr>
      </tbody>
    </table>

Add styles for table as in here:-
<pre>
<link rel="stylesheet" href="floatheader.css" />
</pre>

Add a reference of jQuery.js either using local path or using cdn.

<pre><script src="jquery.js"></script></pre>

Then Add floatheader.js plugin which is written as below:-

<pre><script src="jquery.floatheader.js"></script></pre>

And Now its time to call the floatheader as here below:-

    $(document).ready(function () {
        $("table.tblList").floatheader();
    });
