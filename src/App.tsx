import React, { useState, FC } from 'react'
import { useRoutes } from 'react-router-dom'

import NavBar from './layouts/NavBar'
import SideBar from './layouts/SideBar'
import Body from './pages/Body'
import Brake from './pages/Brake'
import Engine from './pages/Engine'
import Exhaust from './pages/Exhaust'
import Gearbox from './pages/Gearbox'
import Home from './pages/Home'
import NotFound404 from './pages/NotFound404'
import ShockAbsrober from './pages/ShockAbsorber'
import Vector from './pages/Vector'

const App: FC = () => {
  const routes = useRoutes([
    {
      path: "", element: <Home />
    },
    {
      path: "body/*",
      element: <Body />
    },
    {
      path: "brake/*",
      element: <Brake />
    },
    {
      path: "engine/*",
      element: <Engine />
    },
    {
      path: "exhaust/*",
      element: <Exhaust />
    },
    {
      path: "gearbox/*",
      element: <Gearbox />
    },
    {
      path: "shockabsorber/*",
      element: <ShockAbsrober />
    },
    {
      path: "vector/*",
      element: <Vector />
    },
    {
      path: "*",
      element: <NotFound404 />
    }
  ])

  return (
    <div className="fixed h-screen w-screen bg-neutral-50 flex flex-col">
      <NavBar />
      <div className="flex">
        <SideBar />
        <div className="fixed top-24 left-72 w-full h-full ml-8">{routes}</div>
      </div>
    </div>
  )
}

export default App
