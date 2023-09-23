import React, { memo } from "react"
import { useModel as useHeaderModel } from "../modlel"
import { CustomLink, Container, Box } from "@shared/ui"
import logo from "@shared/assets/logo.svg"
import { style as StyledComponent } from "./style"
import { lickList } from "../config"
type Props = {
  setHeight?: (value: number) => void
}
const Header = ({ setHeight }: Props) => {
  const { headerRef } = useHeaderModel({ setHeight })
  return (
    <StyledComponent.Block ref={headerRef}>
      <Container>
        <Box.Flex $gap={1.6} $align="center">
          <StyledComponent.Logo src={logo} />
          <Box.Flex $gap={1.6}>
            {lickList.map((item) => (
              <CustomLink to={item.path} key={item.path}>
                {item.label}
              </CustomLink>
            ))}
          </Box.Flex>
        </Box.Flex>
      </Container>
    </StyledComponent.Block>
  )
}

export const Component = memo(Header)
