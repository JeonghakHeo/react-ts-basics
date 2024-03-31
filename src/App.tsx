import { useRef } from 'react'
import Form from './Form'
import Input from './Input'
import Button from './Button'

function App() {
  function handleSave(data: unknown) {
    const extractedData = data as { name: string; age: string }

    console.log(extractedData)
  }

  return (
    <main>
      <Form onSave={handleSave}>
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
