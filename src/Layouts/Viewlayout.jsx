import React from 'react'
import { Header } from '../Components/Header/Header'
import { Outlet } from 'react-router-dom'

export const Viewlayout = () => {
  return (
    <div>
        <Header/>
        <Outlet/>
        <div className="pt-4">
            <h1>Footer View Layout</h1>
        </div>
    </div>
  )
}
