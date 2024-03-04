// EXAMPLE 1 - Convert an Object to an Array of Objects in JavaScript

const obj = {
  emp1: {
    id: 1,
    name: 'Alice',
  },
  emp2: {
    id: 2,
    name: 'Bob',
  },
};

const arrayOfObjects = Object.values(obj);

// 👇️ [ { id: 1, name: 'Alice' }, { id: 2, name: 'Bob' } ]
console.log(arrayOfObjects);

// ------------------------------------------------------------------

// // EXAMPLE 2 - Convert an Object to an Array of Objects using `Object.keys()`

// const obj = {
//   emp1: {
//     id: 1,
//     name: 'Alice',
//   },
//   emp2: {
//     id: 2,
//     name: 'Bob',
//   },
// };

// const arrayOfObjects = Object.keys(obj).map(key => obj[key]);

// // 👇️ [{id: 1, name: 'Alice'}, {id: 2, name: 'Bob'}]
// console.log(arrayOfObjects);

// ------------------------------------------------------------------

// // EXAMPLE 3 - Convert an Object to an Array of Objects using `Object.entries()`

// const obj = {
//   emp1: {
//     id: 1,
//     name: 'Alice',
//   },
//   emp2: {
//     id: 2,
//     name: 'Bob',
//   },
// };

// // [
// //   [ 'emp1', { id: 1, name: 'Alice' } ],
// //   [ 'emp2', { id: 2, name: 'Bob' } ]
// // ]
// console.log(Object.entries(obj));

// ------------------------------------------------------------------

// // EXAMPLE 4 - Convert an Object to an Array preserving the nested keys

// const obj = {
//   emp1: {
//     id: 1,
//     name: 'Alice',
//   },
//   emp2: {
//     id: 2,
//     name: 'Bob',
//   },
// };

// const withNestedKeys = Object.entries(obj).map(entry => {
//   return {[entry[0]]: entry[1]};
// });

// // [
// //   { emp1: { id: 1, name: 'Alice' } },
// //   { emp2: { id: 2, name: 'Bob' } }
// // ]
// console.log(withNestedKeys);
