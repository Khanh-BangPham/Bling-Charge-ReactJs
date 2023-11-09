import React, { FC, FunctionComponent, useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import '../../styles/header.css'
import { Button } from './Button'
import { NavLinks } from '../../store/Data'

export const Header = () => {
  const [open, setOpen] = useState(false)

  const [navBarColor, setNavBarColor] = useState(false)

  const handleToggle = () => {
      setOpen(!open)
  }

  

  return (
    <header id="header" className={`${navBarColor ? "bg-zinc-900" : " bg-transparent"}`} data-scroll-section>
    <div className="wrapper row container-fluid">
      <Link to="/" className="logo">
        <img src="/img/logo-sm.svg" alt="" />
        <h1>Bling Charge</h1>
      </Link>
      <nav className="nav">
        <ul className='row'>
          {
            NavLinks.map((navlink, index) => (
              <li key={index}>
                <NavLink to={navlink.url} onClick={handleToggle}>
                  {navlink.name}
                </NavLink>
              </li>
            ))
          }
          <li>
            <Button className='contactus' title="Contact us" bgColor='#8738EB'/>
          </li>
        </ul>
      </nav>
    </div>
  </header>
  )
}
