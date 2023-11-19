/*
  Вам потрібно реалізувати інтерфейс KeyValuePair, який описує пару ключ-значення. 
  Використовуйте generics, щоб цей інтерфейс міг працювати з будь-якими типами ключів та значень.
*/

// interface KeyValuePair {
//   key;
//   value;
// }

interface KeyValuePair<T, K> {
  key: T;
  value: K;
}

//?  T та K - параметри типу (generics) - визначають типи для ключа та значення в інтерфейсі 'KeyValuePair'.
//?  можна вказати конкретні типи для ключа та значення при створенні об'єктів типу 'KeyValuePair'.

// Приклад використання
const pair1: KeyValuePair<string, number> = { key: "age", value: 25 };
const pair2: KeyValuePair<string, string> = { key: "name", value: "John" };
const pair3: KeyValuePair<number, boolean> = { key: 42, value: true };

export {};
