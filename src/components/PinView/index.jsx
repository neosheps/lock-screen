import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  margin: 0 auto;
  justify-content: space-between;
  max-width: 400px;
  padding: 0 20px;
  margin-bottom: 40px;
`

const Dot = styled.span`
  width: 40px;
  height: 40px;
  background: ${(props) => (props.filled ? 'grey' : 'transparent')};
  border: 1px solid grey;
  border-radius: 50%;
`

export function PinView({ length }) {
  return (
    <Container>
      {new Array(4).fill(null).map((_, i) => (
        <Dot key={i} filled={i + 1 <= length} />
      ))}
    </Container>
  )
}
