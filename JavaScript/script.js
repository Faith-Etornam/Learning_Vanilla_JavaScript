let output;

const parent = document.querySelector('.parent')

output = parent.children

output = parent.children[0].innerText

output = parent.firstElementChild.innerText = 'Child One'

output = parent.nodeName

output = parent.childNodes[3].innerHTML

console.log(output)



// console.log(document.head.innerHTML);

// const words = ["coder", "programmer", "developer"];

// const capitalizeWords = words.map(word => word[0].toUpperCase() + word.slice(1))

// console.log(capitalizeWords)

// const numbers = [2, -30, 50, 20, -12, -9, 7];
// const positiveSum = numbers
//   .filter((number) => number >= 0)
//   .reduce((acc, curr) => (acc += curr));

// console.log(positiveSum);

// const people = [
//   {
//     firstName: "John",
//     lastName: "Doe",
//     email: "johngmail.com",
//     phone: "111-111-111",
//     age: 30,
//   },
//   {
//     firstName: "Jane",
//     lastName: "Poe",
//     email: "janegmail.com",
//     phone: "111-222-111",
//     age: 25,
//   },
//   {
//     firstName: "Bob",
//     lastName: "Zoe",
//     email: "bobgmail.com",
//     phone: "222-111-111",
//     age: 45,
//   },
//   {
//     firstName: "Sara",
//     lastName: "Smith",
//     email: "smithgmail.com",
//     phone: "111-111-333",
//     age: 19,
//   },
//   {
//     firstName: "Jose",
//     lastName: "Koe",
//     email: "josegmail.com",
//     phone: "111-555-333",
//     age: 23,
//   },
// ];

// const youngPeople = people
//   .filter((person) => {
//     return person.age <= 25;
//   })
//   .map((person) => ({
//     name: person.firstName + " " + person.lastName,
//     email: person.email,
//   }));

// console.log(youngPeople);

// const socials = ["twitter", "LinkedIn"];

// socials.forEach((item, index, arr) => {
//   console.log(item, index, arr);
// });

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const sum = numbers.reduce((acc, curr) =>
//   acc += curr, 0);
// console.log(sum);

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

// const evenNumbers = numbers.filter((number) => number % 2 === 0);
// console.log(evenNumbers);

// const person = {
//   name: "David",
//   age: 30,
// };

// for (const key in person) {
//   console.log(person[key]);
// }

// const items = ['apple', 'table', 'ps4']

// for (const item  in items) {
//   console.log(items[item])
// }

// const books = {
//   name: 'Faith'
// }

// for (let i = 1; i <= 100; i++) {
//   if (i % 3 === 0 && i % 5 === 0) {
//     console.log("FizzBuzz");
//   } else if (i % 3 === 0) {
//     console.log("Fizz");
//   } else if (i % 5 === 0) {
//     console.log("Buzz");
//   } else {
//     console.log(i);
//   }
// }

// let i = 0;

// while (i <= 20) {
//   console.log("Number " + i);
//   i++;
// }

// const posts = [];
// posts.length > 0 && console.log(posts[0])

// console.log(!isNaN(0))

// const user = {
//   name: 'Faith',
//   age: 20
// }

// console.log(Object.entries(user));

// function calculate(num1, num2, operator) {
//   let result;
//   switch (operator) {
//     case "+":
//       result = num1 + num2;
//       break;
//     case "-":
//       result = num1 - num2;
//       break;
//     case "*":
//       result = num1 * num2;
//     case "/":
//       result = num1 / num2;
//     default:
//       result = "Invalid operato r";
//   }
//   return result;
// }

// console.log(calculate(1, 2, "-"));

// console.log((function Area(length, width) {
//   return `The area is ${length * width}`
// })(20, 30))

// const minMax = (...arr) => ({ min: Math.min(...arr), max: Math.max(...arr) });

// console.log((minMax(1, 2, 3, 4, 5, 6)));

// function minMax(...arr){
//   console.log(arr)
//   console.log(...arr)
// }

// function getCelcius(fahrenheit) {
//   return `The temperature is ${(fahrenheit - 32) * 5 / 9} \xB0C`
// }

// const getCelcius = (fahrenheit) =>
//   `The temperature is ${((fahrenheit - 32) * 5) / 9} \xB0C`;

// console.log(getCelcius(32));

// function loginUser(user) {
//   return `The user ${user.name} with the id of ${user.id} is logged in`;
// }

// function getRandom(...arr) {
//   const randomIndex = Math.floor(Math.random() * arr.length);

//   const item = arr[randomIndex];
//   console.log(item);
// }

// getRandom(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

// const library = [
//   {
//     title: "title 1",
//     author: "author 1",
//     status: {
//       own: true,
//       reading: false,
//       read: false,
//     },
//   },
//   {
//     title: "title 2",
//     author: "author 2",
//     status: {
//       own: true,
//       reading: false,
//       read: false,
//     },
//   },
//   {
//     title: "title 3",
//     author: "author 3",
//     status: {
//       own: true,
//       reading: false,
//       read: false,
//     },
//   },
// ];

// const {title: firstBook} = library[0]

// const json = JSON.stringify(library)
// console.log(json)
// console.log(firstBook)

// for (let index = 0; index < library.length; index++) {
//     library[index].status.read = true
// }

// const person = {
//     name: "Faith",
//     age: 30
// }

// const str = JSON.stringify(person)
// const str2 = JSON.parse(str)
// console.log(str2)
// const numbers = [1,2,3,4,5]

// const [first, second, ...rest] = numbers

// console.log(first, second, rest)

// const arr = [1,2,3,4,5];

// arr.push(6)
// arr.unshift(0)
// arr.reverse()

// const arr1 = [1,2,3,4,5]
// const arr2 = [5,6,7,8,9,10]

// const arr3 = [...arr1, ...arr2]
// arr3.splice(5,1)
// console.log(arr3)
// console.log(arr)

// const obj1 = {a: 1, b: 2}
// const obj2 = {c: 1, d: 2}

// const obj3 = {...obj1, ...obj2}
// console.log(obj3)

// const firstName = null

// console.log(firstName, typeof firstName)

// console.log(person)

// const newPerson = person

// newPerson.name = "Joy"
// newPerson.age = 20
// console.log(newPerson)
// console.log(person)

// const myString = 'developer'
// myNewString = myString[0].toUpperCase() + myString.substring(1)
// console.log(myNewString)

// const words = "i am Spider-Man"
// const wordSplit = words.split(' ')
// for (let i = 0; i < wordSplit.length; i++) {
//     wordSplit[i] = wordSplit[i][0].toUpperCase() + wordSplit[i].substring(1)
// }
// const sentence = wordSplit.join(' ')

// console.log(sentence)

// const x = Math.floor(Math.random() * 100 + 1)
// const y = Math.floor(Math.random() * 50 + 1)

// const sumOutput = x + y
// const differenceOutput = x - y
// const productOutput = x * y
// const quotientOutput = x / y

// console.log(sumOutput)
// console.log(differenceOutput)
// console.log(productOutput)
// console.log(quotientOutput)

// d = new Date().toLocaleString('default', {weekday: 'long', month: 'long', year: 'numeric'})

// console.log(d)
