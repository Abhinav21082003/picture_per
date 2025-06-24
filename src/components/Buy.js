import React from 'react';
import { Link } from 'react-router-dom';
import './Buy.css';

function Buy() {
  const images = [
    'https://images.pexels.com/photos/417173/pexels-photo-417173.jpeg',
    'https://images.unsplash.com/photo-1506744038136-46273834b3fb',
    'https://images.pexels.com/photos/2087391/pexels-photo-2087391.jpeg',
    'https://images.unsplash.com/photo-1523413651479-597eb2da0ad6',
    'https://images.pexels.com/photos/373912/pexels-photo-373912.jpeg',
    'https://images.unsplash.com/photo-1504198453319-5ce911bafcde',
    'https://images.pexels.com/photos/3408744/pexels-photo-3408744.jpeg',
    'https://images.unsplash.com/photo-1499084732479-de2c02d45fc4',
    'https://images.pexels.com/photos/167699/pexels-photo-167699.jpeg',
  ];

  return (
    <div className="buy-wrapper">
      <div className="top-bar">
        <div className="container">
          <Link to="/buy/photos" className="portfolio-link">Buy Photos</Link>
        </div>
      </div>

      <header className="header">
        <h1>My Portfolio</h1>
        <p>In investing, you get what you don't pay for...</p>
      </header>

      <section className="slideshow">
        <div className="carousel-container">
          <div className="carousel">
            {images.map((img, i) => (
              <figure
                key={i}
                className="carousel-image"
                style={{ transform: `rotateY(${i * 40}deg) translateZ(300px)` }}
              >
                <img src={img} alt={`photo-${i}`} />
              </figure>
            ))}
          </div>
        </div>
      </section>

      <footer>
        <p>&copy; Picture Perfect Photography Portfolio. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Buy;
