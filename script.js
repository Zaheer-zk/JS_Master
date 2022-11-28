// 'use strict';

// // HIgher Order Function

// const callback = function (str) {
//   return str.replace('/ /g', '').toLowerCase();
// };

// const temp = function (str, fn) {
//   console.log(`String :   ${fn(str)}`);
//   console.log(fn.name); // returns callback function name which is callback here
// };

// temp('Javascript', callback);

// //  Function return function

// const greetHelper = message => {
//   return name => {
//     console.log(`${message} ${name}`);
//   };
// };

// greetHelper('Hello')('Zaheer');

// // Call/ Bind method for using explicit this keyword

// const person = {
//   firstName() {
//     console.log(`${this.name} ${this.age}`);
//   },
// };

// const person1 = {
//   name: 'John',
//   age: 21,
// };

// // Syntax of call
// person.firstName.call(person1); // (followed Function, parameters)

// // Syntax of Bind
// const people = person.firstName.bind(person1); // (followed Function, parameters) this parameter will become default/ partially applied parameter for all the call of people function.
// people();

// // Partial Practice

// const addTAX = (rate, value) => value + value * rate;

// const addVAT = addTAX.bind(null, 0.23);

// console.log(addVAT(100));

// // Function returns a function

// const fun1 = (rate, value) => {
//   return () => {
//     console.log(`${rate} ${value}`);
//   };
// };

// // OR

// // const fun1 = (rate, value) => {
// //   return function () {
// //     console.log(`${rate} ${value}`);
// //   };
// // };

// fun1(0.1, 100)();

// ###################CHALLENGE

const poll = {
  question: 'Which is your favorite programming language',
  options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
  answers: new Array(4).fill(0), // [0,0,0,0]
  registerNewAnswer() {
    const ans = prompt(
      'What is your favourite programming language?\n' +
        '0: JavaScript\n' +
        '1: Python\n' +
        '2: Rust\n' +
        '3: C++\n' +
        '(Write option number)'
    );
    // console.log(ans);
    if (ans >= 0 && ans < 4) this.answers[ans]++;

    this.displayResults(this.answers);
  },

  displayResults(type = 'array') {
    if (type === 'array') {
      console.log(this.answers);
    } else {
      console.log(`Poll results are ${this.answers},`);
    }
  },
};

const ansPoll = document.querySelector('.poll');

ansPoll.addEventListener('click', poll.registerNewAnswer.bind(poll));

poll.displayResults.call({ answers: [1, 5, 3, 9, 6, 1] }, 'string');
poll.displayResults.call({ answers: [1, 5, 3, 9, 6, 1] });

// Yes, we completed successfully

// IIFE Immediately Invoke Function Expression

(function () {
  console.log(`Hello its a IIFE of old version`);
})();

// arrow functions of IIFE

(() => {
  console.log(`This one is Arrow Function`);
})();

// new IIFE

{
  const name = 'hello';
  console.log(`${name} this one is from newly created IIFE`);
}
