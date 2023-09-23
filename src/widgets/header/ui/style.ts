import styled from "styled-components"

const styledNav = styled.nav`
  display: flex;
  gap: 1.5rem;
  text-transform: capitalize;
`
const styledBlock = styled.header`
  padding: 1.6rem;
  display: flex;
  gap: 1.6rem;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: fit-content;
  background: ${({ theme }) => theme.color.white};
`
const styledLogo = styled.img`
  object-fit: contain;
  width: 3rem;
  height: 3rem;
`

export const style = {
  Nav: styledNav,
  Block: styledBlock,
  Logo: styledLogo,
}
