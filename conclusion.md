<div class="white-bg">
<h3>Conclusion</h3>

<ul>
<li class="fragment">Compilers are cleverer than we are
  <ul><li class="fragment">if they have the right information</li></ul>
</li>
<li class="fragment">Assembly isn't <em>that</em> scary
</ul>
</div>


<div class="white-bg">
<h3>Conclusion</h3>

<ul>
<li>Trust your compiler</li>
<li>Don't compromise readability</li>
<li class="fragment">Be aware of compiler limitations:
<ul>
<li>Aliasing</li>
<li>Visibility</li>
<li>Structure Layout</li>
<li>Algorithms</li>
</ul>
</li> 
</ul>
</div>


<div class="white-bg">
<h3>Conclusion - aliasing</h3>
<ul>
<li>Use type system</li>
<li>Pass values</li>
<li>Avoid "raw" loops</li>
<li>(`__restrict` as last resort)</li>
</ul>
</div>


<div class="white-bg">
<h3>Conclusion - visibility</h3>
<ul>
<li>"Unknown" calls inhibit optimisations</li>
<li>`[[gnu::pure]]`, `[[gnu::const]]`</li>
<li>Speculative devirtualisation</li>
<li>Link Time Optimization</li>
</ul>
</div>


<div class="white-bg">
<h3>Conclusion - the rest</h3>
<p>Compiler can't save you from bad algorithms or bad data layout</p>
</div>


<div class="white-bg">
<h3>Thanks</h3>
<div>
<p>
Thanks to the Compiler Explorer implementors,<br>in particular
<a href="https://rinconblanco.es/">Rubén</a> and <a href="https://twitter.com/partouf">Partouf</a>.
</p>
<p>Thanks to my <a href="https://patreon.com/mattgodbolt">Patreon</a> supporters.</p>
<p>All background images are by and <a href="https://www.flickr.com/photos/romainguy/">&copy; Romain Guy</a>
<br>licensed <a href="https://creativecommons.org/licenses/by-nc-sa/2.0/#">CC BY-NC-SA 2.0</a>. Thanks Romain!</p>
</div>
<h2 class="fragment">Go read some assembly!</h2>
</div>
