import {
  useRef,
  useImperativeHandle,
  forwardRef,
  type ComponentPropsWithoutRef,
  type FormEvent,
} from 'react'

export type FormHandle = {
  clear: () => void
}

type FormProps = ComponentPropsWithoutRef<'form'> & {
  onSave: (value: unknown) => void
}

const Form = forwardRef<FormHandle, FormProps>(function Form(
  { onSave, children, ...otherProps },
  ref
) {
  const form = useRef<HTMLFormElement>(null)

  useImperativeHandle(ref, () => {
    return {
      clear() {
        console.log('CLEARING')
        form.current?.reset()
      },
    }
  })

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()

    const formData = new FormData(e.currentTarget)
    const data = Object.fromEntries(formData)

    onSave(data)
    // form.current?.reset()
  }
  return (
    <form onSubmit={handleSubmit} {...otherProps} ref={form}>
      {children}
    </form>
  )
})

export default Form
