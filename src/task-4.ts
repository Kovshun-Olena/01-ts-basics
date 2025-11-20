import './style.css'

// function printUserInfo(name, age, email) {
//   console.log("Name:", name);
//   console.log("Age:", age);
//   if (email) {
//     console.log("Email:", email);
//   }
// }

type printUserInfo = (name: string, age: number, email?: string) => void;
const printUserInfo: printUserInfo = (name, age, email) => {
  console.log("Name:", name);
  console.log("Age:", age);
  if (email) {
    console.log("Email:", email);
  }
}

printUserInfo("Alice", 30);
printUserInfo("Bob", 25, "bob@mail.com");

