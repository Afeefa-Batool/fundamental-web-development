// function addNumbers(a: number, b: number): number {
//     return a + b;
// }

// const num1: number = 5;
// const num2: number = 7;

// console.log(`The sum of ${num1} and ${num2} is: ${addNumbers(num1, num2)}`);

// ===========================
// // Explicitly typed variable
// let age: number = 25;

// // Explicitly typed function parameter and return type
// function greet(name: string): string {
//     return `Hello, ${name}!`;
// }

// console.log(greet("Alice")); // Output: Hello, Alice!

// =========================
// let data:any;
// data = "A string";
// data = 42; // No error, as 'data' is of type 'any'

// console.log(data)
// =================boolean example===================

// let isAuthenticated: boolean = false;
// function login(username: string, password: string) {
   
//     if (username === "user1234" && password === "password123") {
//         isAuthenticated = true;
//         console.log("User successfully logged in!");
//     } else {
//         console.log("Invalid credentials.");
//     }
// }
// login("user1234", "password123");  
// ============================================
// 4. Optional Parameters
// function multiply(a: number, b?: number): number {
//     return b ? a * b : a;                     // If `b` is not provided, return `a`.
// }
// console.log(multiply(5));                 // Output: 5
// console.log(multiply(5, 2));             // Output: 10


// ==============================
// 6. Rest Parameters
// Rest parameters allow a function to accept an arbitrary number of arguments as an array.
// ...numbers: Combines all the arguments passed to the function into a single array named numbers
// Example 1:
// function sum(...numbers: number[]): number {
//     return numbers.reduce((total, num) => total + num, 0);
// }
// console.log(sum(1, 2, 3, 4, 5));        // Output: 15



// ==========================
// function applyOperation(a: number, b: number, operation: (x: number, y: number) => number): number {
//     return operation(a, b);
// }
// console.log(applyOperation(10, 5, (x, y) => x + y));                          // Output: 15
// console.log(applyOperation(10, 5, (x, y) => x * y));                           // Output: 50
// ==============================


function log(input: string | string[]): void {
    if (typeof input === "string") {
      console.log(`Log: ${input}`);
    } else {
      input.forEach(msg => console.log(`Log: ${msg}`));
    }
  }
  log("System started");                  // Output: Log: System started
  log(["User logged in", "Error occurred"]); // Multiple logs
  