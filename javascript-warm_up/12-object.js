#!/usr/bin/node
const myObject = {
  type: 'object',
  value: 12
};
console.log(myObject);

// Update the value property from 12 to 89
// const means the variable cannot be reassigned
// but you CAN still change properties inside the object
myObject.value = 89;

console.log(myObject);
