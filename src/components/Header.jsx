import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <>
    <header className='firstHeader'>
        <Link className='logo' to='/'>Blog</Link>
        <nav>
          <Link to='/login'>Login</Link>
          <Link to='/register'>Register</Link>
        </nav>
      </header>
    </>
  )
}
