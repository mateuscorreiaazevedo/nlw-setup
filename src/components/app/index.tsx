import { GlobalProvider, Header, SummaryTable } from '@/modules/core'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Layout from '../layout'
import React from 'react'

export const App = () => {
  return (
    <GlobalProvider>
      <Layout>
        <Header />
        <SummaryTable />
        <ToastContainer />
      </Layout>
    </GlobalProvider>
  )
}
