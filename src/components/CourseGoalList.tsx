import { type ReactNode } from 'react'
import CourseGoal from './CourseGoal.tsx'
import { type CourseGoal as CGoal } from '../App.tsx'
import InfoBox from './InfoBox.tsx'

type CourseGoalListProps = {
  goals: CGoal[]
  onDeleteGoal: (id: number) => void
}

export default function CourseGoalList({
  goals,
  onDeleteGoal,
}: CourseGoalListProps) {
  if (goals.length === 0) {
    return (
      <InfoBox mode='hint'>
        You have no course goals yet. Start adding some!
      </InfoBox>
    )
  }

  let warningBox: ReactNode

  if (goals.length >= 4) {
    warningBox = (
      <InfoBox mode='warning' severity=''>
        You're collecting a lot of golas. Don't put too much on your plate!
      </InfoBox>
    )
  }

  return (
    <>
      {warningBox}
      <ul>
        {goals.map((goal) => (
          <li key={goal.id}>
            <CourseGoal title={goal.title} id={goal.id} onDelete={onDeleteGoal}>
              <p>{goal.description}</p>
            </CourseGoal>
          </li>
        ))}
      </ul>
    </>
  )
}
