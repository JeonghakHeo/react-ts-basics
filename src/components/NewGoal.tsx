import { useRef, type FormEvent } from 'react'

export default function NewGoal() {
  const goal = useRef<HTMLInputElement>(null)
  const summary = useRef<HTMLInputElement>(null)

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()

    const enteredGoal = goal.current!.value
    const enteredSummary = summary.current!.value
  }

  return (
    <form onSubmit={handleSubmit}>
      <p>
        <label htmlFor='goal'>Your goal</label>
        <input type='text' id='goal' ref={goal} />
      </p>
      <p>
        <label htmlFor='summary'>Your summary</label>
        <input type='text' id='summary' ref={summary} />
      </p>
      <p>
        <button>Add Goal</button>
      </p>
    </form>
  )
}
