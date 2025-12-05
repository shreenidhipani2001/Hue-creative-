'use client';

export default function ClientsScroller() {
  const clients = [
    { name: 'Patanjali', logo: '🌿' },
    { name: 'Hyundai', logo: '🚗' },
    { name: 'Oppo', logo: '📱' },
    { name: 'Shyam Steel', logo: '🏗️' },
    { name: 'Coca-Cola', logo: '🥤' },
    { name: 'Samsung', logo: '📺' },
    { name: 'Nike', logo: '👟' },
    { name: 'Adidas', logo: '⚽' },
    { name: 'Amazon', logo: '📦' },
    { name: 'Microsoft', logo: '💻' },
    { name: 'Google', logo: '🔍' },
    { name: 'Apple', logo: '🍎' },
    { name: 'Tesla', logo: '⚡' },
    { name: 'BMW', logo: '🏎️' },
    { name: 'Mercedes', logo: '🚙' },
    { name: 'Sony', logo: '🎮' },
    { name: 'LG', logo: '📱' },
    { name: 'HP', logo: '🖨️' },
    { name: 'Dell', logo: '💾' },
    { name: 'Intel', logo: '🔧' },
  ];

  return (
    <section className="py-20 bg-gradient-to-r from-indigo-900 via-purple-900 to-pink-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-12">
        <h2 className="text-5xl font-bold text-white text-center mb-4">
          Our Trusted <span className="bg-gradient-to-r from-pink-400 to-yellow-400 bg-clip-text text-transparent">Clients</span>
        </h2>
        <p className="text-purple-300 text-xl text-center">
          Partnering with industry leaders to create exceptional experiences
        </p>
      </div>

      {/* Infinite scrolling logos */}
      <div className="relative">
        <div className="flex space-x-8 animate-scroll">
          {/* First set */}
          {clients.map((client, index) => (
            <div
              key={`first-${index}`}
              className="flex-shrink-0 w-48 h-32 bg-white/10 backdrop-blur-md rounded-2xl flex flex-col items-center justify-center hover:bg-white/20 transition-all duration-300 hover:scale-110 shadow-lg border border-white/20"
            >
              <div className="text-5xl mb-2">{client.logo}</div>
              <div className="text-white font-semibold text-center px-2">{client.name}</div>
            </div>
          ))}
          {/* Duplicate set for seamless loop */}
          {clients.map((client, index) => (
            <div
              key={`second-${index}`}
              className="flex-shrink-0 w-48 h-32 bg-white/10 backdrop-blur-md rounded-2xl flex flex-col items-center justify-center hover:bg-white/20 transition-all duration-300 hover:scale-110 shadow-lg border border-white/20"
            >
              <div className="text-5xl mb-2">{client.logo}</div>
              <div className="text-white font-semibold text-center px-2">{client.name}</div>
            </div>
          ))}
          {/* Third set for extra smooth scrolling */}
          {clients.map((client, index) => (
            <div
              key={`third-${index}`}
              className="flex-shrink-0 w-48 h-32 bg-white/10 backdrop-blur-md rounded-2xl flex flex-col items-center justify-center hover:bg-white/20 transition-all duration-300 hover:scale-110 shadow-lg border border-white/20"
            >
              <div className="text-5xl mb-2">{client.logo}</div>
              <div className="text-white font-semibold text-center px-2">{client.name}</div>
            </div>
          ))}
        </div>

        {/* Gradient overlays for fade effect */}
        <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-indigo-900 to-transparent pointer-events-none"></div>
        <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-pink-900 to-transparent pointer-events-none"></div>
      </div>

      {/* Stats section */}
      <div className="max-w-7xl mx-auto px-6 mt-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-5xl font-bold text-white mb-2">50+</div>
            <div className="text-purple-300">Happy Clients</div>
          </div>
          <div className="text-center">
            <div className="text-5xl font-bold text-white mb-2">500+</div>
            <div className="text-purple-300">Events Completed</div>
          </div>
          <div className="text-center">
            <div className="text-5xl font-bold text-white mb-2">15+</div>
            <div className="text-purple-300">Years Experience</div>
          </div>
          <div className="text-center">
            <div className="text-5xl font-bold text-white mb-2">100%</div>
            <div className="text-purple-300">Satisfaction Rate</div>
          </div>
        </div>
      </div>
    </section>
  );
}
