## Maths
<!-- .element: class="white-bg" -->


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


### Vectorization

```cpp
// setup
  #include <vector>
  #include <numeric>
  using namespace std;
int sumSquared(
    const vector<int> &v) {
  int res = 0;
  for (auto i : v) 
    res += i * i;
  return res;
}
```

```cpp
// setup
  #include <vector>
  #include <numeric>
  using namespace std;
int sumSquared(
    const vector<int> &v) {
  return std::accumulate(
      begin(v), end(v), 0,
      [](auto x, auto y) {
        return x + y*y;
      }
}
```

### fast math?