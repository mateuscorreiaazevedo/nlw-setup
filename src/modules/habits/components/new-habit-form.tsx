import { api, useGlobal } from '@/modules/core'
import * as Checkbox from '@radix-ui/react-checkbox'
import { Check } from 'phosphor-react'
import React from 'react'
import { toast } from 'react-toastify'

const weekDays = ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado']

export const NewHabitForm = () => {
  const [title, setTitle] = React.useState('')
  const [weekOfDays, setWeekOfDays] = React.useState<number[]>([])
  const { setLoading } = useGlobal()

  const handleWeekDays = (weekDay: number) => {
    if (weekOfDays.includes(weekDay)) {
      setWeekOfDays(prev => prev.filter(day => day !== weekDay))
    } else {
      setWeekOfDays(prev => [...prev, weekDay])
    }
  }

  async function createNewHabit (e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if (!title || weekOfDays.length === 0) {
      toast.error('Insira os dados do comprometimento e/ou das recorrências', { theme: 'colored' })
      return
    }
    await api.post('habits', {
      title, weekDays: weekOfDays
    })

    toast.success('Hábito criado com sucesso!', { theme: 'colored' })
    setLoading(true)
  }

  console.log({ weekOfDays, title })

  return (
    <form onSubmit={createNewHabit} className="w-full flex flex-col mt-6">
      <div>
        <label htmlFor="title" className="font-semibold leading-tight">
          Qual o seu comprometimento?
        </label>
        <input
          type="text"
          id="title"
          placeholder="Exemplos: exercícios, dormir bem, etc..."
          className="p-4 rounded-lg mt-3 bg-zinc-800 text-white placeholder:text-zinc-400 w-full"
          autoFocus
          value={title}
          onChange={e => setTitle(e.target.value)}
        />
      </div>
      <div className="mt-6">
        <label className="font-semibold leading-tight mt-4">Qual a Recorrência?</label>
        <div className="mt-3 flex flex-col gap-2 transition-colors">
          {weekDays.map((day, i) => (
            <Checkbox.Root
              key={day}
              className="flex items-center gap-3 group"
              onCheckedChange={() => handleWeekDays(i)}
              checked={weekOfDays.includes(i)}
            >
              <div className="h-8 w-8 rounded-lg flex items-center justify-center bg-zinc-900 border-2 border-zinc-800 group-data-[state=checked]:bg-green-500 group-data-[state=checked]:border-green-500">
                <Checkbox.Indicator>
                  <Check size={20} className="text-white font-bold" />
                </Checkbox.Indicator>
              </div>
              <span className="font-semibold text-base text-white leading-tight">{day}</span>
            </Checkbox.Root>
          ))}
        </div>
      </div>

      <button
        type="submit"
        className="mt-6 text-lg rounded-lg p-4 gap-3 flex items-center justify-center transition-all font-semibold bg-green-600 hover:bg-green-500"
      >
        <Check size={20} weight="bold" />
        Confirmar
      </button>
    </form>
  )
}
