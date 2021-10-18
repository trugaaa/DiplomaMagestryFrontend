export interface Task {
  id: string,
  question: string,
  type: TaskType,
  answers: string[] | null
  answer: string
}

export enum TaskType {
  test = 'test',
  text = 'text',
  code = 'code'
}
