import React from 'react'
import homelogo from '../assets/aida.png'
import mindlogo from '../assets/m1.png'

export default function Header() {
  return (
    <header>
        <h1>
            AIDA 
        </h1>
        <h2>Artifical Intelligence Direct to Application</h2>
        <img className = "home-logo" src={homelogo} />
        <img className='mind-logo' src={mindlogo} loop='infinite' alt='mind-logo'/>
  
    </header>
  )
}
//name duration timing-function delay iteration-count direction fill-mode;
