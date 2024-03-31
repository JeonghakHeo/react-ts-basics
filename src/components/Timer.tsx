import Container from './UI/Container.tsx'
import {
  useTimersContext,
  type Timer as TimerProps,
} from '../store/timers-context.tsx'
import { useEffect, useRef, useState } from 'react'

export default function Timer({ name, duration }: TimerProps) {
  const interval = useRef<number | null>(null)
  const [remaningTime, setRemainingTime] = useState(duration * 1000)
  const { isRunning } = useTimersContext()
  if (remaningTime <= 0 && interval.current) {
    clearInterval(interval.current)
  }

  useEffect(() => {
    let timer: number

    if (isRunning) {
      timer = setInterval(function () {
        setRemainingTime((prevTime) => {
          if (prevTime <= 0) {
            return prevTime
          }
          return prevTime - 50
        })
      }, 50)

      interval.current = timer
    } else if (interval.current) {
      clearInterval(interval.current)
    }

    return () => clearInterval(timer)
  }, [isRunning])

  const formattedRemainingTime = (remaningTime / 1000).toFixed(2)

  return (
    <Container as='article'>
      <h2>{name}</h2>
      <p>
        <progress max={duration} value={remaningTime} />
      </p>
      <p>{formattedRemainingTime}</p>
    </Container>
  )
}
