// number, string, boolean, null, undefined, any, void, never, object, array, tuple, enum, alias

let a: number = 3;
a = 4;
let b: string = "hello";

let c: any = 4;
c = "hello"; // no error...?
c = true; // no error...?

// string or number?
let d: number | string = "eiifofof";

let e: string[] = ["apple", "banana", "orange"];
e.push("grape");
// e.push(4); // error

// functions
function addNumber(a: number, b: number): number {
  return a + b;
}
addNumber(11, 42);

// control + shift + b to build
