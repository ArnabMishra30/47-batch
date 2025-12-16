import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav className='bg-indigo-400 text-black px-6 py-4'>
      <div className='max-w-6xl mx-auto flex items-center justify-between'>
        <h1 className='text-xl font-semibold'>ToDo</h1>
        <div className='space-x-4'>
          <Link to="/" className="hover:underline">Home</Link>
          <Link to="/" className="hover:underline">Todos</Link>
          <Link to="/" className="hover:underline">Create</Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar