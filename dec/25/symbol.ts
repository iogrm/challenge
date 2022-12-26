let symbol1 = Symbol();
let symbol2 = Symbol('abc');
const symbol3 = Symbol();

console.log(symbol1 == symbol2);
console.log(symbol1 === symbol2);
console.log(symbol1 == symbol3);
console.log(symbol1 === symbol3);

type t = { firstname: string };
const o1: t = { firstname: 'ali' };
const o2: t = { firstname: 'mohammad' };
const o3: t = { firstname: 'mohammad' };

console.log(o1 == o2);
console.log(o1 === o2);
console.log(o2 == o3);
console.log(o2 === o3);

let obj1 = {
  symbol1: 'secret_code',
};

console.log(obj1.symbol1);

symbol1 = Symbol();

class SymbolClass {
  symbol1() {
    return 'SymbolClass';
  }
}

let obj = new SymbolClass();
let className = obj.symbol1();
console.log(className);
