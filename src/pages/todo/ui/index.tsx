import React, { memo } from "react"
import { TaskList } from "@widgets/taskList"
import { Container } from "@shared/ui"

const Component = () => {
  return (
    <Container>
      <TaskList />
    </Container>
  )
}

export default memo(Component)
