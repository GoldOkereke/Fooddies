import { Routes, Route } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'

function App() {
  return ( 

    <div>
      {/* display navbar */}
      <Navbar />
      <main className = "p-4">
        App content
      </main>
    </div>

  )
}

export default App
