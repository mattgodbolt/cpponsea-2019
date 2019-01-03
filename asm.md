# Assembly!?
<!-- .element: class="white-bg" -->


```x86asm
  <opcode> <destination>, <source>
```


```x86asm
  mov call jmp jz jnz jl jge
  cmp or and xor
  add sub mul div
```


```x86asm
  register
  qword ptr [register]
  qword ptr [register + offset]
  qword ptr [register + offset + register2 * (1,2,4,8)]
```


<div>
- `rax` (return value) 
- `rdi` (1st param) 
- `rsi` (2nd param) 
- `rdx` (3rd)
- `rbx` `rcx` `rbp` `r8-r15` `rsp`
- `xmm0` - `xmm15` (`ymm`... `zmm`...)
</div><!-- .element: class="white-bg" -->


<table id="registers" class="white-bg">
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
func:                       ; rdi is "val"   rsi is "ptr"
  mov eax, edi              ; eax = edi      res = val
  add eax, 1234             ; eax += 1234    res += 1234
  cmp dword ptr [rsi], eax  ; compare eax with *(int *)rsi...
  jne .skip                 ; ...if not equal, go to ".skip"
  xor eax, eax              ; eax = 0
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
