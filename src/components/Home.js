import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="text-light bg-dark">
      {/* Hero Banner */}
      <section className="text-center position-relative">
        <img
          src="https://images.unsplash.com/photo-1506744038136-46273834b3fb"
          alt="Hero"
          className="img-fluid w-100"
          style={{ maxHeight: '90vh', objectFit: 'cover', opacity: 0.7 }}
        />
        <div className="position-absolute top-50 start-50 translate-middle text-white">
          <h1 className="display-4 fw-bold">Abhinav's Lens</h1>
          <p className="lead">Capturing stillness in a moving world</p>
          <Link to="/gallery" className="btn btn-outline-light mt-3">Explore Gallery</Link>
        </div>
      </section>

      {/* Categories */}
      <section className="container py-5">
        <h2 className="text-center mb-4">Explore by Theme</h2>
        <div className="row g-4">
          {[
            {
              title: 'Landscapes',
              img: 'https://images.pexels.com/photos/417173/pexels-photo-417173.jpeg'
            },
            {
              title: 'Temples & Heritage',
              img: 'https://images.pexels.com/photos/2087391/pexels-photo-2087391.jpeg'
            },
            {
              title: 'Urban Streets',
              img: 'https://images.pexels.com/photos/373912/pexels-photo-373912.jpeg'
            }
          ].map((cat, idx) => (
            <div className="col-md-4" key={idx}>
              <div className="card bg-dark border-light">
                <img src={cat.img} className="card-img-top" alt={cat.title} />
                <div className="card-body">
                  <h5 className="card-title text-white">{cat.title}</h5>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* About */}
      <section className="bg-secondary py-5 text-center">
        <div className="container">
          <h2 className="mb-3">Behind the Lens</h2>
          <p className="lead">
            I'm Abhinav — a developer by day, light-chaser by heart. This site is my way of sharing the moments that made me pause.
          </p>
        </div>
      </section>

      {/* Call to Action */}
      <section className="text-center py-5">
        <h3>Want to own a print?</h3>
        <p>Browse the gallery and send a request — I’ll take care of the rest.</p>
        <Link to="/gallery" className="btn btn-outline-light">View Gallery</Link>
      </section>
    </div>
  );
};

export default Home;
