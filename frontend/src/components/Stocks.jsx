import React from 'react'
import './Stocks.css';
export default function Stocks({name, quantity, image}) {
  return (
    <div className='stock-box'>
        <img src={image} alt="coin" />
        <div className='stock'>
            <div className="name">{name}</div>
           <div className="quantity">{quantity}</div>
        </div>
    </div>
  )
}
