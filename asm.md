# Assembly!?
<!-- .element: class="white-bg" -->


### Assembly!
<!--- .element: class="white-bg" -->

```x86asm
  opcode
  opcode destination
  opcode destination, source
  opcode destination, source1, source2
```

```x86asm
  ret                           ; return
  inc rax                       ; increment "rax"
  mov edx, 1234                 ; set "edx" to the value 1234 
  add rsi, rdi                  ; "rsi" += "rdi" 
  vpaddd ymm1, ymm2, ymm0       ; "ymm1" = "ymm2" + "ymm0"
```
<!-- .element: class="fragment" -->


### Opcodes
<!--- .element: class="white-bg" -->

<div class="w30 white-bg"><ul class="instr fragment highlight-current-red">
<li>`mov`</li>
<li>`movzx`</li>
<li>`movsxd`</li>
<li>`lea`</li>
</ul><ul class="instr fragment highlight-current-red">
<li>`call`</li>
<li>`ret`</li>
<li>`jmp`</li>
</ul></div>

<div class="w30 white-bg"><ul class="instr fragment highlight-current-red">
<li>`push`</li>
<li>`pop`</li>
</ul><ul class="instr fragment highlight-current-red">
<li>`cmp`</li>
<li>`test`</li>
<li>`je`</li>
<li>`jne`</li>
</ul></div>

<div class="w30 white-bg"><ul class="instr fragment highlight-current-red">
<li>`and`</li>
<li>`xor`</li>
<li>`add`</li>
<li>`sub`</li>
<li>`shl`</li>
<li>`shr`</li>
<li>`sar`</li>
</ul></div>

<div><br><br></div>

<div class="fragment white-bg">
And many, many more...
</div>


### Source / Destination
<!--- .element: class="white-bg" -->

```x86asm
  register                          ; e.g. rax, rbx, ecx...
  <size> ptr [register]             ; e.g. DWORD PTR [rax]
  <size> ptr [register + offset]    ; e.g. BYTE PTR [rcd + rsi]
  <size> ptr [register + offset + register2 * (1,2,4,8)]
```

```x86asm
  add eax, dword ptr [rdi + 12 + rsi * 4] 
                                ; eax += *(int *)(rdi + 12 + rsi * 4)
```
<!-- .element: class="fragment" -->


### Registers
<!--- .element: class="white-bg" -->

<div class="white-bg">
<ul>
<li>`rax` (return value)</li> 
<li>`rdi` (1st param)</li> 
<li>`rsi` (2nd param)</li> 
<li>`rdx` (3rd param)</li>
<li>`rbx` `rcx` `rbp` `r8-r15` `rsp`</li>
<li>`xmm0-15` (`ymm0-15`... `zmm0-31`... `k0-7`)</li>
</ul></div>


<table class="registers white-bg">
    <thead>
    <tr>
        <th>63...56</th>
        <th>55...48</th>
        <th>47...40</th>
        <th>39...32</th>
        <th>31...24</th>
        <th>23...16</th>
        <th>15...8</th>
        <th>7...0</th>
    </tr>
    </thead>
    <tbody>
    <tr>
        <td colspan="8" class="register rax">rax</td>
    </tr>
    <tr>
        <td colspan="4" class="regnote">(zeroed on write)</td>
        <td colspan="4" class="register eax">eax</td>
    </tr>
    <tr>
        <td colspan="6"></td>
        <td colspan="2" class="register ax">ax</td>
    </tr>
    <tr>
        <td colspan="6"></td>
        <td colspan="1" class="register ah">ah</td>
        <td colspan="1"></td>
    </tr>
    <tr>
        <td colspan="7"></td>
        <td colspan="1" class="register al">al</td>
    </tr>
    </tbody>
</table>


```cpp
///clang700:-O2 -march=haswell
int func(int val, const int *ptr)
{
  int res = val + 1234;
  if (res == *ptr)
  {
    res = 0;
  }
  return res;
}
``` 

```x86asm
func:                       ; edi is "val"   rsi is "ptr"
  mov eax, edi              ; eax = edi      res = val
  add eax, 1234             ; eax += 1234    res += 1234
  cmp dword ptr [rsi], eax  ; compare eax with *(int *)rsi...
  jne .skip                 ; ...if not equal, go to ".skip"
  mov eax, 0                ; eax = 0
.skip:
  ret                       ; return
```
<!-- .element: class="fragment" -->


<!-- .slide: data-background="./images/bg/weave.jpg" -->
# Important note on performance
<!-- .element: class="white-bg" -->


<!-- .slide: data-background="./images/bg/weave.jpg" -->
<div class="white-bg">
<div>
"Premature optimization is the root of all evil." <!-- .element: class="quote" -->
</div>

<div class="attribution">
Donald E. Knuth [Structured Programming With `go to` Statements](https://web.archive.org/web/20130731202547/http://pplab.snu.ac.kr/courses/adv_pl05/papers/p261-knuth.pdf)
</div>
</div>


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
