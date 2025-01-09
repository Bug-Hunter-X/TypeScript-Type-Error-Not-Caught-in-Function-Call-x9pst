# TypeScript Type Error Not Caught

This example demonstrates a scenario where TypeScript fails to catch a type error at compile time.  The `add` function is defined to accept two numbers, but the code calls it with strings.  TypeScript should ideally flag this as an error, but it compiles and runs, producing an unexpected result (string concatenation instead of addition).  This highlights a potential weakness in TypeScript's type checking, especially in cases with complex function calls or implicit type conversions.

The solution involves using type guards or stricter type checking to catch such errors before runtime.