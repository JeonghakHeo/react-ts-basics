import { FC, type PropsWithChildren, type ReactNode } from 'react'

// interface CourseGoalProps {
//   title: string
//   // description: string
//   children: ReactNode
// }

type CourseGoalProps = PropsWithChildren<{
  id: number
  title: string
  onDelete: (id: number) => void
}>

const CourseGoal: FC<CourseGoalProps> = ({ title, id, children, onDelete }) => {
  return (
    <article>
      <div>
        <h2>{title}</h2>
        {children}
      </div>
      <button onClick={() => onDelete(id)}>Delete</button>
    </article>
  )
}

export default CourseGoal
