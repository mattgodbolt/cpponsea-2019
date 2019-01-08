# Notes

Pretty raw form notes here.

### From conversations with Phil

what would be ideal, I think (this is a "thinking out loud" hint - not a requirement) is if you could emphasis the two 
sides to this: (1) your compiler is doing a fantasic job of do all the complex heavy lifting for you, so you don't need 
to worry about it (b) ... except when you do - for experts that know what they're doing and need to know what the 
compiler is doing, being aware is useful and tools like CE give great insights. Everyone should take a look under the 
lid from time to time.

I think the underlying theme I'm trying to promote is bringing everyone together - so diversity, but including experts
and beginners alike. Cutting down any perceptions of elitism etc (which, other than some occasional exceptions, doesn't
really exist in our community - but I think the perception of it does)

### Some examples

* from Das: https://godbolt.org/z/epsbII
* examples of clever compiler: https://gcc.godbolt.org/z/-bbUcl (via dascandy too I think)
* Hana's CTRE?
* Loop unswitch? http://localhost:10240/#g:!((g:!((g:!((g:!((h:codeEditor,i:(fontScale:2.5,j:1,lang:c%2B%2B,source:'//+setup%0A++%23include+%3Carray%3E%0A++using+namespace+std%3B%0Aint+totalA+%3D+0%3B+%0Aint+totalB+%3D+0%3B+%0Avoid+add(bool+isA,+array%3Cint,+256%3E+%26arr)%0A%7B%0A++for+(auto+val+:+arr)%0A++%7B%0A++++if+(isA)+%7B%0A++++++totalA+%2B%3D+val%3B%0A++++%7D+else+%7B%0A++++++totalB+%2B%3D+val%3B%0A++++%7D%0A++%7D%0A%7D%0A'),l:'5',n:'0',o:'C%2B%2B+source+%231',t:'0')),k:50,l:'4',n:'0',o:'',s:0,t:'0'),(g:!((h:compiler,i:(compiler:g82,filters:(b:'0',binary:'1',commentOnly:'0',demangle:'0',directives:'0',execute:'1',intel:'0',trim:'0'),fontScale:3,lang:c%2B%2B,libs:!(),options:'-O2+-funswitch-loops',source:1,wantOptInfo:'1'),l:'5',n:'0',o:'x86-64+gcc+8.2+(Editor+%231,+Compiler+%231)+C%2B%2B',t:'0')),k:50,l:'4',m:100,n:'0',o:'',s:0,t:'0')),l:'2',m:32.55250403877221,n:'0',o:'',t:'0'),(g:!((h:cfg,i:(editorid:1,j:1,options:(navigation:'1',physics:'1'),pos:(___x:0,___y:-7),scale:1,selectedFn:'add(bool,+std::array%3Cint,+256ul%3E%26):'),l:'5',n:'0',o:'x86-64+gcc+8.2+Graph+Viewer+(Editor+%231,+Compiler+%231)',t:'0')),header:(),l:'4',m:67.44749596122779,n:'0',o:'',s:0,t:'0')),l:'3',n:'0',o:'',t:'0')),version:4
* Value types?!
  - http://localhost:10240/#g:!((g:!((g:!((h:codeEditor,i:(j:1,lang:c%2B%2B,source:'%23include+%3Ccstdint%3E%0A%23include+%3Ccstring%3E%0A%0Astruct+BuyOrder+%7B%0A++++char+ticker%5B4%5D%3B+%0A++++int32_t+price%3B%0A++++int32_t+quantity%3B%0A%7D%3B%0A%0Avoid+send(const+BuyOrder+%26)%3B%0A%0Avoid+buy(const+char+*ticker,+int+price,+int+quantity)+%7B%0A++++BuyOrder+bo%3B%0A++++strncpy(bo.ticker,+ticker,+sizeof(bo.ticker))%3B%0A++++bo.price+%3D+price%3B%0A++++bo.quantity+%3D+quantity%3B%0A++++send(bo)%3B%0A%7D%0A%0Avoid+test()+%7B%0A++++buy(%22GOOG%22,+500,+1000)%3B%0A%7D'),l:'5',n:'0',o:'C%2B%2B+source+%231',t:'0')),k:50,l:'4',n:'0',o:'',s:0,t:'0'),(g:!((g:!((h:compiler,i:(compiler:gsnapshot,filters:(b:'0',binary:'1',commentOnly:'0',demangle:'0',directives:'0',execute:'1',intel:'0',trim:'1'),lang:c%2B%2B,libs:!(),options:'-O3+-march%3Dhaswell',source:1),l:'5',n:'0',o:'x86-64+gcc+(trunk)+(Editor+%231,+Compiler+%231)+C%2B%2B',t:'0')),k:50,l:'4',m:50,n:'0',o:'',s:0,t:'0'),(g:!((h:compiler,i:(compiler:clang_trunk,filters:(b:'0',binary:'1',commentOnly:'0',demangle:'0',directives:'0',execute:'1',intel:'0',trim:'1'),lang:c%2B%2B,libs:!(),options:'-O3+-march%3Dhaswell',source:1),l:'5',n:'0',o:'x86-64+clang+(trunk)+(Editor+%231,+Compiler+%232)+C%2B%2B',t:'0')),header:(),l:'4',m:50,n:'0',o:'',s:0,t:'0')),k:50,l:'3',n:'0',o:'',t:'0')),l:'2',n:'0',o:'',t:'0')),version:4
  - could show this and how clever and see if anyone spots mistake, then segue into ... types...
  - http://localhost:10240/#z:OYLghAFBqd5QCxAYwPYBMCmBRdBLAF1QCcAaPECAKxAEZSAbAQwDtRkBSAJgCFufSAZ1QBXYskwgA5NwDMeFsgYisAag6yAwskEF8LAhuwcADAEE5CpSszqtOgsQXAjpi%2Bd3ERyAqp4iATwB5YixidQB2PnNVWNVkBCZwgjxkAGtMYg4AVh4AFhyAEQ0edRi4hQJZLgB9XwAHJwkStzjVSuq61QBHEVYUggCW8w4I4tlo9zMAN1Q8dFVBTBZ0CDQWXT9AkLD1LgA2AEphswJMAFt65jONTUH65aZz2wAVAIfSVXvH59UXphcsmM5iUTEEglUADUmMpbKNJm03g9VNMYSJMDUTvURAAjBipECtOKYAAeV1ShChaMwECRtmmh1UIBR1JqEAZkT4YyJsTpLNhEEZ6028NUxEwBDELH56MxE0ixRG3Imbjcnm8vgACk1MP9gJzRuNJuqfKoAIp9AyEAJ6g3KyYiQTOVTa1Jw2SFKmw26VT6uiR61wq8yO50W/rWuye6HerS%2B82WgY2gFByZqghMFLIFFzBY4wJrVAbXwJJKqABUWYyZBdOtUjTdn3DVsGPUT1sZ8J5W2CoUyqhxqBObU8inqAQgg4AdFXMp9ZzWnQAvTCoABmk9QM9S1cOx2DZja04bEij9Z1U9RAv3CLi096EdbGk9D5bAUv1MFw7iSxWm5vqrciM5izPMXyYLogoGuUsT5hO3BcAA4kEQSIQhfo6vCtAmDhhpNu2gzwtkuFjABSqFFIhyMNI2RSKQLDSCYdGoNImj8PwiyiOIcJcLItB0QQjGUVRaQgMR1FSHkdEMVITGkCxUh0YIIAmKQgmyZRpBwLAMCICgqCXHgDBzhQhaGcZxAgMAggsEw9SCAgqAEKQa5GWcxDKZOQmkDiChJAE0j8aQaDnM8BhBCwDABRppBYOcrDAMZ3n4OKPh4NMEHeaSmDICIZyBXRlSYAw3mOHg5wFVRzBsCg7G8IweA4spkBUag9QpEWylSAAtEEsiqN18XiAgz6JIIADuxUMEpXESHQVU0dJ3kKSSAAc%2BzdfseSqMAyDZhAjgiCwaSMhAuCECQex8Z8mgGfURn9nItCMmxvD8AJQl7qQoniSVkl0RV4kyXJClKSpamfVpukQEgIX3RZ5CUHDD2WaCbB1F4x0uW5mSeTi3m%2BbZxDRUFIVhQQEVRclFwJUlMUpTlKQZV1cnZbl%2BVSEFRV/XJZUVZzmnVewdUCPiTXwK17V4J10i9f1g1JAko1gpNDDTUIs2SM9Em0fRy3SGtG1bfEQuqAdmMnWb51EOET03XdKNXVwL0ix9GlfQgmBMGElALf9pCA6pwPMdIYOqepTFfT9ql/bIS0xaDEPu37XDxyDodJ5HVEZR50sMXkQA%3D
