import {Task} from "./task";

export interface LessonShort {
  id?: string
  name?: string
  description?: string
  status?: LessonStatus
  validTill?: string
}

export interface LessonFull {
  id?: string
  name?: string
  description?: string
  status?: LessonStatus
  validTill?: string
  tasks: Task[]
}



export enum LessonStatus{
  open,
  passed,
  failed
}
