<div class="white-bg">
<h2>Your Compiler Is Awesome at...</h2>
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


```x86asm
  vmovdqu ymm2, YMMWORD PTR [rax]   ; read 8 ints into ymm2
  vpmulld ymm0, ymm2, ymm2          ; square them
  vpaddd ymm1, ymm1, ymm0           ; accumulate into ymm1
```


<table class="registers white-bg">
    <thead>
    <tr>
        <th>Instruction</th>
        <th>255...128</th>
        <th>127...96</th>
        <th>95...64</th>
        <th>63...32</th>
        <th>31...0</th>
    </tr>
    </thead>
    <tbody>
    <tr>
        <th class="nobreak"><code>vmovdqu <span class="ymm2">ymm2</span>, [rax]</code></th>
        <td class="register ymm2 fragment" data-fragment-index="1">...</td>
        <td class="register ymm2 fragment" data-fragment-index="1">`v[i+3]`</td>
        <td class="register ymm2 fragment" data-fragment-index="1">`v[i+2]`</td>
        <td class="register ymm2 fragment" data-fragment-index="1">`v[i+1]`</td>
        <td class="register ymm2 fragment" data-fragment-index="1">`v[i+0]`</td>
    </tr>
    <tr>
        <th class="nobreak"><code>vpmulld <span class="ymm0">ymm0</span>, <span class="ymm2">ymm2</span>, <span class="ymm2">ymm2</span></code></th>
        <td class="register ymm0 fragment" data-fragment-index="2">...</td>
        <td class="register ymm0 fragment" data-fragment-index="2">`val[i+3]`<sup>2</sup></td>
        <td class="register ymm0 fragment" data-fragment-index="2">`val[i+2]`<sup>2</sup></td>
        <td class="register ymm0 fragment" data-fragment-index="2">`val[i+1]`<sup>2</sup></td>
        <td class="register ymm0 fragment" data-fragment-index="2">`val[i+0]`<sup>2</sup></td>
    </tr>
    <tr>
        <th class="nobreak"><code>vpaddd <span class="ymm1">ymm1</span>, <span class="ymm1">ymm1</span>, <span class="ymm0">ymm0</span></code></th>
        <td class="register ymm1 fragment" data-fragment-index="3">...</td>
        <td class="register ymm1 fragment" data-fragment-index="3">`res[3]+= val[3]`<sup>2</sup></td>
        <td class="register ymm1 fragment" data-fragment-index="3">`res[2]+= val[2]`<sup>2</sup></td>
        <td class="register ymm1 fragment" data-fragment-index="3">`res[1]+= val[1]`<sup>2</sup></td>
        <td class="register ymm1 fragment" data-fragment-index="3">`res[0]+= val[0]`<sup>2</sup></td>
    </tr>
    </tbody>
</table>



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
