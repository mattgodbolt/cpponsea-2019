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


<!-- .slide: data-background="./images/bg/4340253422_53edf549b4_o.jpg" -->
# Important note on performance
<!-- .element: class="white-bg" -->


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

### Maths
- multiplication
- division

---

### Variables
- price? value type
- things

---

### Control flow
- unrolling

---

### Architectural tricks
- count set bits
- bswap

---

### Not good at being psychic
- sum over vector? https://godbolt.org/z/gw4vDQ
- 


---

# Conclusion


### Conclusion

* Compilers are cleverer than we are
  * unless you're a compiler writer
* Trust the compiler. But don't be afraid to check its output
* We can help the compiler along, if we understand what it's looking for
