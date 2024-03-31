import { useRef } from 'react'
import Form from './Form'
import Input from './Input'
import Button from './Button'

function App() {
  const input = useRef<HTMLInputElement>(null)

  return (
    <main>
      <Form>
        <Input type='text' label='Name' id='name' />
        <Input type='number' label='Age' id='age' />
        <p>
          <Button>Save</Button>
        </p>
      </Form>
    </main>
  )
}

export default App
