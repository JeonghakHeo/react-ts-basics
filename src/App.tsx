import Button from './Button.tsx'
import Container from './Container.tsx'

function App() {
  return (
    <main>
      <Container as={Button} />
    </main>
  )
}

export default App