* Dervirt fail? http://localhost:10240/#g:!((g:!((g:!((h:codeEditor,i:(j:1,lang:c%2B%2B,source:'%23include+%3Ccstdint%3E%0Ausing+namespace+std%3B%0A%0Astruct+Colour+%7B%0A++++uint8_t+red%7B%7D%3B%0A++++uint8_t+green%7B%7D%3B%0A++++uint8_t+blue%7B%7D%3B%0A++++uint8_t+alpha%3D255%3B%0A%7D%3B%0A%0Astruct+Screen+%7B%0A++++virtual+~Screen()+%3D+default%3B%0A++++virtual+void+putPixel(int+x,+int+y,+Colour+c)+%3D+0%3B%0A%7D%3B%0A%0Astruct+FrameBuffer+final+:+Screen+%7B%0A++++static+constexpr+auto+Width+%3D+640%3B%0A++++static+constexpr+auto+Height+%3D+512%3B%0A++++Colour+buffer%5BHeight%5D%5BWidth%5D%3B%0A++++void+putPixel(int+x,+int+y,+Colour+c)+override+%7B%0A++++++++if+(x+%3E%3D+0+%26%26+x+%3C+Width+%26%26+y+%3E%3D+0+%26%26+y+%3C+Height)%0A++++++++++++buffer%5By%5D%5Bx%5D+%3D+c%3B++++++%0A++++%7D++++%0A%7D%3B%0A%0Avoid+horizLine(Screen+%26screen,+int+x0,+int+x1,+int+y,+Colour+c)+%7B%0A++++for+(int+x+%3D+x0%3B+x+%3C+x1%3B+%2B%2Bx)+%7B%0A++++++++screen.putPixel(x,+y,+c)%3B%0A++++%7D%0A%7D'),l:'5',n:'0',o:'C%2B%2B+source+%231',t:'0')),k:50,l:'4',n:'0',o:'',s:0,t:'0'),(g:!((h:compiler,i:(compiler:clang700,filters:(b:'0',binary:'1',commentOnly:'0',demangle:'0',directives:'0',execute:'1',intel:'0',trim:'1'),lang:c%2B%2B,libs:!(),options:'-O3',source:1),l:'5',n:'0',o:'x86-64+clang+7.0.0+(Editor+%231,+Compiler+%231)+C%2B%2B',t:'0')),k:50,l:'4',n:'0',o:'',s:0,t:'0')),l:'2',n:'0',o:'',t:'0')),version:4
  - also union/strcut Colour thing fails?
  - clear screen?
  - http://localhost:10240/#z:OYLghAFBqd5QCxAYwPYBMCmBRdBLAF1QCcAaPECAKxAEZSAbAQwDtRkBSAJgCFufSAZ1QBXYskwgA5NwDMeFsgYisAag6yAwskEF8LAhuwcADAEERghcFUsmAW0yCADkwmrd6DX3Omzu4hFkAlVNVAZRYnUAdh8zVQTVEQUCAA4AfRDiTC9YjmiAEW8/RKSUjJDgbMwWfL5C4vNS5IMK1QAjZUw6/KLZOObyzNUmBmcEJg0CrgBWGcazXoW/AKCQgGVkapYYgcSANzxiAhFR1QA/Te2IAEp1WQLVLAAzJhEGQ36Sg6OTs/3UHh0KpnCICAAFPAAD0wDAgKVUUNIqgRAE9kWEImJVMg7lNVCYFqVDsdTgwUQZVMBMAQAOpAggIW441AsXT3R6Er5NH6ks4I6kEAASmDwwAQBGZaDZIXxXLiS25i3Mq2CqgAYsQHJgeCJns9MFFngoziBVFdMDVdt8EromAQ8MgWTLMFDnFE3kRVPT0IyOaoAGwAFnlNo8BHtjuduld7pGYNQqhFYol/pmtC4RMSmMiHT1BuIHBmPGT4sMMyKxZ9jKLfT2CQBQJBYMhMLhCKRFJC6NC4VzuNUqH2huIQMw1p5pQSeGeqggUPuxgeBPUXAD3ADiPumm9DIQq/Xa9UqMXcoPG%2BP26TorLNzDU8S7XzhqLPFRtdfUNr/s4/QfYd6UowwFGlqyZO5pXZIcRzHXZVGyE5iB2MDvBiIpJy7KkaVLCUpVZKDh2IUc1DqeCaTEHYcM%2BHg0L8RUFXMRtgSUTAmGICBNW1XV9UNA9BC2S0WAxPtsQHHoMOeEg5zRf15UvDQd347YADpBSo25UP4fhUTxPIMISSSonhSkFzlVDTK0DwBJqVTQL3DS/y03goV0%2BspyUwTlNBCFoVhedkRMZFcSzICGgwpZfEKKQbkYaQZikUgWGkEwEtQaRNCcmjhDEdw5FoBKCGS6KYoAaxAGZAoYaQgwSpKpBS0g0qkBLBBAQLCvq6LSDgWAYEQFBUHsZw8AYQ1yEoNAhpGw0QGAQQ7GcQQEFQAhSGND5DVaiB2iK0h2hNYhUWkfLSEmxwDAAeRYBgjs60gsHsVhgFG3b8GyYI8GHVq7tdTBkDBSQpBOlJYV2ghR3sY6uuYNgUEyxg8HaVrIBi1BnAdfDpAAWgu2RVCxx7xAQKYJkEAB3WEGBayIJDoGKqqkeLEt2pqoVSAMseDKlkCdCBwZEFgSruCBcEIKS8uEqbRqiPK7gy3h%2BAKoqblK8rKuqhLIYq5m7qalq2tIDqUpinr%2Bsm4bpfGiBzem4gUBh4BMkCQW1pGghNsoHa7v2uxDqh07BvOggrpu17MEetgXrut6/odL7dt%2B/73f9kGGYa8G8EhoHoaeuGFd4BGkfgVH0bwTGpBxvGCbY5BiYeUmKYYKmhBpyRaHpuLapZ6Q2Y5rmlCeud%2BcF4XRaIGWuFkeheyl3i5C4OXMqVzqVdIBBWKwO3bliqQatILXArqhq9aEA2jeK0gyu1hnZC73XpGX42O6kLg7%2BPh/DeVmLCKsVkQCDIAA

