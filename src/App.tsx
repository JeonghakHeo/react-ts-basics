import { useRef } from 'react'
import Input from './Input'

function App() {
  const input = useRef<HTMLInputElement>(null)

  return (
    <main>
      <Input label='test' id='test' ref={input} />
    </main>
  )
}

export default App
