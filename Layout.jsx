import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './src/Component/Header/Header'
import Footer from './src/Component/Footer/Footer'

function Layout() {
  return (
    <div>
      <Header/>
      <Outlet/>
      <Footer/>
    </div>
  )
}

export default Layout
