const https = require('https');
const fs = require('fs');
const path = require('path');

const images = [
  {
    url: 'https://images.unsplash.com/photo-1585747860715-2ba37e788b70',
    filename: 'hero-bg.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1599351431202-1e0f0137899a',
    filename: 'about-1.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1599351431202-1e0f0137899a',
    filename: 'about-2.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1599351431202-1e0f0137899a',
    filename: 'service-1.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1599351431202-1e0f0137899a',
    filename: 'service-2.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1599351431202-1e0f0137899a',
    filename: 'service-3.jpg'
  }
];

const publicDir = path.join(__dirname, '..', 'public');

if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir);
}

images.forEach(image => {
  const file = fs.createWriteStream(path.join(publicDir, image.filename));
  https.get(image.url, response => {
    response.pipe(file);
  });
}); 