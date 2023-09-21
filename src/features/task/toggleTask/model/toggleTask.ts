import { useAppDispatch } from "@shared/lib/hooks"
import { TaskModel } from "@entities/task"
import { Task } from "@entities/task/lib/types"

export class ToggleTask {
  dispatch = useAppDispatch()

  constructor(private task: Task) {}

  changeCompleted = () => {
    const result = {
      id: this.task.id,
      value: !this.task.completed,
    }
    this.dispatch(TaskModel.actions.setCompleted(result))
  }
}
