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
