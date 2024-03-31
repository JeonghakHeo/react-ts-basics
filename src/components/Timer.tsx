import Container from './UI/Container.tsx'
import { type Timer as TimerProps } from '../store/timers-context.tsx'
import { useState } from 'react'

export default function Timer({ name, duration }: TimerProps) {
  const [remaningTime, setRemainingTime] = useState(duration * 1000)

  setInterval(function () {
    setRemainingTime((prevTime) => prevTime - 50)
  }, 50)

  return (
    <Container as='article'>
      <h2>{name}</h2>
      <p>
        <progress max={duration} value={remaningTime} />
      </p>
      <p></p>
    </Container>
  )
}
