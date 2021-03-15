<div class="white-bg">
<h2>Function Call Tidbits!</h2>
</div>


```cpp
/// clang1100:-O2 -march=haswell
unsigned identity(unsigned num); // just returns "num"

unsigned sumUpTo(unsigned x)
{
  auto total = 0u;
  for (auto i = 0u; i < x; ++i)
  {
    total += identity(i);
  }
  return total;
}
```


```cpp
/// clang1100:-O2 -march=haswell
// setup
  #include <numeric>
  using namespace std;

struct Func 
{
  int operator()(int x) 
  {
    return x; 
  }
};

unsigned sumUpTo(unsigned x, Func &func)
{
  auto total = 0u;
  for (auto i = 0u; i < x; ++i)
    total += func(i);
  return total;
}
```
