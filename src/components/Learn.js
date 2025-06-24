import React, { useState, useEffect } from 'react';

function Learn() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % tips.length);
    }, 2000); // Change tip every 5 seconds

    return () => clearInterval(timer);
  }, []);

  const tip = tips[currentIndex];

  return (
    <div className="container text-light py-4">
      <header className="bg-dark text-center py-4 mb-4">
        <h1 className="fw-light fs-3 text-uppercase">How to Take Good Photos with a Phone</h1>
        <p className="text-secondary small">11 Killer Tips</p>
      </header>

      <section className="mb-5 text-center">
        <h5 className="text-warning mb-3">{`${currentIndex + 1}. ${tip.title}`}</h5>
        {tip.description.map((line, i) => (
          <p className="mb-2 small" key={i}>{line}</p>
        ))}
        {tip.images.map((img, i) => (
          <img
            key={i}
            src={img}
            alt={`Tip ${currentIndex + 1}`}
            className="img-fluid rounded mb-3"
            style={{ maxWidth: '400px', height: 'auto' }}
          />
        ))}
      </section>

      <footer className="text-center py-3 bg-dark border-top border-secondary small">
        &copy; asdfghjkl.
      </footer>
    </div>
  );
}

const tips = [
    {
      title: 'Capture Multiple Shots',
      description: ['Use burst mode to capture multiple shots and select the best one.'],
      images: ['https://images.squarespace-cdn.com/content/v1/5824673c2e69cfc8ac1e3cd3/1580311422870-CZU1LGH2F9CC5JXYW7M4/Water+balloon+bursting+in+action?format=1500w']
    },
    {
      title: 'Learn What Your Camera Can Do',
      description: ['Explore different camera modes (Portrait, Food, Macro, Panorama, Pro).', 'Adjust settings for highest quality images.'],
      images: ['https://images.squarespace-cdn.com/content/v1/5824673c2e69cfc8ac1e3cd3/1580984985460-J6IJ505I82YDGFDTCTC7/Camera+settings+on+a+smartphone?format=500w']
    },
    {
      title: 'Use Natural Light',
      description: ['Prefer outdoor shots for better lighting and mood.'],
      images: ['https://images.squarespace-cdn.com/content/v1/5824673c2e69cfc8ac1e3cd3/1580377764933-1L0AVRF4MU86B18J3S4A/Picture+of+woodlands+taken+on+iphone+using+natural+light?format=1500w']
    },
    {
      title: 'Avoid Digital Zoom',
      description: ['Move closer instead of using digital zoom to maintain image quality.'],
      images: ['https://images.squarespace-cdn.com/content/v1/5824673c2e69cfc8ac1e3cd3/73d7e49a-0d41-4fa9-9339-abebaadd09f6/Photo+by+Chelaxy+Designs+on+Unsplash+2000px-60.jpg?format=500w']
    },
    {
      title: 'Use HDR Mode',
      description: ['Enhance details in both dark and light areas for balanced exposure.'],
      images: ['https://images.squarespace-cdn.com/content/v1/5824673c2e69cfc8ac1e3cd3/1580377799020-3Q2M0QJX3Z48DPSIUMK9/Sunset+though+trees+using+HDR?format=1500w']
    },
    {
      title: 'Use Editing Tools',
      description: ['Edit photos using built-in or advanced apps like Lightroom and Photoshop.'],
      images: [
        'https://images.squarespace-cdn.com/content/v1/5824673c2e69cfc8ac1e3cd3/1580299850776-5H5G1FKI7KYZLGNRS0BH/Close+up+portrait+shot+with+no+lightroom+preset?format=750w',
        'https://images.squarespace-cdn.com/content/v1/5824673c2e69cfc8ac1e3cd3/1580299876925-POSUM445GDYRYH42AEXL/Portrait+close+up+head+shot+with+lightroom+preset?format=750w'
      ]
    },
    {
      title: 'Apply Compositional Rules',
      description: ['Implement rules like the Rule of Thirds, Leading Lines, Symmetry, and Negative Space.'],
      images: ['https://images.squarespace-cdn.com/content/v1/5824673c2e69cfc8ac1e3cd3/1580377133882-TWDB6XSDNDMR00TU8ASA/Mobile+phone+with+rule+of+thirds+taking+picture+of+city?format=1500w']
    },
    {
      title: 'Stabilize Your Phone in Dark Conditions',
      description: ['Rest your phone on a flat surface to avoid camera shake.'],
      images: ['https://images.squarespace-cdn.com/content/v1/5824673c2e69cfc8ac1e3cd3/1580376417127-VP06EVONIV67LHQH22X9/music+venue+o2+picture+of+stage+with+audience+taken+with+phone?format=1500w']
    },
    {
      title: 'Download Better Apps',
      description: ['Use apps like VSCO Cam, Snapseed, Instagram, Flickr, Lightroom, and Photopills.'],
      images: ['https://images.ctfassets.net/lzny33ho1g45/317bZQRbbJ8R4HIWpgwbpd/dc62190ab80cf95b3dc3a06ba08b670a/best-photo-editing-apps-iphone-android.jpg?w=1520&fm=avif&q=30&fit=thumb&h=760']
    },
    {
      title: 'Use Additional Accessories',
      description: ['Enhance your photography with lenses, tripods, lights, and filters.'],
      images: ['https://lightroom-photoshop-tutorials.com/wp-content/uploads/2020/11/Essential-Mobile-Photography-Accessories-1536x878.webp']
    },
    {
      title: 'Upgrade Your Phone',
      description: ['Consider upgrading to phones with better cameras like NOTHING phones, Google Pixel, iPhone, or Samsung Galaxy S series.'],
      images: ['https://i.ytimg.com/vi/Ck2qiZGmvek/maxresdefault.jpg']
    }
  ];

export default Learn;
