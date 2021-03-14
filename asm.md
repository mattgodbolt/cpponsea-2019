### x86-64 Assembly Primer!
<!--- .element: class="white-bg" -->

```x86asm
  instr
  instr dest
  instr dest, source
  instr dest, source_1, source_2
```

```x86asm
  ret                           ; return
  inc rax                       ; increment "rax"
  mov edx, 1234                 ; set "edx" to the value 1234 
  mov eax, DWORD PTR [rcx]      ; set "eax" from memory address "rcx"  
  add rsi, rdi                  ; "rsi" += "rdi" 
  vpaddd ymm1, ymm2, ymm0       ; "ymm1" = "ymm2" + "ymm0"
```
<!-- .element: class="fragment" -->
