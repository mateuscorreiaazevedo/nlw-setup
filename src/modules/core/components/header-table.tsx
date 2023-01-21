import React from 'react'

export const HeaderTable = () => {
  const weekDays = ['D', 'S', 'T', 'Q', 'Q', 'S', 'S']

  return (
    <div className="grid grid-rows-7 grid-flow-row gap-3">
    {weekDays.map((day, i: React.Key) => (
      <div key={`${day} - ${i}`} className="text-zinc-400 textxk h-10 w-10 flex font-bold items-center justify-center">
        {day}
      </div>
    ))}
  </div>
  )
}
