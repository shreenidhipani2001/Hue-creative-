'use client';

const testimonials = [
  {
    id: 1,
    name: 'Rajesh Kumar',
    company: 'Patanjali',
    role: 'Marketing Director',
    rating: 5,
    text: 'EventMasters transformed our product launch into an unforgettable experience. Their attention to detail and creative approach exceeded all expectations!',
    avatar: '👨‍💼',
  },
  {
    id: 2,
    name: 'Sarah Johnson',
    company: 'Hyundai',
    role: 'Brand Manager',
    rating: 5,
    text: 'Outstanding service! The stage design was spectacular and the event coordination was flawless. Highly recommend for any corporate event.',
    avatar: '👩‍💼',
  },
  {
    id: 3,
    name: 'David Chen',
    company: 'Oppo',
    role: 'Events Head',
    rating: 5,
    text: 'Professional, creative, and incredibly responsive. They brought our vision to life and managed every aspect perfectly.',
    avatar: '👨‍💻',
  },
  {
    id: 4,
    name: 'Priya Sharma',
    company: 'Shyam Steel',
    role: 'Operations Manager',
    rating: 5,
    text: 'The printing quality and store branding work was exceptional. EventMasters is our go-to partner for all events and branding needs.',
    avatar: '👩‍🔧',
  },
  {
    id: 5,
    name: 'Michael Brown',
    company: 'Amazon',
    role: 'Regional Director',
    rating: 5,
    text: 'Impeccable execution from start to finish. The team\'s creativity and professionalism made our trade show a massive success.',
    avatar: '👨‍💼',
  },
  {
    id: 6,
    name: 'Anita Desai',
    company: 'Samsung',
    role: 'Corporate Events Lead',
    rating: 5,
    text: 'Best event management company we\'ve worked with. They understand our brand and deliver beyond expectations every single time.',
    avatar: '👩‍💼',
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-indigo-900 to-purple-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-12">
        <h2 className="text-5xl font-bold text-white text-center mb-4">
          What Our Clients <span className="bg-gradient-to-r from-yellow-400 to-pink-400 bg-clip-text text-transparent">Say</span>
        </h2>
        <p className="text-purple-300 text-xl text-center">
          Don&apos;t just take our word for it - hear from our satisfied clients
        </p>
      </div>

      <div className="relative">
        {/* First row - moving left to right */}
        <div className="mb-8">
          <div className="flex space-x-6 animate-scroll-left">
            {/* First set */}
            {testimonials.slice(0, 3).map((testimonial) => (
              <div
                key={`row1-first-${testimonial.id}`}
                className="flex-shrink-0 w-96 bg-white/10 backdrop-blur-lg rounded-2xl p-6 hover:bg-white/20 transition-all duration-300 hover:scale-105 border border-white/20 shadow-xl"
              >
                <div className="flex items-center mb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-purple-600 rounded-full flex items-center justify-center text-3xl mr-4">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-lg">{testimonial.name}</h4>
                    <p className="text-purple-300 text-sm">{testimonial.role}</p>
                    <p className="text-pink-400 text-sm font-semibold">{testimonial.company}</p>
                  </div>
                </div>

                {/* Star rating */}
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, index) => (
                    <svg
                      key={index}
                      className="w-5 h-5 text-yellow-400 fill-current"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                  ))}
                </div>

                <p className="text-gray-300 leading-relaxed">{testimonial.text}</p>
              </div>
            ))}
            {/* Duplicate for seamless loop */}
            {testimonials.slice(0, 3).map((testimonial) => (
              <div
                key={`row1-second-${testimonial.id}`}
                className="flex-shrink-0 w-96 bg-white/10 backdrop-blur-lg rounded-2xl p-6 hover:bg-white/20 transition-all duration-300 hover:scale-105 border border-white/20 shadow-xl"
              >
                <div className="flex items-center mb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-purple-600 rounded-full flex items-center justify-center text-3xl mr-4">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-lg">{testimonial.name}</h4>
                    <p className="text-purple-300 text-sm">{testimonial.role}</p>
                    <p className="text-pink-400 text-sm font-semibold">{testimonial.company}</p>
                  </div>
                </div>

                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, index) => (
                    <svg
                      key={index}
                      className="w-5 h-5 text-yellow-400 fill-current"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                  ))}
                </div>

                <p className="text-gray-300 leading-relaxed">{testimonial.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Second row - moving right to left */}
        <div>
          <div className="flex space-x-6 animate-scroll-right">
            {/* First set */}
            {testimonials.slice(3, 6).map((testimonial) => (
              <div
                key={`row2-first-${testimonial.id}`}
                className="flex-shrink-0 w-96 bg-white/10 backdrop-blur-lg rounded-2xl p-6 hover:bg-white/20 transition-all duration-300 hover:scale-105 border border-white/20 shadow-xl"
              >
                <div className="flex items-center mb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-full flex items-center justify-center text-3xl mr-4">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-lg">{testimonial.name}</h4>
                    <p className="text-purple-300 text-sm">{testimonial.role}</p>
                    <p className="text-cyan-400 text-sm font-semibold">{testimonial.company}</p>
                  </div>
                </div>

                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, index) => (
                    <svg
                      key={index}
                      className="w-5 h-5 text-yellow-400 fill-current"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                  ))}
                </div>

                <p className="text-gray-300 leading-relaxed">{testimonial.text}</p>
              </div>
            ))}
            {/* Duplicate for seamless loop */}
            {testimonials.slice(3, 6).map((testimonial) => (
              <div
                key={`row2-second-${testimonial.id}`}
                className="flex-shrink-0 w-96 bg-white/10 backdrop-blur-lg rounded-2xl p-6 hover:bg-white/20 transition-all duration-300 hover:scale-105 border border-white/20 shadow-xl"
              >
                <div className="flex items-center mb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-full flex items-center justify-center text-3xl mr-4">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-lg">{testimonial.name}</h4>
                    <p className="text-purple-300 text-sm">{testimonial.role}</p>
                    <p className="text-cyan-400 text-sm font-semibold">{testimonial.company}</p>
                  </div>
                </div>

                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, index) => (
                    <svg
                      key={index}
                      className="w-5 h-5 text-yellow-400 fill-current"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                  ))}
                </div>

                <p className="text-gray-300 leading-relaxed">{testimonial.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Gradient overlays */}
        <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-slate-900 to-transparent pointer-events-none"></div>
        <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-purple-900 to-transparent pointer-events-none"></div>
      </div>
    </section>
  );
}
