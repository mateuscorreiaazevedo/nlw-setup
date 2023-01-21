import { api, CheckboxComponent } from '@/modules/core'
import dayjs from 'dayjs'
import React from 'react'
import { toast } from 'react-toastify'

type Props = {
  date: Date
  onCompletedChange: (completed: number) => void
}

export const HabitsList = ({ date, onCompletedChange }: Props) => {
  const [habitsInfo, setHabitsInfo] = React.useState<Habits>()

  React.useEffect(() => {
    (async () => {
      try {
        const response = await api.get('/day', { params: { date: date.toISOString() } })
        setHabitsInfo(response.data)
      } catch (error) {
        console.log((error as any).message)
        toast.error((error as any).message, { theme: 'colored' })
      }
    })()
  }, [])

  const dateInPast = dayjs(date).endOf('day').isBefore(new Date())

  async function handleTogglehabit (habitId: string) {
    await api.patch(`/habits/${habitId}/toggle`)

    const isHabitCompleted = habitsInfo!.completedHabits.includes(habitId)
    let completedHabits: string[] = []
    if (isHabitCompleted) {
      completedHabits = habitsInfo!.completedHabits.filter(id => id !== habitId)
    } else {
      completedHabits = [...habitsInfo!.completedHabits, habitId]
    }

    setHabitsInfo({
      possibleHabits: habitsInfo!.possibleHabits,
      completedHabits
    })

    onCompletedChange(completedHabits.length)
  }

  return (
    <>
      <div className="mt-6 flex flex-col gap-3">
        {habitsInfo?.possibleHabits.map(habit => (
          <CheckboxComponent
            handleTogglehabit={handleTogglehabit}
            habit={habit}
            isChecked={habitsInfo.completedHabits.includes(habit.id)}
            isDisabled={dateInPast}
            key={habit.id}
          />
        ))}
      </div>
    </>
  )
}
