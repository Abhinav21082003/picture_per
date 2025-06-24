import React from 'react';
import { useParams } from 'react-router-dom';
// import './PhotoDetail.css';

const photos = [
  { id: '0', src: '20210710_180513.jpg', title: 'Golden Hour Hillside', price: '₹1500' },
  { id: '1', src: '20210730_164514-01 (1).jpg', title: 'Morning Light', price: '₹1400' },
  { id: '2', src: '20220301_181907.jpg', title: 'Evening Glow', price: '₹1600' },
  { id: '3', src: 'DSC_3426.jpg', title: 'Temple Tranquility', price: '₹2000' },
  { id: '4', src: 'IMG_1325.jpg', title: 'Urban Monsoon', price: '₹1300' },
  { id: '5', src: 'IMG_4193.jpg', title: 'Lakeside Vibe', price: '₹1800' },
  { id: '6', src: '20210821_104056.jpg', title: 'Serene Path', price: '₹1700' },
  { id: '7', src: 'P_20201029_081508.jpg', title: 'Foggy Morning', price: '₹1500' },
  { id: '8', src: 'temple.jpg', title: 'Temple Majesty', price: '₹2100' }
];

function PhotoDetail() {
  const { photoId } = useParams();
  const photo = photos.find((p) => p.id === photoId);

  const sendEmail = (e) => {
    e.preventDefault();
    const formData = {
      from_name: e.target.from_name.value,
      user_email: e.target.user_email.value,
      message: e.target.message.value,
      selected_photo: photo.title,
    };

    fetch('http://localhost:3000/send', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    })
      .then((res) => {
        if (res.ok) {
          alert('Message sent to Abhinav successfully!');
          e.target.reset();
        } else {
          alert('Failed to send message.');
        }
      })
      .catch((err) => {
        console.error(err);
        alert('Network error. Try again.');
      });
  };

  if (!photo) return <p className="text-center text-light">Photo not found</p>;

  return (
    <div className="photo-detail text-light p-4">
      <h2 className="text-center mb-3">{photo.title}</h2>
      <div className="text-center mb-4">
        <img src={`/image/${photo.src}`} alt={photo.title} className="img-fluid rounded" style={{ maxWidth: '500px' }} />
        <p className="mt-2">{photo.price}</p>
      </div>

      <form onSubmit={sendEmail} className="mx-auto" style={{ maxWidth: '500px' }}>
        <input type="hidden" name="selected_photo" value={photo.title} />
        <input type="text" name="from_name" placeholder="Your Name" required className="form-control mb-2" />
        <input type="email" name="user_email" placeholder="Your Email" required className="form-control mb-2" />
        <textarea name="message" placeholder="Your Message" required className="form-control mb-3" />
        <button type="submit" className="btn btn-outline-light w-100">Send Request</button>
      </form>
    </div>
  );
}

export default PhotoDetail;