## Random brainstorming

* Names (all terrible)
  * C++ for Everyone?
  * C++ is accessible (probably not)
  * puns on C++ on Sea?
    * The C under C++ (ugh)
    * C++, an ocean of possibilities
    * C++ for all Folks (-tone)
* Themes
  * All can use and benefit from C++
  * Who uses C++, and why?
    * Games
    * Finance
    * Big servers
    * Me?
  * C++ offers:
    * multiparadigm
    * performance
    * ability to write clean code and get amazing output
    * standing on shoulders of giants 
      * _amazing_ compilation
  * Optimization
    * (computers 20x faster, code 20x "worse"?)
    * What compiler can do
      * clever links here
    * what compiler can't do
      * tell you that you don't need to do what you're doing
      * change algorithm (except in super rare cases)
      * reorganise your data (SoA<->AoS) or move things about
      * make your design better
      * help you improve your compile time
  * Don't be afraid of peeking under the lid
    * crash course in asm
    * crash course in what the machine's doing?
      * cache/memory hand-wave

### Random interjection
Write a raytracer? Idiomatic but bad?

Benchmarks, whole program run time to illustrate where things matter.
Pass by value pass by reference etc. Probably too much work to do in this case.

## Vague plan? 
TELL A STORY!
* Hi! I'm me. I'm accidentally a verb
  * Backstory? Turbo version?
