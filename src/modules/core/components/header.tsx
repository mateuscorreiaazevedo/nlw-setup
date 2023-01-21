import { logo } from '@/assets/images'
import { NewHabitModal } from '@/modules/habits'

import React from 'react'

export const Header = () => {
  return (
    <header className="w-full max-w-3xl mx-auto flex items-center justify-between">
      <img src={logo} alt="Habits" />
      <NewHabitModal />
    </header>
  )
}
