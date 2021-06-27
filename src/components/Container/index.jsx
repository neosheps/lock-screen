import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  max-width: 800px;
  height: 100vh;
  background: pink;
  margin: 0 auto;
`

export function Container({ children }) {
  return <Wrapper>{children}</Wrapper>
}
