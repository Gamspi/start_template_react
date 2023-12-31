import React, { memo, useState } from "react"
import { Outlet } from "react-router-dom"
import { GlobalStyle, theme } from "../styles"
import { ThemeProvider } from "styled-components"
import { Header } from "@widgets/header"

import { style as StyledComponent } from "../styles/layout"

const AppLayout = () => {
  const [headerHeight, setHeaderHeight] = useState(0)
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <StyledComponent.AppWrapper>
        <Header setHeight={setHeaderHeight} />
        <StyledComponent.Main $paddingTop={headerHeight}>
          <StyledComponent.Container>
            <Outlet />
          </StyledComponent.Container>
        </StyledComponent.Main>
      </StyledComponent.AppWrapper>
    </ThemeProvider>
  )
}

export default memo(AppLayout)
