dropdown-filters
===============

Convert &lt;select> boxes to Bootstrap's dropdown buttons

Based on <a href="https://github.com/jmrocela/experiments/blob/master/select.html">John Rocela's select experiment</a> and <a href="https://gist.github.com/2320588">Colin Faulkingham's fixed issue</a>.

Usage:

<i>HTML code:</i>
<pre><code>
<label for="selectA">Genre:</label>

<select id="selectA">
  <option value="1">Action</option>
	<option value="2">Comedy</option>
	<option value="3">Family</option>
</select>
</code></pre>

<i>jQuery initialization:</i>
<pre><code>
$(function() {
	$('select').dropdownFilters();
});
</code></pre>