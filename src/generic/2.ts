/*
  У вас є тип AllType. Існує функція compare, яка приймає два об'єкти. Ці об'єкти містять поля AllType. 
  Ваше завдання – використовувати Pick та generics для вказівки, що поля цих об'єктів належать AllType.
  Функція compare повинна повертати AllType.
*/

//! Умова
// type AllType = {
//   name: string;
//   position: number;
//   color: string;
//   weight: number
// }

// function compare (top, bottom): AllType {
//   return {
//     name: top.name,
//     color: top.color,
//     position: bottom.position,
//     weight: bottom.weight,
//   }
// }

type AllType = {
  name: string;
  position: number;
  color: string;
  weight: number;
};

//! 1-й Варіант
// function compare<T, K>(
//   top: Pick<AllType, "name" | "color">,
//   bottom: Pick<AllType, "position" | "weight">
// ): AllType {
//   return {
//     name: top.name,
//     color: top.color,
//     position: bottom.position,
//     weight: bottom.weight,
//   };
// }

//! 2-й Варіант

function compare<T extends AllType, K extends AllType>(
  top: Pick<T, keyof AllType>, // Параметр `top` приймає об'єкт типу T та обмежується полями AllType
  bottom: Pick<K, keyof AllType> // Параметр `bottom` приймає об'єкт типу K та обмежується полями AllType
): AllType {
  // Повертає об'єкт типу AllType, який складається з вибраних полів з top та bottom
  return {
    name: top.name,
    color: top.color,
    position: bottom.position,
    weight: bottom.weight,
  };
}

// Приклад використання функції compare з вказанням типів T та K
const result = compare(
  { name: "TopObject", position: 1, color: "red", weight: 10 } as AllType, // T вказано як AllType
  { name: "BottomObject", position: 2, color: "blue", weight: 5 } as AllType // K вказано як AllType
);

console.log(result);

export {};
