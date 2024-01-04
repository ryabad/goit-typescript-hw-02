/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/
enum Week {
  MONDAY,
  TUESDAY,
  WEDNESDAY,
  THURSDAY,
  FRIDAY,
  SATURDAY,
  SUNDAY,
}

function isWeekend(input: Week): boolean {
  if (input >= Week.SATURDAY) {
    return true;
  } else {
    return false;
  }
}

// const day: Week = Week.WEDNESDAY;
// console.log(isWeekend(day));
