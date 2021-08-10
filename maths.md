<div class="white-bg">
<h2>Math Tidbits!</h2>
</div>


```cpp
int test(int x, int y)
{
  return x - y;
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


```cpp
int divideBy16(int a)
{
  // clearly can't trust the compiler to do this for me..
  return a >> 4;
}
```


```cpp
unsigned sumUpTo(unsigned x)
{
  auto total = 0u;
  for (auto i = 0u; i < x; ++i)
  {
    total += i;
  }
  return total;
}
```


```cpp
unsigned sumUpTo(unsigned x)
{
  // equivalent to x(x+1)/2
  return ((x - 1) * (x - 2) / 2) + x - 1;
}
```
