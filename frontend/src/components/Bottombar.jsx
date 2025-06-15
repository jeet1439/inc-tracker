import React from 'react';
import './Bottombar.css';
import { FaHome, FaWallet, FaThLarge, FaStore, FaEllipsisH } from 'react-icons/fa';

export default function Bottombar() {
  return (
    <div className="bottombar">
      <div className="bar-item">
        <FaHome />
        <span>Home</span>
      </div>
      <div className="bar-item">
        <FaWallet />
        <span>Wallet</span>
      </div>
      <div className="bar-item app">
        <FaThLarge />
        <span>App</span>
      </div>
      <div className="bar-item">
        <FaStore />
        <span>Market</span>
      </div>
      <div className="bar-item">
        <FaEllipsisH />
        <span>More</span>
      </div>
    </div>
  );
}
