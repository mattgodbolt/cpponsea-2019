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

* Vague plan? TELL A STORY!
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