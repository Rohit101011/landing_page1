'use client';

import Image from 'next/image';

export default function About() {
  return (
    <section className="py-20 bg-gray-100" id="about">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left side - Images */}
          <div className="relative h-[600px]" data-aos="fade-right">
            <div className="absolute top-0 left-0 w-3/4 h-4/5">
              <Image
                src="https://images.unsplash.com/photo-1599351431202-1e0f0137899a?q=80&w=2070"
                alt="Barber Shop Interior"
                fill
                className="object-cover rounded-lg shadow-xl"
              />
            </div>
            <div className="absolute bottom-0 right-0 w-3/4 h-4/5">
              <Image
                src="https://images.unsplash.com/photo-1585747860715-2ba37e788b70?q=80&w=2070"
                alt="Barber at Work"
                fill
                className="object-cover rounded-lg shadow-xl"
              />
            </div>
          </div>

          {/* Right side - Content */}
          <div className="space-y-6" data-aos="fade-left">
            <h2 className="text-4xl font-bold text-gray-800">About Us</h2>
            <p className="text-lg text-gray-600">
              Welcome to Empire Details, your premier barber shop in Watauga, TX. 
              We specialize in delivering exceptional grooming services with a focus 
              on precision and style. Our experienced barbers are dedicated to 
              providing you with the perfect look you desire.
            </p>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-amber-500 rounded-full flex items-center justify-center">
                  <span className="text-2xl">⭐</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">4.7 Rating</h3>
                  <p className="text-gray-600">Based on customer reviews</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-amber-500 rounded-full flex items-center justify-center">
                  <span className="text-2xl">✂️</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">Expert Barbers</h3>
                  <p className="text-gray-600">Professional and experienced team</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 