import CourseGoal from './CourseGoal.tsx'
import { type CourseGoal as CGoal } from '../App.tsx'

type CourseGoalListProps = {
  goals: CGoal[]
  onDeleteGoal: (id: number) => void
}

export default function CourseGoalList({
  goals,
  onDeleteGoal,
}: CourseGoalListProps) {
  return (
    <ul>
      {goals.map((goal) => (
        <li key={goal.id}>
          <CourseGoal title={goal.title} id={goal.id} onDelete={onDeleteGoal}>
            <p>{goal.description}</p>
          </CourseGoal>
        </li>
      ))}
    </ul>
  )
}
