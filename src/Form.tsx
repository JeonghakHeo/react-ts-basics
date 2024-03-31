import { type ComponentPropsWithoutRef, type FormEvent } from 'react'

type FormProps = ComponentPropsWithoutRef<'form'> & {
  onSave: (value: unknown) => void
}

export default function Form({ onSave, children, ...otherProps }: FormProps) {
  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()

    const formData = new FormData(e.currentTarget)
    const data = Object.fromEntries(formData)

    onSave(data)
  }
  return (
    <form onSubmit={handleSubmit} {...otherProps}>
      {children}
    </form>
  )
}
