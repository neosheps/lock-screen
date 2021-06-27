import React, { useState, useEffect } from 'react'
import { Container } from './components/Container'
import { Keyboard } from './components/Keyboard'
import { Info } from './components/Info'
import { userPin, adminPin } from './constants'
import { PinView } from './components/PinView'

function App() {
  const [pin, setPin] = useState([])
  const [message, setMessage] = useState('')

  const pinHandler = (value) =>
    setPin((prevPin) =>
      value >= 0 ? [...prevPin, value] : prevPin.slice(0, -1)
    )

  useEffect(() => {
    if (pin.length === 4) {
      const pinNumber = parseInt(pin.join(''))
      switch (pinNumber) {
        case userPin:
          setMessage('Hello, %username%')
          break
        case adminPin:
          setMessage('Good evening, Master')
          break
        default:
          setMessage('User is not defined')
      }
    }
  }, [pin])

  useEffect(() => {
    setPin([])
    const timer = setTimeout(() => setMessage(''), 1500)
    return () => {
      clearTimeout(timer)
    }
  }, [message])

  return (
    <div id="root">
      <Container>
        {message ? (
          <Info text={message} />
        ) : (
          <>
            <PinView length={pin.length} />
            <Keyboard onEnter={pinHandler} />
          </>
        )}
      </Container>
    </div>
  )
}

export default App
