import React, { memo } from "react"
import { useModel as TaskListModel } from "@widgets/taskList/model"

import { ToggleTask } from "@features/task"
import { TaskComponent } from "@entities/task"
import { Loader } from "@shared/ui"

const TaskListLayout = () => {
  const { list, isLoading } = TaskListModel()
  return (
    <div>
      <Loader isLoading={isLoading} />
      {list.map((item) => (
        <TaskComponent.Row key={item.id} item={item}>
          <ToggleTask task={item} />
        </TaskComponent.Row>
      ))}
    </div>
  )
}

export const Component = memo(TaskListLayout)
