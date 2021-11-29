export enum Course {
  unknown = "Невідомо",
  first = 1,
  second = 2,
  third = 3,
  fourth = 4,
  fifth = 5,
  sixth = 6,
  seventh = 7
}

export function courses(): Course[] {
  return [Course.first, Course.second, Course.third, Course.fourth, Course.fifth, Course.sixth, Course.seventh]
}
