import {ChatMessage} from "./chat";

export interface Task {
  id?: string,
  taskId?: string,
  taskInfoId?: string | null,
  lessonId: string,
  question: string,
  type: TaskType,
  answer?: string | null,
  answers?: string[] | null,
  selected?: string | null,
  comments?: ChatMessage[] | null
}

export enum TaskType {
  test = 'Test',
  text = 'Text',
  code = 'Code'
}
