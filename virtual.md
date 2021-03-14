<div class="white-bg">
<h2>Virtual Method Tidbits!</h2>
</div>


```cpp
/// clang700:-O2 -march=haswell
int square(int num);

int func(int x, int y) {
  int res = 0;
  for (int i = 0; i < x; ++i)
  {
    res += square(y);
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

void Adder::add(
    const vector<int> &arr)
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


```cpp
// setup
  #include <algorithm>
  #include <random>
  #include <vector>
  using namespace std;

void mySort(vector<int> &v) {
  mt19937 mt(random_device{}());
  while (!is_sorted(
      begin(v), end(v)))
  {
    shuffle(begin(v), end(v), mt);
  }
}
```