import { Routes, Route } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import React from 'react'
import { Button } from './components/ui/button'
import TopBanner from './components/ui/topbanner'

function App() {
  return ( 

    <div className='top-0 m-0'>
      {/* top baner */}
      <TopBanner/>
      {/* display navbar */}
      <Navbar/>
      <main className = "p-4">
        App content
      </main>
    </div>

  )
}

export default App
