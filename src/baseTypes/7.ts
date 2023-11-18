/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/

//! 1-й Варіант

// enum DayOfWeek {
//   Monday,
//   Tuesday,
//   Wednesday,
//   Thursday,
//   Friday,
//   Saturday,
//   Sunday,
// }

// function isWeekend(day: DayOfWeek): boolean {
//   return day === DayOfWeek.Saturday || day === DayOfWeek.Sunday;
// }

// console.log("isWeekend: ", isWeekend(DayOfWeek.Thursday));

//! 2-й Варіант

enum DayOfWeek {
  Monday = `monday`,
  Tuesday = `tuesday`,
  Wednesday = `wednesday`,
  Thursday = `thursday`,
  Friday = `friday`,
  Saturday = `saturday`,
  Sunday = `sunday`,
}

function isWeekend(day: DayOfWeek): boolean {
  return day === DayOfWeek.Saturday || day === DayOfWeek.Sunday;
}

console.log("isWeekend: ", isWeekend(DayOfWeek.Thursday)); // false
console.log("Today is: ", DayOfWeek.Thursday); // 'thursday'
