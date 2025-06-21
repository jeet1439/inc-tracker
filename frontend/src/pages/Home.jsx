import React from 'react'
import './Home.css';
import Bottombar from '../components/Bottombar.jsx';
import Stocks from '../components/Stocks.jsx';
import { FaBell } from 'react-icons/fa';
import Ledgure from '../components/Ledgure.jsx';

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

  const vendors = [
    {
      name: 'Raj singh',
      quantity: '0.0032BTC',
      location: 'kolkata',
      difference: 10000,
      image: '/images/bitcoin.png', // Path to image
    },
    {
      name: 'Sourav saha',
      quantity: '00.0093ETH',
      location: 'Ekolkata',
      difference: 100000,
      image: '/images/eth.png',
    },
    {
      name: 'Anik biswas',
      quantity: '1.00USDT',
      location: 'kolkata',
      difference: -50000,
      image: '/images/usdt.png',
    },
      {
      name: 'Jeet kbanik',
      quantity: '0.0032BTC',
      location: 'kolkata',
      difference: -10000,
      image: '/images/bitcoin.png', // Path to image
    },
    {
      name: 'Pritam das',
      quantity: '00.0093ETH',
      location: 'kolkata',
      difference: 210000,
      image: '/images/eth.png',
    },
    {
      name: 'Raja dey',
      quantity: '1.00USDT',
      location: 'kolkata',
      difference: -410000,
      image: '/images/usdt.png',
    },
    {
      name: 'Abc roy',
      quantity: '1.00USDT',
      location: 'kolkata',
      difference: 10000,
      image: '/images/usdt.png',
    },
  ];

  return (
    <>
    <div className='background'>
      <div className='profile'>
        <div className="button-box">
        <div className="auth"><button className='auth-btn'><img src="/app.png" alt="auth"/></button>{currentuser}{' ▼'}</div>
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
      <div className="stock-add">
        <p>Ledgure</p>
        <button>Add New</button>
      </div>
      <div className="ledgure">
       <Ledgure vendors={vendors} />
      </div>
      <Bottombar/>
    </div>
    </>
  )
}
