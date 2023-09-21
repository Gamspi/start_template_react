import { taskConverter } from "@entities/task/lib/converter"

export type Task = ReturnType<typeof taskConverter>

export interface TaskState {
  list: Task[]
  isLoading: boolean
  isError: boolean
}
