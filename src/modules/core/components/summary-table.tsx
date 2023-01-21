import { generateDatesFromYearBeginning, api } from '..'
import { HeaderTable } from './header-table'
import HabitDay from './habit-day'
import React from 'react'
import dayjs from 'dayjs'

export function SummaryTable () {
  const summaryDates = generateDatesFromYearBeginning()
  const minimumSummaryDatesSize = 18 * 7 // 18 weeks
  const amountOfDaysToFill = minimumSummaryDatesSize - summaryDates.length
  const [summary, setSummary] = React.useState<Summary[]>([])

  React.useEffect(() => {
    api.get('/summary').then(res => setSummary(res.data))
  }, [])

  return (
    <div className="w-full flex">
      <HeaderTable />
      <div className="grid grid-rows-7 grid-flow-col gap-3 overflow-x-auto">
        {summary.length > 0 && summaryDates.map(date => {
          const dayInSummary = summary.find(day => {
            return dayjs(date).isSame(day.date, 'day')
          })
          return (
          <HabitDay
            date={date}
            key={date.toString()}
            amount={dayInSummary?.amount}
            defaultCompleted={dayInSummary?.completed}
          />
          )
        })}

        {amountOfDaysToFill > 0 &&
          Array.from({ length: amountOfDaysToFill }).map((_, i) => (
            <div
              key={i}
              className="w-10 h-10 bg-zinc-900 border-2 border-zinc-800 rounded-lg opacity-40 cursor-not-allowed"
            />
          ))}
      </div>
    </div>
  )
}