* Why I love C++ and everything it brings
  * nod to other languages in this space
* But...like most coders the bit I love the most is <1% of my job
  * Just getting stuff done!
  * Write code, test code, repeat. Check in. Handle compiler error. Repeat etc
* Every now and then, some nugget of cool stuff needed
  * example? byteswapping? das's example showing my cool intrinsics/inline asm unnecessary?
  * Optimizing a FIX engine?
* Conclusion
  * What do I want people to take away?
    * Trust the compiler
    * Knowing what it does is not required, but is FUN and instructive
    
    
# Optimization Tales, or How I Learned To Stop Worrying and (mostly) Trust the Compiler 
# "What everyone should know about what your compiler is doing for you"? (thanks Phil)
# "What everyone should know about how amazing your compiler is"?
# "What everyone should know what compilers can do"?
- Part -1
- started with asm, Z80, 6502 and ARM
- learned C to program a MUD
- slowly learned C++
  - on early ARM and then x86 (first job)
- spent many years arguing over ++i vs i++ - which is faster?
- thinking about registers, writing embedded trickery like
  - dreamcast code?
- while debugging realised compiler was doing some clever things but never thought to check them
- around the time of starting new job in trading, started exploring compiler output, CE was born
- So, after 5 years of staring at CE output, what can I trust my compiler to do?
- Part zero - basics
  - benchmarks? asm primer?
