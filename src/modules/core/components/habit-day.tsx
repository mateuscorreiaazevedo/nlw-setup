import * as Popover from '@radix-ui/react-popover'
import { Progressbar } from './progress-bar'
import React from 'react'
import clsx from 'clsx'
import dayjs from 'dayjs'
import { HabitsList } from '@/modules/habits'

type Props = {
  defaultCompleted?: number
  amount?: number
  date: Date
}

export default function HabitDay ({ amount = 0, defaultCompleted = 0, date }: Props) {
  const [completed, setCompleted] = React.useState(defaultCompleted)
  const percentualProgress = amount > 0 ? Math.round((completed / amount) * 100) : 0
  const parsedDate = dayjs(date)
  const weekOfDay = parsedDate.format('dddd')
  const dayAndMonth = parsedDate.format('DD/MM')

  function handleCompletedChanged (completed: number) {
    setCompleted(completed)
  }

  return (
    <Popover.Root>
      <Popover.Trigger
        title={weekOfDay}
        className={clsx('cursor-pointer w-10 h-10 border-2 rounded-lg transition-colors duration-300', {
          'bg-zinc-900 border-zinc-800': percentualProgress === 0,
          'bg-violet-500 border-violet-400': percentualProgress >= 80,
          'bg-violet-600 border-violet-500': percentualProgress >= 60 && percentualProgress < 80,
          'bg-violet-700 border-violet-600': percentualProgress >= 40 && percentualProgress < 60,
          'bg-violet-800 border-violet-700': percentualProgress >= 20 && percentualProgress < 40,
          'bg-violet-900 border-violet-800': percentualProgress > 0 && percentualProgress < 20
        })}
      />
      <Popover.Portal>
        <Popover.Content className="min-w-[320px] bg-zinc-900 p-6 rounded-2xl flex flex-col">
          <span className="font-semibold text-zinc-400">{weekOfDay}</span>
          <span className="mt-1 font-extrabold leading-tight text-3xl">{dayAndMonth}</span>
          <Progressbar progress={percentualProgress} />
          <HabitsList date={date} onCompletedChange={handleCompletedChanged} />
          <Popover.Arrow height={8} width={16} className="fill-zinc-900" />
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  )
}
