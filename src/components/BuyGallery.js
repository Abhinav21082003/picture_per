import React from 'react';
import { Link } from 'react-router-dom';
import './BuyGallery.css';

function BuyGallery() {
  const photos = [
    { id: '0', src: '20210710_180513.jpg', title: 'Golden Hour Hillside', price: '₹1500' },
    { id: '1', src: '20210730_164514-01 (1).jpg', title: 'Morning Light', price: '₹1400' },
    { id: '2', src: '20220301_181907.jpg', title: 'Evening Glow', price: '₹1600' },
    { id: '3', src: 'DSC_3426.jpg', title: 'Temple Tranquility', price: '₹2000' },
    { id: '4', src: 'IMG_1325.jpg', title: 'Urban Monsoon', price: '₹1300' },
    { id: '5', src: 'IMG_4193.jpg', title: 'Lakeside Vibe', price: '₹1800' },
    { id: '6', src: '20210821_104056.jpg', title: 'Serene Path', price: '₹1700' },
    { id: '7', src: 'P_20201029_081508.jpg', title: 'Foggy Morning', price: '₹1500' },
    { id: '8', src: 'temple.jpg', title: 'Temple Majesty', price: '₹2100' },
  ];

  return (
    <div className="buy-gallery-wrapper">
      <h2 className="page-title">Buy Photos</h2>
      <div className="gallery-grid">
        {photos.map((photo) => (
          <div key={photo.id} className="photo-card">
            <Link to={`/buy/photos/${photo.id}`}>
              <img src={`/image/${photo.src}`} alt={photo.title} />
              <div className="hover-overlay">U want this</div>
            </Link>
            <h5>{photo.title}</h5>
            <p className="price">{photo.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BuyGallery;
