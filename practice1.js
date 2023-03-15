// Arrow Function:
const sumA = (x, y) => {
  return x * y;
}
let sum2 = sumA(2, 3);
document.getElementById("box1").innerHTML = sum2;

// We can also aceess array elements like this...
let data1 = ["Peter", "Anil", "Sam", "Neha"];
//use qomas to access next element
let [, y, z, a] = data1;
console.log(y, z, a);

// Arguments Object
function addFunction() {
  if (arguments.length === 0) {
    console.log("No arguments passed...");
  } else {
    let sum = 0;
    for (let i = 0; i < arguments.length; i++) {
      sum = sum + arguments[i];
    }
    console.log(sum);
  }
}
addFunction(5, 10, 15);

// Rest operator
function addition(name, course, ...arguments) {
  let sum = 0;
  for (let i in arguments) {
    sum = sum + arguments[i];
  }
  console.log(sum);
  console.log(`I'm ${name} and I study ${course}`);
}
addition("Yahoo Baba", "B.Tech", 50, 100, 200, 300, 400);
addition("Ram Kumar", "M.Sc.", 50, 100, 200);

// Spread Operator
// Important Note: spread operators can be used on both Objects and arrays
//spread operator is used at the time of calling while rest operator is used as parameter
function addition2(name, course, ...arguments) {
  let sum5 = 0;
  for (let i in arguments) {
    sum5 = sum5 + arguments[i];
  }
  console.log(sum5);
  console.log(`I'm ${name} and I study ${course}`);
}
// We can put nemeric values in a separate variable and then spread operator can be used
let arr1 = [1, 2, 3, 4, 5];
let arr2 = [6, 7, 8];
addition2("Riaz Khan", "Biology", ...arr1); //this is spread operator
addition2("Shyam", "Physics", ...arr2); //this is spread operator

// Async / Await :
async function test() {
  return "Hello World";
}

test().then((response) => {
  console.log(response);
});

// accessing object values
person = { name: "John", age: 31, city: "New York" };
console.log(person["name"]);

// The window object / BOM / Browser Object Model:
/* All the global variables become window properties and all the global functions
become window methods */

let innHeight = window.innerHeight;
let innWidth = window.innerWidth;
document.write("<h1>The inner height of this window is " + innHeight + "</h1><br>");
document.write("<h1>The inner width of this window is " + innWidth + "</h1><br>");

let scrHeight = window.screen.width;
document.write("<h1>The screen height of user screen is  " + scrHeight + "</h1><br>");

let clrDepth = window.screen.colorDepth;
document.write("<h1>The color depth of user screen is " + clrDepth + "</h1><br>");

// Window location object
let loc = window.location.href;
document.write("<h1>The user location href is " + loc + "</h1><br>");
let hos = window.location.host;
document.write("<h1>The user location host is " + hos + "</h1><br>");
let hos_n = window.location.hostname;
document.write("<h1>The user location hostname is " + hos_n + "</h1><br>");
let path_n = window.location.pathname;
document.write("<h1>The user location pathname is " + path_n + "</h1><br>");
let proto = window.location.protocol;
document.write("<h1>The user location protocol is " + proto + "</h1><br>");
// let assi = window.location.assign("https://www.w3schools.com/js/js_window_location.asp");
let hist = window.history.back();
let forw = window.history.forward();


// Switch Statement:
let day;
switch (new Date().getDay()) {
  case 0:
    day = "Sunday";
    break;
  case 1:
    day = "Monday";
    break;
  case 2:
    day = "Tuesday";
    break;
  case 3:
    day = "Wednesday";
    break;
  case 4:
    day = "Thursday";
    break;
  case 5:
    day = "Friday";
    break;
  case 6:
    day = "Saturday";
}
// Now we can print the day variable
document.write("<h2>Today is " + day + "</h2>");



















