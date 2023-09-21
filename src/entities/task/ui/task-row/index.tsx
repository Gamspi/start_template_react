import React, { memo, ReactNode } from "react"

import { Style } from "./style"
import { Typography } from "@shared/ui"
import { Task } from "../../lib/types"

export type Props = {
  item: Task
  children?: ReactNode
}
const TaskRow = ({ item, children }: Props) => {
  return (
    <Style.Block>
      {children}
      <Typography.Title level={5}>{item.title}</Typography.Title>
    </Style.Block>
  )
}

export const Component = memo(TaskRow)
