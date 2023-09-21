import React, { memo } from "react"
import { Outlet } from "react-router-dom"
import { GlobalStyle, theme } from "../styles"
import { ThemeProvider } from "styled-components"
import { Header } from "@widgets/header"

import { style as StyledComponent } from "../styles/layout"

const AppLayout = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <StyledComponent.AppWrapper>
        <Header />
        <StyledComponent.Main>
          <StyledComponent.Container>
            <Outlet />
          </StyledComponent.Container>
        </StyledComponent.Main>
      </StyledComponent.AppWrapper>
    </ThemeProvider>
  )
}

export default memo(AppLayout)
