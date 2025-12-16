import React from 'react'
import Navbar from './components/Navbar.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <div className='min-h-screen flex flex-col'>
        <Navbar/>
        <main className='flex-1 bg-gray-50 p-6'>
          <Routes>
            {/* <Route path='/' element={<Navbar/>}/>
            <Route path='/' element={<Navbar/>}/>
            <Route path='/' element={<Navbar/>}/> */}
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  )
}

export default App