/*
  У вас є функція merge, яка поєднує два об'єкти. 
  Використовуйте generics, щоб вказати, що ці об'єкти можуть бути будь-якого типу.
*/

// function merge (objA, objB) {
//   return Object.assign(objA, objB);
// }

function merge<T extends object, U extends object>(objA: T, objB: U): T & U {
  return Object.assign(objA, objB);
}

//? Приклад використання з конкретними типами
const mergedObject = merge(
  { name: "ObjectA", age: 25 },
  { city: "CityB", population: 100000 }
);

console.log(mergedObject);

export {};
