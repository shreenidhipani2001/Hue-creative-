'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

const events = [
  {
    id: 1,
    title: 'Corporate Product Launch',
    description: 'Stunning stage design and event coordination for major brand launches',
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80',
    category: 'Stage Design',
  },
  {
    id: 2,
    title: 'Store Branding & Design',
    description: 'Complete retail space transformation and branding solutions',
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80',
    category: 'Store Branding',
  },
  {
    id: 3,
    title: 'Graphic Design Excellence',
    description: 'Award-winning designs for print and digital media',
    image: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?w=800&q=80',
    category: 'Graphic Design',
  },
  {
    id: 4,
    title: 'Trade Show Exhibition',
    description: 'Eye-catching booth designs and complete event management',
    image: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=800&q=80',
    category: 'Event Management',
  },
  {
    id: 5,
    title: 'Premium Printing Services',
    description: 'High-quality printing for banners, brochures, and promotional materials',
    image: 'https://images.unsplash.com/photo-1612538498456-e861df91d4d0?w=800&q=80',
    category: 'Printing',
  },
];

export default function EventsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % events.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % events.length);
    setIsAutoPlaying(false);
  };

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + events.length) % events.length);
    setIsAutoPlaying(false);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
  };

  return (
    <section id="events" className="py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-white mb-4">
            What We <span className="bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">Do</span>
          </h2>
          <p className="text-purple-300 text-xl">Bringing your vision to life with creativity and expertise</p>
        </div>

        <div className="relative">
          {/* Main Carousel */}
          <div className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl">
            {events.map((event, index) => (
              <div
                key={event.id}
                className={`absolute inset-0 transition-all duration-700 ease-in-out ${
                  index === currentIndex
                    ? 'opacity-100 scale-100'
                    : 'opacity-0 scale-95 pointer-events-none'
                }`}
              >
                <div className="relative w-full h-full">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover"
                  />

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>

                  {/* Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-12">
                    <div className="mb-4">
                      <span className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                        {event.category}
                      </span>
                    </div>
                    <h3 className="text-4xl font-bold text-white mb-4">{event.title}</h3>
                    <p className="text-xl text-gray-300 max-w-2xl">{event.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={goToPrevious}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-14 h-14 bg-white/20 backdrop-blur-md hover:bg-white/40 rounded-full flex items-center justify-center transition-all duration-300 group"
          >
            <svg
              className="w-6 h-6 text-white group-hover:scale-110 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={goToNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-14 h-14 bg-white/20 backdrop-blur-md hover:bg-white/40 rounded-full flex items-center justify-center transition-all duration-300 group"
          >
            <svg
              className="w-6 h-6 text-white group-hover:scale-110 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Indicators */}
          <div className="flex justify-center space-x-3 mt-8">
            {events.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`transition-all duration-300 rounded-full ${
                  index === currentIndex
                    ? 'w-12 h-3 bg-gradient-to-r from-pink-500 to-purple-600'
                    : 'w-3 h-3 bg-white/30 hover:bg-white/50'
                }`}
              ></button>
            ))}
          </div>

          {/* Auto-play indicator */}
          <div className="text-center mt-6">
            <button
              onClick={() => setIsAutoPlaying(!isAutoPlaying)}
              className="text-white/60 hover:text-white transition-colors text-sm"
            >
              {isAutoPlaying ? '⏸ Pause Auto-play' : '▶ Resume Auto-play'}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
