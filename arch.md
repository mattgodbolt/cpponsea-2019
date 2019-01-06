<div class="white-bg">
<h2>Your Compiler Is Awesome at...</h2>
<h2 class="fragment">Architectural Tricks!</h2>
</div>


```cpp
int countSetBits(unsigned a)
{
  int count = 0;
  while (a != 0)
  {
    count++;
    // clear top set bit
    a &= (a - 1);
  }
  return count;
}
```


```cpp
//setup
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
        || c == '\n';
}
```
