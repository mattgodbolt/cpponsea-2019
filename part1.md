<!-- .slide: data-background="./images/bg/walker.jpg" -->
<div>
# Hello!

I'm accidentally a verb <!-- .element: class="fragment" -->
</div><!-- .element: class="white-bg" -->


<!-- .slide: data-background="./images/bg/walker.jpg" -->
<div>
![CE logo](images/CE.svg) <!-- .element: class="no-border stretch white-bg" -->
</div><!-- .element: class="white-bg" -->


<!-- .slide: data-background="./images/bg/weave.jpg" -->
```cpp
// setup
  #include <vector>
  using namespace std;
int sum(const vector<int> &v)
{
  int total = 0; 
  for (size_t i = 0; i < v.size(); ++i)
  {
    total += v[i];
  }
  return total;
}
``` 
<!-- .element: class="w55" -->
```cpp
// setup
  #include <vector>
  using namespace std;
int sum(const vector<int> &v)
{
  int total = 0; 
  for (auto val : v) 
  {
    total += val;
  }
  return total;
}
```
<!-- .element: class="w45" -->


<!-- .slide: data-background="./images/bg/4340253422_53edf549b4_o.jpg" -->
# Assembly!?
<!-- .element: class="white-bg" -->


<!-- .slide: data-background="./images/bg/4340253422_53edf549b4_o.jpg" -->
<div>
### Registers
- `rax` (return value) 
- `rdi` (1st param) 
- `rsi` (2nd param) 
- `rdx` (3rd)
- `rbx` `rcx` `rbp` `r8-r15` `rsp`
- `xmm0` - `xmm15` (`ymm`... `zmm`...)
</div><!-- .element: class="white-bg" -->


<!-- .slide: data-background="./images/bg/4340253422_53edf549b4_o.jpg" -->
```x86asm
  mov eax, edi              ; eax = edi
  add eax, 1234             ; eax += 1234
  cmp eax, 5678             ; compare eax with 5678...
  jne label                 ; ...if not equal, go to "label"
  xor eax, eax              ; eax = 0
label:
  ret                       ; return
```


Demo here!
<!-- iframe src="http://localhost:10240/z/MDr-w8">/<iframe>


<!-- .slide: data-background="./images/bg/weave.jpg" -->
<div>
<h3>Why should I care?</h3>

<div>
"Premature optimization is the root of all evil." <!-- .element: class="quote" -->
</div>

<div>
Donald E. Knuth [Structured Programming With `go to` Statements](https://web.archive.org/web/20130731202547/http://pplab.snu.ac.kr/courses/adv_pl05/papers/p261-knuth.pdf)
</div><!-- .element: class="attribution" -->
</div><!-- .element: class="white-bg" -->


<!-- .slide: data-background="./images/bg/weave.jpg" -->
<div>
<div>
"We should forget about small efficiencies, say about 97% of the time: premature optimization is the root of
all evil. Yet we should not pass up our opportunities in that critical 3%."
<!-- element: class="quote" -->
</div>

<div>
Donald E. Knuth
[Structured Programming With `go to` Statements](https://web.archive.org/web/20130731202547/http://pplab.snu.ac.kr/courses/adv_pl05/papers/p261-knuth.pdf)
</div><!-- .element: class="attribution" -->
</div><!-- .element: class="white-bg" -->

<!-- highglight the "when debugging and maint" bit? Emphasise talk is about showing you can be concerned about perf but mostly leave it to compiler -->

---

### Why C++?

C vs C++? asm?

---

# Conclusion


### Conclusion

* Compilers are cleverer than we are
  * unless you're a compiler writer
* We should all know how to look at their output
* We can help the compiler along, if we understand what it's looking for


---

### notes

* Vague plan? TELL A STORY!
  * Hi! I'm me. I'm accidentally a verb
    * Backstory? Turbo version?
  * Why I love C++ and everything it brings
    * nod to other languages in this space
  * But...like most coders the bit I love the most is <1% of my job
  * Just getting stuff done!
  * Write code, test code, repeat. Check in. Handle compiler error. Repeat etc
  * Every now and then, some nugget of cool stuff needed
    * example? byteswapping? das's example showing my cool intrinsics/inline asm unnecessary?
  * Optimizing a FIX engine?
  * Conclusion
    * What do I want people to take away?
      * Trust the compiler
      * Knowing what it does is not required, but is FUN and instructive