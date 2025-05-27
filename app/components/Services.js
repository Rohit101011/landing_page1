'use client';

import Image from 'next/image';

const services = [
  {
    title: 'Low Fade',
    description: 'A modern, clean cut that gradually fades from short to long.',
    image: 'https://images.unsplash.com/photo-1599351431202-1e0f0137899a?q=80&w=2070',
  },
  {
    title: 'Beard Trim',
    description: 'Professional beard shaping and trimming for a polished look.',
    image: '/images/beard-trim.jpg',
  },
  {
    title: 'Line Up',
    description: 'Precise edging and shaping for a sharp, defined appearance.',
    image: '/images/line-up.jpg',
  },
];

export default function Services() {
  return (
    <section className="py-20 bg-white" id="services">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Services</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Experience premium grooming services delivered by our expert barbers
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-xl shadow-lg"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="relative h-64">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 transition-opacity duration-300 group-hover:bg-opacity-50" />
              </div>
              <div className="p-6 bg-white">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12" data-aos="fade-up">
          <button className="bg-amber-500 text-black px-8 py-3 rounded-full text-lg font-semibold hover:bg-amber-400 transition-colors">
            Book Now
          </button>
        </div>
      </div>
    </section>
  );
} 