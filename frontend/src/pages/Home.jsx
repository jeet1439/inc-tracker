import React from 'react'
import './Home.css';

export default function Home() {
  return (
    <>
    <div className='background'>
      
      <div className='profile'>
        <div className="login-button-box">
        <button className='auth-btn'><img src="/app.png" alt="auth"/></button>
        <button>0</button>
        </div>
        <p>Hey user welcome to your profile, Here top 3 controls over CISO over the like hood of prediction</p>
      </div>
    </div>
    </>
  )
}
