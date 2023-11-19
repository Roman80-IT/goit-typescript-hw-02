/*
  Створіть новий тип даних, який підходить для цих двох об'єктів.
*/

//! 1-й Варіант

type PageA = {
  title: string;
  likes: number;
  accounts: [...string[]];
  status: "open" | "close";
};

type PageB = {
  details: {
    createAt: Date;
    updateAt: Date;
  };
};

type Page = PageA & PageB;

//! 2-й Варіант

type Pages = {
  title: string;
  likes: number;
  accounts: [...string[]];
  status: "open" | "close";
  details?: {
    createAt: Date;
    updateAt: Date;
  };
};

const page1: Page = {
  title: "The awesome page",
  likes: 100,
  accounts: ["Max", "Anton", "Nikita"],
  status: "open",
  details: {
    createAt: new Date("2021-01-01"),
    updateAt: new Date("2021-05-01"),
  },
};

const page2: Pages = {
  title: "Python or Js",
  likes: 5,
  accounts: ["Alex"],
  status: "close",
};

export {};
