function add(a: number, b: number): number {
  return a + b;
}

function isNumber(value: any): value is number {
  return typeof value === 'number';
}

function addSafe(a: any, b: any): number | string {
  if (isNumber(a) && isNumber(b)) {
    return add(a, b);
  } else {
    return "Type error: parameters must be numbers";
  }
}

let result1 = addSafe(10, 20); // Correct usage: Returns 30
let result2 = addSafe("hello", "world"); // Error handling: Returns 'Type error: parameters must be numbers'

console.log(result1); // Output: 30
console.log(result2); // Output: Type error: parameters must be numbers