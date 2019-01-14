<div class="white-bg">
<h2>Your Compiler Is Less Awesome at...</h2>
<h2 class="fragment">Reading Minds</h2>
</div>


```cpp
/// g82:-O3 -march=haswell
// setup
  #include <vector>
  #include <numeric>
  using namespace std;

void incSquareCount(int count);

int sumSquared(const vector<int> &v)
{
  int res = 0;
  for (auto i : v) 
  {
    res += i * i;
    incSquareCount(1);
  }
  return res;
}
```


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


```cpp
// setup
/// g82:-O3 -march=haswell
  #include <vector>
  using namespace std;

///hide
struct Adder {
  int mTotal = 0;
  void add(const vector<int> &arr);
};
///unhide

void Adder::add(const vector<int> &arr)
{
  for (auto val : arr)
  {
      mTotal += val;
  }
}
```


```cpp
struct Magic {
  bool a;
  double b;
  int c;
  void *d;
};
```