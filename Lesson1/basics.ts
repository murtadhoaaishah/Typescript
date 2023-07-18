// why learn typescript
// 1. It reduces error
// 2. It helps you code faster

//specifying types

let userName: string = "Harry";
let hasLoggedIn: boolean = true;
userName += "Jack";
console.log(userName);

let number: number = 5;
let myRegEx: RegExp = /foo/;

//Arrays

const names: string[] = userName.split("");
const myValues: Array<number> = [2, 4];

//Objects

interface Person {
  firstName: string;
  lastName: string;
}

const myPerson: Person = {
  firstName: "Jack",
  lastName: "Bauer",
};

const ids: Record<number, string> = {
  10: "a",
  20: "b",
};
ids[30] = "c";

//conditionals and expressions

if (ids[30] === "r") {
}

//loop
for (let i = 0; i < 10; i++) {
  console.log(i);
} // typescript infers type e.g it understands i is a number
