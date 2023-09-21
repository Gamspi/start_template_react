import React, { memo } from "react"
import { FormField } from "@shared/ui"
import { ToggleTask as ToggleTaskModel } from "./model"
import { PropType } from "./lib"

const ToggleTask = ({ task }: PropType) => {
  const { changeCompleted } = new ToggleTaskModel(task)
  return (
    <FormField.CheckBox checked={task.completed} onChange={changeCompleted} />
  )
}

export const Comopnent = memo(ToggleTask)
