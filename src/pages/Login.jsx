import React from 'react'

export default function Login() {
  return (
    <>
    <form className='submit'>
        <h1>Login</h1>
        <input type="text" placeholder='username' />
        <input type="password" placeholder='password' />
        <button className='logReg'>Login</button>
    </form> 
    </>
  )
}
