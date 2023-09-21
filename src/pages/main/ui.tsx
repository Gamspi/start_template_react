import React, { memo } from "react"
import { Page, Typography } from "@shared/ui"
import { style as StyledComponent } from "./style"

const MainPage = () => {
  return (
    <Page>
      <StyledComponent.Container>
        <Typography.Title level={1}>Main 🖖</Typography.Title>
      </StyledComponent.Container>
    </Page>
  )
}

export default memo(MainPage)
