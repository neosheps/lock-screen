import React from 'react'
import styled from 'styled-components'

const Message = styled.h1``

export function Info({ text }) {
  return <Message>{text}</Message>
}
