import React from 'react'

const Sign = () => {
  return (
    <div className='container'>
        <h1>Login</h1>
        <p>Username: <input type="text" placeholder='Enter your username:'/></p>
        <p>Password: <input type="password" placeholder='enter your password'/></p>
    </div>
  )
}

export default Sign