## Variables
- price? value type

```cpp
// setup
  template<typename Type, typename Tag>
  struct Value {
    Type value;  
  };
  struct NotionalTag {};
  using Notional = Value<long, NotionalTag>;
  struct PriceTag {};
  using Price = Value<long, PriceTag>;
  struct QuantityTag {};
  using Quantity = Value<long, QuantityTag>;

Notional cost(Price price, Quantity quantity) {
  return Notional{price.value * quantity.value};
}

void buyShares(
    const char *symbol, 
    Price price, Quantity quantity);

void test() {

}
```

- things

---

## Control flow
- unrolling

---

---

### Not good at being psychic
- sum over vector? https://godbolt.org/z/gw4vDQ



### Not very good at telling you about layout
- struct layout


### Not (so) good at telling you missed opportunities
