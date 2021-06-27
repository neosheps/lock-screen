import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  max-width: 800px;
  height: 100vh;
  background: #e8ecf1;
  margin: 0 auto;
  user-select: none;
  padding: 40px 0;
`

export function Container({ children }) {
  return <Wrapper>{children}</Wrapper>
}
