import React from 'react'

const Context = React.createContext<{ setLoading: React.Dispatch<React.SetStateAction<boolean>> } | null>(null)

export const GlobalProvider = ({ children }: { children: React.ReactNode }) => {
  const [loading, setLoading] = React.useState(true)

  React.useEffect(() => {
    setLoading(false)
  }, [loading])

  if (loading) {
    return (
      <div className='flex h-screen w-screen items-center justify-center'>
        <div
          className="
            h-40
            w-40
            rounded-full
            border-8
            border-transparent
            border-t-violet-600
            animate-spin
            "
        />
      </div>
    )
  }

  return <Context.Provider value={{ setLoading }}>{children}</Context.Provider>
}

export const useGlobal = () => {
  const context = React.useContext(Context)

  if (!context) throw new Error('Error on GlobalProvider')

  return { ...context }
}
