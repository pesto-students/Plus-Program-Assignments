// Define a function that creates and returns an object
// https://code.visualstudio.com/docs/nodejs/profiling#_analyzing-a-profile
// function createObject() {
//   // Create a new object
//   const object = { foo: "bar" };

//   // Log a message to the console indicating that an object has been created
//   console.log("Object created:", object);

//   // Return the object
//   return object;
// }
// // console.profile();

// // Call the createObject function to create a new object
// var myObject = createObject();

// // Set myObject to null, removing the reference to the object
// myObject = null;

// // Log a message to the console indicating that the reference has been removed
// console.log("Object reference removed");

// // Wait for a short period of time
// setTimeout(() => {
//   // At this point, the garbage collector may have run and removed the
//   // unused object from memory
//   console.log("Done waiting");
//   // console.profileEnd();
// }, 1000);
// console.log("Object reference removed");

// let myMap = new Map();

// function createObject() {
//   let obj = {};
//   myMap.set(obj, "some data");
//   // don't remove obj from myMap
//   return obj;
// }

// let obj1 = createObject();
// let obj2 = createObject();
// let obj3 = createObject();

// // assume we no longer need obj2
// obj2 = null;
// // at this point, obj2 is no longer referenced and can be garbage collected,
// // but it is still stored in myMap, preventing it from being garbage collected

// // if we continue to create and store objects in myMap without removing them,
// // we may eventually run out of memory due to the accumulation of unreferenced objects

// setTimeout(() => {
//   // At this point, the garbage collector may have run and removed the
//   // unused object from memory
//   console.log("Done waiting");
//   console.log(obj2);
//   console.profileEnd();
// }, 1000);
// console.log(myMap);

let myWeakMap = new WeakMap();

function createObject() {
  let count = 0;
  let obj = {};
  myWeakMap.set(obj, "some data");
  // don't remove obj from myWeakMap
  return obj;
}

let obj1 = createObject();
let obj2 = createObject();
let obj3 = createObject();

// assume we no longer need obj2
obj2 = null;
setTimeout(() => {
  // At this point, the garbage collector may have run and removed the
  // unused object from memory
  console.log("Done waiting");
  console.log(myWeakMap);
  // console.profileEnd();
}, 10000);
console.log(myWeakMap);

// at this point, obj2 is no longer referenced and can be garbage collected,
// and because obj2 is only stored in myWeakMap with a weak reference,
// it is also removed from myWeakMap

// we can continue to create and store objects in myWeakMap without worrying about
// memory leaks, because any objects that are no longer referenced will be automatically
// removed from the WeakMap by the garbage collector
