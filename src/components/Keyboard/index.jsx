import React, { useMemo } from 'react'
import styled from 'styled-components'

const KeyboardWrapper = styled.ul`
  list-style-type: none;
  display: flex;
  justify-content: space-between;
`

const Key = styled.li`
  cursor: pointer;
`

const liMaker = (fn) => {
  const handleClick = fn
  return (num) => (
    <Key key={num} onClick={() => handleClick(num)}>
      {num}
    </Key>
  )
}

export function Keyboard({ onEnter }) {
  const liCreator = liMaker(onEnter)

  return (
    <KeyboardWrapper>
      {new Array(9).fill(null).map((_, i) => liCreator(i + 1))}
      {liCreator(0)}
      {<Key onClick={() => onEnter(-1)}>delete</Key>}
    </KeyboardWrapper>
  )
}
