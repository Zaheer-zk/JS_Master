'use strict';

// HIgher Order Function

const callback = function (str) {
  return str.replace('/ /g', '').toLowerCase();
};

const temp = function (str, fn) {
  console.log(`String :   ${fn(str)}`);
  console.log(fn.name); // returns callback function name which is callback here
};

temp('Javascript', callback);

//  Function return function

const greetHelper = message => {
  return name => {
    console.log(`${message} ${name}`);
  };
};

greetHelper('Hello')('Zaheer');
