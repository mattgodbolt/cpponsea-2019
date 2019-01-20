<div class="white-bg">
<h2>Compilers Are Awesome At...</h2>
<h2 class="fragment">Control Flow!</h2>
</div>


```cpp
/// g82:-O3 -march=haswell
// setup
  #include <array>
  using namespace std;
static int totalA = 0;
static int totalB = 0;
using IntArray = array<int, 32>;
void add(bool isA, 
         const IntArray &arr)
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
