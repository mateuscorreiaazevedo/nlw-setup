import * as Dialog from '@radix-ui/react-dialog'
import { NewHabitForm } from '@/modules/habits'
import { Plus, X } from 'phosphor-react'

import React from 'react'

export const NewHabitModal = () => {
  return (
    <Dialog.Root>
        <Dialog.Trigger
          type="button"
          className="
            group/btn
            border
            border-violet-500
            font-semibold
            rounded-lg
            px-6 py-4
            flex
            items-center
            gap-3
            hover:border-violet-300
            transition-all
          "
        >
          <Plus
            size={20} className="text-violet-500 group-hover/btn:text-violet-300 transition-all"
          />
          Novo Hábito
        </Dialog.Trigger>
        <Dialog.Portal>
          <Dialog.Overlay
            className='w-screen h-screen bg-black/80 fixed inset-0'
          />
          <Dialog.Content
            className='absolute p-10 bg-zinc-900 rounded-2xl w-full max-w-md top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'
          >
            <Dialog.Close
              className='absolute top-6 right-6 text-zinc-400 hover:text-zinc-200 transition-all'
            >
              <X size={24} aria-label="Fechar"/>
            </Dialog.Close>
            <Dialog.Title
              className='text-3xl leading-tight font-extrabold'
            >
              Criar hábito
            </Dialog.Title>
            <NewHabitForm />
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
  )
}
