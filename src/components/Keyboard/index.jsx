import React, { useMemo } from 'react'
import styled from 'styled-components'

const KeyboardWrapper = styled.ul`
  list-style-type: none;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`

const Button = styled.li`
  cursor: pointer;
  display: flex;
  justify-content: center;
  text-align: center;
  font-size: 16px;
  background: white;
  margin: 10px 20px;
  padding: 10px 0;
  border-radius: 10px;
  flex: 1 0 ${(props) => (props.single ? '40' : '25')}%;
  transition: opacity 0.2s;
  &:hover {
    opacity: 0.8;
  }

  @media (max-width: 480px){
    flex: 1 0 ${(props) => (props.single ? '30' : '20')}%;

  }
`

const icon = () => (
  <svg
    height="22"
    viewBox="0 0 320.941 320.941"
    width="22"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M290.853 40.118H109.804a30 30 0 00-23.301 11.038L2.262 154.124a10.032 10.032 0 000 12.693l84.251 102.978c5.739 7.013 14.231 11.028 23.291 11.028h181.048c16.592 0 30.088-13.497 30.088-30.088V70.206c.001-16.592-13.496-30.088-30.087-30.088zm10.029 210.617c0 5.534-4.496 10.029-10.029 10.029H109.804a10.006 10.006 0 01-7.767-3.673l-79.05-96.621 79.04-96.611a10.017 10.017 0 017.777-3.683h181.048c5.534 0 10.029 4.496 10.029 10.029l.001 180.53z" />
    <path d="M223.585 103.232l-43.056 43.056-43.056-43.056-14.182 14.182 43.056 43.056-43.056 43.056 14.182 14.182 43.056-43.056 43.056 43.056 14.182-14.182-43.056-43.056 43.056-43.056z" />
  </svg>
)

const liMaker = (fn) => {
  const handleClick = fn
  return (num) => (
    <Button key={num} onClick={() => handleClick(num)} single={num === 0}>
      {num}
    </Button>
  )
}

export function Keyboard({ onEnter }) {
  const liCreator = liMaker(onEnter)

  return (
    <KeyboardWrapper>
      {new Array(9).fill(null).map((_, i) => liCreator(i + 1))}
      {liCreator(0)}
      {
        <Button single onClick={() => onEnter(-1)}>
          {icon()}
        </Button>
      }
    </KeyboardWrapper>
  )
}
