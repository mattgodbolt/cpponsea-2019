<div class="white-bg">
<h2>Compilers Are Awesome At...</h2>
<h2 class="fragment">Vectorization!</h2>
</div>


```cpp
// setup
  #include <vector>
  #include <numeric>
  using namespace std;
int sumSquared(const vector<int> &v)
{
  int res = 0;
  for (auto i : v)
  {
    res += i * i;
  }
  return res;
}
```


```cpp
// setup
  #include <vector>
  #include <numeric>
  using namespace std;
///hide
int sumSquared(const vector<int> &v)
{
  int res = 0;
  size_t index = 0;
  
  if (v.size() >= 8) {
    ///unhide
    int res_[] = {0,0,0,0,0,0,0,0};
    for (; index < v.size(); 
         index += 8)
    {
      for (size_t j = 0; j < 8; ++j)
      {
        auto val = v[index + j];
        res_[j] += val * val;
      }
    }
    res = res_[0] + res_[1] 
        + res_[2] + res_[3]
        + res_[4] + res_[5]
        + res_[6] + res_[7];
    ///hide
  }
  
  for (; index < v.size(); ++index)
    res += v[index] * v[index];
  
  return res;
}
```


```cpp
/// g82:-O3 -march=haswell
// setup
  #include <vector>
  #include <numeric>
  using namespace std;
template<typename T>
auto sumSquared(const T &v)
{
  return std::accumulate(
      begin(v), end(v),
      typename T::value_type(),
      [](auto x, auto y)
      {
        return x + y * y;
      });
}
```
