import {LessonShort} from "./lesson";

export interface Subject {
  id: string
  name: string
  description: string
  course: number
  lessons?: LessonShort[]
}
