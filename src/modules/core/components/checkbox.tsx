import * as Checkbox from '@radix-ui/react-checkbox'
import { Check } from 'phosphor-react'
import React from 'react'

type Props = {
  habit: PossibleHabits
  isChecked: boolean
  isDisabled: boolean
  handleTogglehabit: (habitId: string) => Promise<void>
}

export const CheckboxComponent = (props: Props) => {
  return (
    <Checkbox.Root
      onCheckedChange={() => props.handleTogglehabit(props.habit.id)}
      className="flex items-center gap-3 group"
      checked={props.isChecked}
      disabled={props.isDisabled}
    >
      <div className="h-8 w-8 rounded-lg flex items-center justify-center bg-zinc-900 border-2 border-zinc-800 group-data-[state=checked]:bg-green-500 group-data-[state=checked]:border-green-500">
        <Checkbox.Indicator>
          <Check size={20} className="text-white font-bold" />
        </Checkbox.Indicator>
      </div>
      <span className="font-semibold text-xl text-white leading-tight group-data-[state=checked]:line-through group-data-[state=checked]:text-zinc-400">
        {props.habit.title}
      </span>
    </Checkbox.Root>
  )
}
