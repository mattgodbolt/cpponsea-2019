<div>
# Hello!

I'm accidentally a verb <!-- .element: class="fragment" -->
</div><!-- .element: class="white-bg" -->


<div>
![CE logo](images/CE.svg) <!-- .element: class="no-border stretch white-bg" -->
</div><!-- .element: class="white-bg" -->


## Compilers Are Amazing!!
<!-- .element: class="white-bg" -->


## What _is_ a compiler?
<!-- .element: class="white-bg" -->


```cpp
void LightObject(Renderable *object)
{
  auto world(object->GetMatrix());
  SetWorldMatrix(world);
  auto lMat = world * worldToLight;
  auto boundLs = TransformBounds(
      object->GetBounds(), lMat);
  if (!boundLs.Overlap(lightSphere))
    return;
  auto ms = pos * world.Invert();
  ...
```
<!-- .element: class="w50" -->

<div class="w50 fragment">
<img src="./images/swat-outdoor-scene.jpeg">
</div>


```cpp
template<typename T>
auto thingy(T &&t)
{
  auto blether = t.fronk();
  if (blether < T::min())
  {
    return t.badger();
  } else {
    return t.blenkinsop();
  }
}
```
<!-- .element: class="w40" -->

```
In instantiation of 'auto thingy(T&&) [with T = Marmoset]':
error: 'struct Marmoset' has no member named 'fronk'
   auto blether = t.fronk();
                  ~~^~~~~
error: 'min' is not a member of 'Marmoset'
   if (blether < T::min())
                 ~~~~~~^~
error: 'struct Marmoset' has no member named 'badger'
     return t.badger();
            ~~^~~~~~
...
```
<!-- .element: class="w60 fragment" -->


```cpp
int sumSquared(
    const vector<int> &v) {
  int res = 0;
  for (auto i : v) 
    res += i * i;
  return res;
}
```
<!-- .element: class="w45" -->

```x86asm
.L4:
  vmovdqu ymm2, YMMWORD PTR [rax]
  add rax, 32
  vpmulld ymm0, ymm2, ymm2
  vpaddd ymm1, ymm1, ymm0
  cmp rax, rdx
  jne .L4
```
<!-- .element: class="w55 fragment" -->
