<div class="white-bg">
<h2>Your Compiler Is Still Pretty Awesome at...</h2>
<h2 class="fragment">Virtual Methods!</h2>
</div>


```cpp
/// g82:-O3 -march=haswell
// setup
  #include <vector>
  #include <numeric>
  using namespace std;

struct Func 
{
  int operator()(int x) 
  {
    return x*x; 
  }
};

int sumFunc(const vector<int> &v, 
            Func &func)
{
  int res = 0;
  for (auto i : v) res += func(i);
  return res;
}
```
