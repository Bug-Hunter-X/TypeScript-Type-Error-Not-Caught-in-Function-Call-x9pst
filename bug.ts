function add(a: number, b: number): number {
  return a + b;
}

let result = add("hello", "world"); // Type Error, but not caught by TypeScript
console.log(result); // This line should not execute, but it does