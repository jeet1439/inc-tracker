import React from 'react'
import './Home.css';
import Bottombar from '../components/Bottombar.jsx';
import { FaBell } from 'react-icons/fa';

export default function Home() {
  let currentuser = "jeet_banik";
  return (
    <>
    <div className='background'>
      <div className='profile'>
        <div className="button-box">
        <div className="auth"><button className='auth-btn'><img src="/app.png" alt="auth"/></button>{currentuser}</div>
        <div className='notification'><div className='count'>1</div><FaBell size={24} color="#fff" /></div>
        </div>
        <p>Hey user welcome to your profile, Here top 3 controls over CISO over the like hood of prediction</p>
      </div>
      <Bottombar/>
    </div>
    </>
  )
}
