import {Task} from "./task";

export interface LessonShort {
  id?: string
  name?: string
  description?: string
  status?: LessonStatus
  validTill?: string,
  mark: number
}

export interface LessonFull {
  id?: string
  name?: string
  description?: string
  status?: LessonStatus
  validTill?: string
  tasks: Task[],
  mark?: number | undefined
}


export enum LessonStatus {
  open = 'open',
  passed = 'passed',
  failed = 'failed'
}
