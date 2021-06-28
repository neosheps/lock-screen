import React, { useState, useEffect } from 'react'
import { Container } from './components/Container'
import { Keyboard } from './components/Keyboard'
import { Info } from './components/Info'
import { userPin, adminPin } from './constants'
import { PinView } from './components/PinView'

const customPins = []

function App() {
  const [pin, setPin] = useState([])
  const [pinConfirmaton, setPinConfirmation] = useState([])
  const [message, setMessage] = useState('')
  const [mode, setMode] = useState('enter')
  const isEnter = mode === 'enter'

  const pinHandler = (value) => {
    if (pin.length === 4 && !isEnter) {
      return setPinConfirmation((prev) =>
        value >= 0 ? [...prev, value] : prev.slice(0, -1)
      )
    }
    setPin((prevPin) =>
      value >= 0 ? [...prevPin, value] : prevPin.slice(0, -1)
    )
  }

  const modeHandler = () => {
    setMode(isEnter ? 'set' : 'enter')
    setPin([])
    setPinConfirmation([])
  }

  useEffect(() => {
    if (pin.length === 4 && isEnter) {
      const pinNumber = parseInt(pin.join(''))
      if (customPins.includes(pinNumber)) {
        return setMessage('Custom pin')
      }
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
    if (pinConfirmaton.length === 4) {
      if (parseInt(pin.join('')) === parseInt(pinConfirmaton.join(''))) {
        setMessage('Пинкод добавлен')
        customPins.push(parseInt(pinConfirmaton.join('')))
        setPin([])
        setPinConfirmation([])
      } else {
        setMessage('Подтверждение не совпадает, введите заново')
        setPin([])
        setPinConfirmation([])
      }
    }
  }, [pin, isEnter, pinConfirmaton])

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
        {pin.length === 4 && !isEnter && <p>Confirm pin</p>}
        {message ? (
          <Info text={message} />
        ) : (
          <>
            <PinView
              length={
                pin.length === 4 && !isEnter
                  ? pinConfirmaton.length
                  : pin.length
              }
            />
            <Keyboard onEnter={pinHandler} />
          </>
        )}
        <button onClick={modeHandler}>
          {isEnter ? 'New pin' : 'Test pin'}
        </button>
      </Container>
    </div>
  )
}

export default App
