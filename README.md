dropdown-filters
===============

Convert &lt;select> boxes to Bootstrap's dropdown buttons

Based on <a href="https://github.com/jmrocela/experiments/blob/master/select.html">John Rocela's select experiment</a> and <a href="https://gist.github.com/2320588">Colin Faulkingham's fixed issue</a>.

Usage:

<i>HTML code:</i>
<pre><code>&lt;label for="selectA">Genre:&lt;/label>

&lt;select id="selectA">
  &lt;option value="1">Action&lt;/option>
	&lt;option value="2">Comedy&lt;/option>
	&lt;option value="3">Family&lt;/option>
&lt;/select>
</code></pre>

<i>jQuery initialization:</i>
<pre><code>$(function() {
	$('select').dropdownFilters();
});
</code></pre>