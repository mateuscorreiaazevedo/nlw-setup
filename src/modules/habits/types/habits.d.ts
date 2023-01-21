type PossibleHabits = {
  created_at: string
  id: string
  title: string
}

type Habits = {
  possibleHabits: PossibleHabits[]
  completedHabits: string[]
}
