import React from 'react'
import style from './About.module.css'

export default function About() {
  return <>

<div className={`container-fluid d-flex flex-column justify-content-center align-items-center p-5 text-center ${style.bgGreen}`}>
  <div className="row w-100">
    <h1 className="col-12 text-uppercase fw-bold">About Component</h1>
    <div className="frame position-relative d-flex justify-content-center align-items-center my-3">
      <div className={`${style.line} ${style.left}`}></div>
      <li className="fas fa-star mx-2"></li>
      <div className={`${style.line} ${style.right}`}></div>
    </div>
  </div>

  <div className="row d-flex justify-content-center align-items-center mt-4 w-100">
    <div className="col-lg-5 col-md-6">
      <p>
        Freelancer is a free bootstrap theme created by Route. The download includes the complete source files
        including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.
      </p>
    </div>
    <div className="col-lg-5 col-md-6">
      <p>
        Freelancer is a free bootstrap theme created by Route. The download includes the complete source files
        including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.
      </p>
    </div>
  </div>
</div>


  
  </>
}
