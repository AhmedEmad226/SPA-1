import React from 'react'
import style from './Home.module.css'

export default function Home() {
  return <>
  <div className={`d-flex justify-content-center align-items-center flex-column gap-4 ${style.bgGreen}`}>
    <div className="imageContainer">
      <img className='w-100' src="https://routeegy.github.io/startFramework/assets/images/avataaars.svg" alt="smiling kid" />
    </div>
      <h1 className='text-uppercase fw-bolder'>Start framework</h1>
      <div className="position-relative">
        <div className={`${style.before}`}></div>
        <li className={`${style.star} fa-2x fas fa-star`}></li>
        <div className={`${style.after}`}></div>
      </div>
      <p className='mb-5'>Graphic Artist - Web Designer - Illustrator</p>
  </div>
  </>
}
