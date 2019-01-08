<div class="white-bg">
<h2>Your Compiler Is Awesome At...</h2>
<h2 class="fragment">Maths!</h2>
</div>


```cpp
int subtract(int x, int y)
{
  return x - y;
}
```


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


```cpp
int divide(int x, int y)
{
  return x / y;
}
```
