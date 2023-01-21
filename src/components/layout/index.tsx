import React from 'react'
import 'dayjs/locale/pt-br'

const Layout: React.FC<{children: React.ReactNode}> = ({ children }) => {
  return (
    <main className="w-screen h-screen flex items-center justify-center">
      <div className="w-full max-w-5xl px-6 flex flex-col  gap-16">{children}</div>
    </main>
  )
}

export default Layout
