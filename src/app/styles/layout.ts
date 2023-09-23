import styled from "styled-components"

type StyledMainProps = {
  $paddingTop?: number
}

const styledMain = styled.div<StyledMainProps>`
  height: 100%;
  display: grid;
  padding-top: ${({ $paddingTop }) => $paddingTop || 0}px;
`

const styledWrapper = styled.div`
  max-width: 100vw;
  overflow-x: hidden;
  grid-area: 1/1/1/1;

  &.enter {
    opacity: 0;
  }

  &.enter-active {
    opacity: 1;
    transition:
      opacity 300ms linear,
      transform 300ms linear;
  }

  &.exit {
    opacity: 1;
  }

  &.exit-active {
    opacity: 0;
    transition:
      opacity 300ms linear,
      transform 300ms linear;
  }
`
const AppWrapper = styled.div`
  display: grid;
  grid-template-rows: auto 1fr auto;
`
export const style = { Main: styledMain, Container: styledWrapper, AppWrapper }
