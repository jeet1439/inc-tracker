import React from 'react';
import './Ledgure.css';

export default function Ledgure({ vendors }) {
  return (
    <div className="ledgure-container">
      <div className="asset-grid">
        {vendors.map((vendor, index) => (
          <div className="asset-card" key={index}>
            <div className="asset-info">
              <img src={vendor.image} alt="img" className="asset-icon" />
              <div>
                <h4>{vendor.name}</h4>
                <p className="location">{vendor.location}</p>
              </div>
            </div>
             <p className={vendor.difference >= 0 ? 'positive-diff' : 'negative-diff'}>
              {vendor.difference >= 0 ? '▲' : '▼'} {vendor.difference} ₹
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
