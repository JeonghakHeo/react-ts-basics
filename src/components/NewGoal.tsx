import { type FormEvent } from 'react'

export default function NewGoal() {
  function handleSubmit(e: FormEvent) {
    e.preventDefault()
  }

  return (
    <form onSubmit={handleSubmit}>
      <p>
        <label htmlFor='goal'>Your goal</label>
        <input type='text' id='goal' />
      </p>
      <p>
        <label htmlFor='summary'>Your summary</label>
        <input type='text' id='summary' />
      </p>
      <p>
        <button>Add Goal</button>
      </p>
    </form>
  )
}
