import React from 'react'
import { Navbrand } from './Navbrand'
import { Navbar } from './Navbar'
import { Navbutton } from './Navbutton'

const Navgrid = () => {
  return (
    <div className='nav-grid'>
        <Navbrand/>
        <Navbar/>
        <Navbutton/>
    </div>
  )
}

export default Navgrid