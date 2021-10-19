export interface Task {
  id: string,
  question: string,
  type: TaskType,
  answer: string,
  answers: string[] | null | undefined,
  selected: string
}

export enum TaskType {
  test = 'test',
  text = 'text',
  code = 'code'
}
