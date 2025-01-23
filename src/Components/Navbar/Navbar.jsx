import React, { useState } from 'react'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../../../node_modules/bootstrap/dist/js/bootstrap.min.js'
import style from './Navbar.module.css'
import { NavLink } from 'react-router-dom'

export default function Navbar() {

const [activeBtn, setActiveBtn] = useState(null)

function handleClickedBtn(index){
  setActiveBtn(index)
}

  return (
    <>
      <nav className={`navbar navbar-expand-lg ${style.mainNavbar}`}>
        <NavLink className={`navbar-brand text-uppercase ${style.logo}`} to={'/'}>start framework</NavLink>
        <button className={`navbar-toggler`} type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className={`navbar-toggler-icon`} />
        </button>

        <div className={`collapse navbar-collapse d-flex justify-content-end`} id="navbarNav">
          <ul className={`navbar-nav`}>

        {
          ['about' , 'portfolio' , 'contact'].map((lable, index)=>{ 
            return <li className={`nav-item active`}>
              <NavLink onClick={()=> {handleClickedBtn(index)}} key={index} className={`nav-link mx-3 ${style.navText} ${activeBtn == index? style.navTextFocus : ''}`} to={lable}>{lable}<span className="sr-only">(current)</span></NavLink>
            </li>
          })
        }

          </ul>
        </div>
      </nav>
    </>
  )
}
