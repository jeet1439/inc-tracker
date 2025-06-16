import React from 'react'
import './Home.css';
import Bottombar from '../components/Bottombar.jsx';
import Stocks from '../components/Stocks.jsx';
import { FaBell } from 'react-icons/fa';

export default function Home() {
  let currentuser = "jeet_banik";
  const stockData = [
    { name: 'Rose', quantity: '32.5kg', image: 'coin.png' },
    { name: 'Lily', quantity: '20kg', image: 'coin2.png' },
    { name: 'Tulip', quantity: '15kg', image: 'coin.png' },
    { name: 'Jasmine', quantity: '25kg', image: 'coin2.png' },
    { name: 'Marigold', quantity: '40kg', image: 'coin.png' },
    { name: 'Rose', quantity: '32.5kg', image: 'coin.png' },
    { name: 'Lily', quantity: '20kg', image: 'coin2.png' },
    { name: 'Tulip', quantity: '15kg', image: 'coin.png' },
    { name: 'Jasmine', quantity: '25kg', image: 'coin2.png' },
    { name: 'Marigold', quantity: '40kg', image: 'coin.png' },
  ];
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
      <div className="stock-add">
        <p>Stocks</p>
        <button>Add New</button>
      </div>
      <div className="stock-slider-container">
      <div className="stock-section">
        {stockData.map((item, index) => (
          <Stocks key={index} name={item.name} quantity={item.quantity} image={item.image} />
        ))}
      </div>
      </div>
      
      <Bottombar/>
    </div>
    </>
  )
}
