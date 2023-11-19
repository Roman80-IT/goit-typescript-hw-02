/*
  Є функція getPromise(), яка повертає проміс, що дозволяється в масив, що містить рядки та числа. 
  Доповніть цю функцію, використовуючи generics, щоб вона повертала правильний тип.
*/

// function getPromise () {
//   return new Promise((resolve) => {
//     resolve(["Text", 50]);
//   });
// }

// getPromise().then((data) => {
//   console.log(data);
// });

function getPromise<T>(): Promise<T> {
  return new Promise<T>((resolve) => {
    resolve(["Text", 50] as T); // вказано тип T тут
  });
}

//! Використовуємо generics T при виклику функції та в .then()
getPromise<[string, number]>() // вказано тип T тут
  .then((data) => {
    console.log(data); // data має тип [string, number]
  });

export {};
