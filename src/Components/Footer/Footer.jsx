import React from 'react'
import style from './Footer.module.css'

export default function Footer() {

    return <>
    <div className={`container-fluid text-center p-5 ${style.bgDarkBlue}`}>
        <div className="row">
            <div className="col">
                <h2 className='text-uppercase'>location</h2>

                <p>2215 John Daniel Drive</p>
                <p>Clark, MO 65243</p>

            </div>
            <div className="col">
            <h2 className='text-uppercase'>around the web</h2>
                <div className="d-flex flex-wrap justify-content-center">
                    <li className='fab fa-1x mx-1 p-2 border border-white rounded-5 fa-facebook'></li>
                    <li className='fab fa-1x mx-1 p-2 border border-white rounded-5 fa-twitter'></li>
                    <li className='fab fa-1x mx-1 p-2 border border-white rounded-5 fa-linkedin-in'></li>
                    <li className='fas fa-1x mx-1 p-2 border border-white rounded-5 fa-globe'></li>
                </div>
            </div>
            <div className="col">
            <h2 className='text-uppercase'>about freelancer</h2>
                <p>Freelance is a free to use, licensed Bootstrap theme created by Route</p>
            </div>
        </div>
    </div>

        <div className={`w-100 d-flex justify-content-center align-items-center p-4 ${style.bgDarkerBlue}`}>
            <p className='m-0'>Copyright © Your Website 2021</p>
        </div>

    </>

}
