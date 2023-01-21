import clsx from 'clsx'
import React from 'react'

type Props = {
  progress: number
}

export const Progressbar = ({ progress }: Props) => {
  return (
    <div className='h-3 rounded-xl bg-zinc-700 w-full mt-4'>
      <div
      className={clsx('h-3 rounded-xl w-full transition-all duration-300', {
        'bg-violet-900': progress > 0 && progress < 20,
        'bg-violet-800': progress >= 20 && progress < 40,
        'bg-violet-700': progress >= 40 && progress < 60,
        'bg-violet-600': progress >= 60 && progress < 80,
        'bg-violet-500': progress >= 80,
      })}
        role="progressbar"
        aria-label="Progresso de hábitos completados nesse dia"
        aria-valuenow={progress}
        style={{ width: `${progress}%` }}
      />
    </div>
  )
}
