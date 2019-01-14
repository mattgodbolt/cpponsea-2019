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


## Variables
- price? value type

```cpp
// setup
  template<typename Type, typename Tag>
  struct Value {
    Type value;  
  };
  struct NotionalTag {};
  using Notional = Value<long, NotionalTag>;
  struct PriceTag {};
  using Price = Value<long, PriceTag>;
  struct QuantityTag {};
  using Quantity = Value<long, QuantityTag>;

Notional cost(Price price, Quantity quantity) {
  return Notional{price.value * quantity.value};
}

void buyShares(
    const char *symbol, 
    Price price, Quantity quantity);

void test() {

}
```

- things

---

## Control flow
- unrolling

---

---

### Not good at being psychic
- sum over vector? https://godbolt.org/z/gw4vDQ



### Not very good at telling you about layout
- struct layout


### Not (so) good at telling you missed opportunities

---



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


---



```x86asm
  vmovdqu ymm2, YMMWORD PTR [rax]   ; read 8 ints into ymm2
  vpmulld ymm0, ymm2, ymm2          ; square them
  vpaddd ymm1, ymm1, ymm0           ; accumulate into ymm1
```


<table class="registers white-bg">
    <thead>
    <tr>
        <th>Instruction</th>
        <th>255...128</th>
        <th>127...96</th>
        <th>95...64</th>
        <th>63...32</th>
        <th>31...0</th>
    </tr>
    </thead>
    <tbody>
    <tr>
        <th class="nobreak"><code>vmovdqu <span class="ymm2">ymm2</span>, [rax]</code></th>
        <td class="register ymm2 fragment" data-fragment-index="1">...</td>
        <td class="register ymm2 fragment" data-fragment-index="1">`v[i+3]`</td>
        <td class="register ymm2 fragment" data-fragment-index="1">`v[i+2]`</td>
        <td class="register ymm2 fragment" data-fragment-index="1">`v[i+1]`</td>
        <td class="register ymm2 fragment" data-fragment-index="1">`v[i+0]`</td>
    </tr>
    <tr>
        <th class="nobreak"><code>vpmulld <span class="ymm0">ymm0</span>, <span class="ymm2">ymm2</span>, <span class="ymm2">ymm2</span></code></th>
        <td class="register ymm0 fragment" data-fragment-index="2">...</td>
        <td class="register ymm0 fragment" data-fragment-index="2">`v[i+3]`<sup>2</sup></td>
        <td class="register ymm0 fragment" data-fragment-index="2">`v[i+2]`<sup>2</sup></td>
        <td class="register ymm0 fragment" data-fragment-index="2">`v[i+1]`<sup>2</sup></td>
        <td class="register ymm0 fragment" data-fragment-index="2">`v[i+0]`<sup>2</sup></td>
    </tr>
    <tr>
        <th class="nobreak"><code>vpaddd <span class="ymm1">ymm1</span>, <span class="ymm1">ymm1</span>, <span class="ymm0">ymm0</span></code></th>
        <td class="register ymm1 fragment" data-fragment-index="3">...</td>
        <td class="register ymm1 fragment" data-fragment-index="3">`res[3]+ v[3]`<sup>2</sup></td>
        <td class="register ymm1 fragment" data-fragment-index="3">`res[2]+ v[2]`<sup>2</sup></td>
        <td class="register ymm1 fragment" data-fragment-index="3">`res[1]+ v[1]`<sup>2</sup></td>
        <td class="register ymm1 fragment" data-fragment-index="3">`res[0]+ v[0]`<sup>2</sup></td>
    </tr>
    </tbody>
</table>
