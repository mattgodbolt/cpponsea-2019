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

---

## Maths


### Multiplication

```cpp
int multiply(int x, int y)
{
  return x * y;
}
```


```cpp
int mulBy65599(int a)
{
  return (a << 16) + (a << 6) - a;
  //       ^          ^
  //     a * 65536    |
  //                a * 64
  // 65536a + 64a - 1a = 65599a
}
```


### Division & Modulus

```cpp
int divide(int x, int y)
{
  return x / y;
}
```


```cpp
struct DivideResult
{
  int quotient;
  int remainder;
};

DivideResult divide(int x, int y)
{
  return { 
    x / y, 
    x % y 
  };
}
```


## Variables
- price? value type
- things

---

## Control flow
- unrolling

---

## Architectural tricks


### Counting set bits
```cpp
int countSetBits(unsigned a)
{
  int count = 0;
  while (a != 0)
  {
    count++;
    a &= (a - 1); // clear top set bit
  }
  return count;
}
```


### Switching byte order
```cpp
//setup
  #include <cstdint>

uint32_t switchBits(uint32_t x) {
    auto first = x & 0xff;
    auto second = (x >> 8) & 0xff;
    auto third = (x >> 16) & 0xff;
    auto fourth = (x >> 24) & 0xff;
    return 
        (first << 24)
      | (second << 16)
      | (third << 8)
      | fourth;
}
```
---

### Not good at being psychic
- sum over vector? https://godbolt.org/z/gw4vDQ


### Not very good at telling you about layout
- struct layout


### Not (so) good at telling you missed opportunities

---

# Conclusion


### Conclusion

* Compilers are cleverer than we are
  * unless you're a compiler writer
* Trust the compiler. But don't be afraid to check its output
* We can help the compiler along, if we understand what it's looking for
