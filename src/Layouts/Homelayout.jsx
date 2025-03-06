import React from 'react'
import { Header } from '../Components/Header/Header'
import { Outlet } from 'react-router-dom'
import { Footer } from '../Footer/Footer'

export const Homelayout = () => {
  return (
    <div>
        <Header/>
        <Outlet/>
        <Footer/>
    </div>
  )
}
