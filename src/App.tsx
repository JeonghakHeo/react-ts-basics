import Button from './Button.tsx'
import Container from './Container.tsx'

function App() {
  return (
    <main>
      <Container as={Button}>Click me</Container>
    </main>
  )
}

export default App
