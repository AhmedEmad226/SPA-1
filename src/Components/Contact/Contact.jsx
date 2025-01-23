import React from 'react';
import style from './Contact.module.css';

export default function Contact() {
  return <>
    <div className="container">
      <div>
        <h2 className={`${style.contactTitle}`}>Contact Component</h2>
        <i className="fas fa-star fa-1x text-center d-block w-100 py-3" style={{ color: 'rgb(43, 61, 79)' }}></i>
      </div>
    </div>

<div className="d-flex justify-content-center align-items-center" style={{flexDirection:'column'}}>
  <label htmlFor="name">your Name</label>
    <input className='my-4 py-2 form-control w-50' placeholder='UserName' name='userName' type="text" />
    <label htmlFor="age">your age</label>
    <input className='my-4 py-2 form-control w-50' placeholder='UserName' name='userAge' type="text" />
    <label htmlFor="email">your email</label>
    <input className='my-4 py-2 form-control w-50' placeholder='UserName' name='userEmail' type="text" />
    <label htmlFor="password">your password</label>
    <input className='my-4 py-2 form-control w-50' placeholder='UserName' name='userPassword' type="text" />
  <button className='btn btn-success text-start'>Send message</button>
</div>
</>
}
