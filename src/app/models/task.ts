export interface Task {
  id?: string,
  lessonId: string,
  question: string,
  type: TaskType,
  answer?: string,
  answers?: string[] | null | undefined,
  selected?: string
}

export enum TaskType {
  test = 'Test',
  text = 'Text',
  code = 'Code'
}
