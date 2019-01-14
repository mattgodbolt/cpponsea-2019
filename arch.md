<div class="white-bg">
<h2>Compilers Are Awesome At...</h2>
<h2 class="fragment">Architectural Tricks!</h2>
</div>


```cpp
int countSetBits(unsigned a)
{
  int count = 0;
  while (a != 0)
  {
    count++;
    // clear bottom set bit
    a &= (a - 1);
  }
  return count;
}
```


```cpp
// setup
  #include <cstdint>

uint32_t switchBits(uint32_t x)
{
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


```cpp
bool isspc(char c)
{
    return c == ' '
        || c == '\r'
        || c == '\n'
        || c == '\t';
}
```


```x86asm
  movabs rax, 0x100002600  ; 0b100000000000000000010011000000000
                           ;   ^                  ^  ^^
                           ;   +- bit 32          |  ++- b10 & 9
                           ;              bit 13 -+
  shrx rax, rax, rdi       ; shift right 'rdi' times
  and eax, 1               ; pick the lowest set bit
```
