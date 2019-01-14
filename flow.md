<div class="white-bg">
<h2>Your Compiler Is Awesome at...</h2>
<h2 class="fragment">Control Flow!</h2>
</div>


```cpp
// setup
/// g82:-O3 -march=haswell
  #include <array>
  using namespace std;
static int totalA = 0;
static int totalB = 0;
using IntArray = array<int, 32>;
void add(bool isA, const IntArray &arr)
{
  for (auto val : arr)
  {
    if (isA)
    {
      totalA += val;
    } else {
      totalB += val;
    }
  }
}
```


```cpp
// setup
/// g82:-O3 -march=haswell
  #include <array>
  using namespace std;

///hide
using IntArray = array<int, 32>;
struct Adder {
  int mTotalA = 0;
  int mTotalB = 0;
  void add(bool isA, const IntArray &arr);
};
///unhide

void Adder::add(bool isA, const IntArray &arr)
{
  for (auto val : arr)
  {
    if (isA)
    {
      mTotalA += val;
    } else {
      mTotalB += val;
    }
  }
}
```

### TODO
    
explain why
aliasing!
visibility https://godbolt.org/z/N32WaR argh