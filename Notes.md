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