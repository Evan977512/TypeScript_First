// number, string, boolean, null, undefined, any, void, never, object, array, tuple, enum, alias
let a = 3;
a = 4;
let b = "hello";
let c = 4;
c = "hello"; // no error...?
c = true; // no error...?
// string or number?
let d = "eiifofof";
let e = ["apple", "banana", "orange"];
e.push("grape");
// e.push(4); // error
// functions
function addNumber(a, b) {
    return a + b;
}
addNumber(11, 42);
// control + shift + b to build
//# sourceMappingURL=index.js.map