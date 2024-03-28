type HeaderProps = {
  image: {
    src: string
    alt: string
  }
  children: string
}

export default function Header({ image, children }: HeaderProps) {
  return (
    <header>
      <img {...image} />
      {children}
    </header>
  )
}