- Part one! What can I trust it to do?
  - ++i vs i++
  - hoisting variables? NAME YOUR VARS well, don't care about how they're then used later. Good example of this? My old
    code and some new style code?
  - range for, auto, all that?
  - multiply cases?
  - But I have these cool intrinsics! I love to use them!!
    - show compiler will take your code and generate the instructions
    - bit swap
    - clz
    - ctz
  - vectorizing
  - devirtualising?
  - LTO
- Part two, what can't it do?
  - preclude (all) copying objects, though move stuff mitigates
  - optimize virtual calls (much)
  - lay out memory for me
- Part three: the future!
  - `[[likely]]` (?)
- Call to action!
  - We code in C++ as it gives us the best of everything: multi-paradigm, high level, low-level and in principal total
    control
  - We have tools to take advantage of this control
  
  
```
struct v
{
    float x; float y; float z;
    inline const float operator[](int i) const {
        return *((float*)this + i);
    }
};
```
- maybe consider less UBey thing?
- old style code? `inline`? https://godbolt.org/z/cGJcJC shows compiler 
  
# What Everyone Should Know About How Amazing Compilers Are

We use them every day, but how often do we stop to think about the kinds of amazing
things our compilers do for us? Modern compilers are a feat of engineering and in this
talk Matt will demonstrate just a few of the very cunning things they do for you.
Matt will concentrate on the output of the compiler: the tricks they use to generate
efficient, optimized assembler code. 

Writing clear, readable code that's also efficient hinges on being able to trust your
compiler's code generator. By the end of this talk, you'll be be able to read assembly
well enough to be able to appreciate your compiler, and have an understanding of what 
it can - and can't - optimize for you. 

Although Matt has covered some of these topics before, there will be plenty of new
material to enjoy.

### About Matt

Matt is a C++ programmer and occasional verb. He loves writing efficient code and sharing his passion about how 
computers work under the hood. An engineer at Coinbase, he has previously worked at a trading firm, on mobile apps at 
Google, run a C++ tools company and spent more than a decade making console games. When not tinkering on Compiler 
Explorer, Matt enjoys working on emulators for old 8-bit computer hardware.


------------------

after dreaming...

* intro
* why do we write in C++
* we write code to compile, right?
* show daft code optimized
* show compiler is smarter
* oh, what else am I not thinking about?

---

