/*
  У вас є перелік UserRole, який використовується для класифікації користувачів у вашому додатку.
  Ви хочете створити об'єкт RoleDescription, який зіставлятиме кожну роль користувача з її описом.
*/

export enum UserRole {
  admin = "admin",
  editor = "editor",
  guest = "guest",
}

//! Замініть наступний код на версію за допомогою Record
//! Принцип роботи Record - вказуємо набір ключів K і тип T, який буде присвоєно кожному з цих ключів.

// const RoleDescription = {
//   admin: 'Admin User',
//   editor: 'Editor User',
//   guest: 'Guest User',
// };

type Description = Record<UserRole, string>;

const RoleDescription: Description = {
  admin: "Admin User",
  editor: "Editor User",
  guest: "Guest User",
};

export {};
