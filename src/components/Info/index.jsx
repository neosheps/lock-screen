import React from 'react'
import styled from 'styled-components'

const Message = styled.h1`
    font-szie: 24px;
    text-align: center;
`

export function Info({ text }) {
  return <Message>{text}</Message>
}