* What are compilers NOT good at?
  * Mind-reading
    * if you call an external function, compiler has to assume worst
      - pure
      - non-pure
      - LTO mitigations
  * Ignoring what you specifically asked them to do
    * structure layout
    * virtual methods (although...)
    
# Script part one

My talk is what everyone should know!

In this talk I want you to learn a bit about what a fantastic job your compiler does taking your code
and making it into efficient machine code.

Who am I? Hi! I'm Matt Godbolt. I'm accidentally a verb.

I'm best known for a funny little website called Compiler Explorer. Of course, I'm about the only person who calls it
that, the majority of people I know refer to it by its domain name, "Godbolt". It's surreal to hear people saying things
like "Let's Godbolt that." or "Have you put it in Godbolt". I've even been in the same room as people saying these things
and had to shout "oy!" etcetc.

So why did I make CE?

In 2012 I was working for a low latency trading firm. In that environment, every nanosecond counts: the difference
between making money...and...not... can be as little as that. Understandably when you're writing code like that, you
scrutinise everything.

We were in the process of upgrading compilers and a colleague and I were discussing whether we could afford to enable
these fancy new C++11 features like range-for and lambdas. We'd been bitten in other languages by seemingly innocuous
improvements actually causing performance degradations.

We found ourselves comparing code like this. Of course in reality one should be using `std::accumulate` but you get
the idea from this. Of course we could benchmark but it was interesting to go to the source of truth itself and look
at what assembly code the compiler generated in each case.

A quick warning...there will be assembly in this presentation. Of course one can be an amazing C++ programmer and
not have to ever look at or think about the assembly code underneath everything. I love the fact that programming
in C++ lets us go up and down the stack <TODO> but I want to show you it can be fun to ride down to the lower levels.

<slides on asm>

<back to example, show how it comes out>

With CE we started to learn more about how the compiler worked, and developed intuition about what optimizations it
could, and could not do. 


----

Big List Of Possible Optims/Things

- multiplication
  - x * y
  - x * power two
  - x * constant
    - joke slide of the 65599
- division and modulus
  - x / y
  - x / pow2
  - x / constant
- count set bits
- sumUpTo
- calling external functions (fits into theme of what _can't_ compiler do)
- aliasing
  - contrived example
  - maxArray example (with overlap check?)
- heap elision
- ternary operator
- virtual methods
  - static devirt: https://gcc.godbolt.org/z/GEKoG8
    - clang needs -fstrict-vtable-pointers
- asan
- pass by reference/value
- variants
- non-virtual thunks (probably not)
- digit formatting? (probably not)
- hash table ispow2 stuff going on clang vs/gcc?
- UB stuff? looping (assert isOk for linked list)
- helping the compiler out (assume aligned, unreachable)
- auto & vs auto for big object (ref to index-prev.html apple thing)
- likely/unlikely
- architectures where no macro-op fusion: https://www.godbolt.org/z/7J5wfQ (clang counts up)
- examples of clever compiler: https://gcc.godbolt.org/z/-bbUcl (via dascandy too I think) (bswap)
- variables https://godbolt.org/z/O9wk0Z

---

# Time budget

00 - Intro
05 - Assembly
10 - Assembly
15 - Maths
20 - Maths
25 - Arch tricks
30 - Arch tricks
35 - ?
40 - ?
45 - ?
50 - ?
55 - Questions!!


---

```bash
$ objdump -d /usr/bin/node -Mintel --no-show-raw-insn  | grep -E '  [0-9a-f]+:' | awk '{print $2}' | sort | uniq -c | sort -n | tail -21
   7400 shl
   7498 shr
   8586 sar
   9605 movsxd
  21006 movzx
  23269 and
  30670 ret
  38042 sub
  55313 add
  57455 jne
  68471 xor
  73975 test
  87334 jmp
  87802 je
  91490 cmp
  98183 push
 105101 nop
 107515 pop
 138944 lea
 210898 call
 902490 mov

```


---
# Runthrough 6th Jan at home
- 1hr 15 but took some notes.
- did not have conclusion down, did not have any devirt/variable stuff in
- Probably took too long on the asm 101 bit