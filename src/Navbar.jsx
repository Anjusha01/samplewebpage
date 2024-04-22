import React from 'react'

export const Navbar = () => {
  return (
    <nav>
        <ul className='nav'>
            <li className='navlink'>
                <a href="/">Home</a>
            </li >
            <li className='navlink'>
                <a href="/about">About</a>
            </li>
            <li className='navlink'>
                 <a href="/contact">Contact</a>
            </li>
        </ul>
    </nav>
  )
}
