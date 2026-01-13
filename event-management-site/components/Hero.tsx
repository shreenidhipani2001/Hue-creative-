'use client';

import { useEffect, useRef } from 'react';

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    // Particle system for artistic design
    const particles: Array<{
      x: number;
      y: number;
      radius: number;
      vx: number;
      vy: number;
      color: string;
    }> = [];

    const colors = ['#ec4899', '#8b5cf6', '#3b82f6', '#06b6d4', '#10b981'];

    for (let i = 0; i < 50; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 3 + 1,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        color: colors[Math.floor(Math.random() * colors.length)],
      });
    }

    function animate() {
      if (!ctx || !canvas) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle, index) => {
        particle.x += particle.vx;
        particle.y += particle.vy;

        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;

        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        ctx.fillStyle = particle.color;
        ctx.fill();

        // Connect particles
        particles.forEach((otherParticle, otherIndex) => {
          if (index !== otherIndex) {
            const dx = particle.x - otherParticle.x;
            const dy = particle.y - otherParticle.y;
            const distance = Math.sqrt(dx * dx + dy * dy);

            if (distance < 100) {
              ctx.beginPath();
              ctx.moveTo(particle.x, particle.y);
              ctx.lineTo(otherParticle.x, otherParticle.y);
              ctx.strokeStyle = `rgba(139, 92, 246, ${1 - distance / 100})`;
              ctx.lineWidth = 0.5;
              ctx.stroke();
            }
          }
        });
      });

      requestAnimationFrame(animate);
    }

    animate();
  }, []);

  return (
    <section
      id="home"
      className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 relative overflow-hidden pt-20"
    >
      {/* Animated background shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-20 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left side - Artistic Design */}
          <div className="relative h-[500px]">
            <canvas
              ref={canvasRef}
              className="absolute inset-0 w-full h-full"
            ></canvas>

            {/* Geometric shapes overlay */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative">
                <div className="w-64 h-64 border-4 border-pink-500 rounded-lg transform rotate-12 absolute animate-spin-slow"></div>
                <div className="w-64 h-64 border-4 border-purple-500 rounded-lg transform -rotate-12 absolute animate-spin-slow-reverse"></div>
                <div className="w-48 h-48 bg-gradient-to-br from-pink-500/30 to-purple-500/30 backdrop-blur-sm rounded-2xl absolute top-8 left-8 flex items-center justify-center">
                  <div className="text-center text-white">
                    <div className="text-4xl font-bold mb-2">16+</div>
                    <div className="text-sm">Years Experience</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Introduction */}
          <div className="text-white space-y-6">
            <h1 className="text-6xl font-bold leading-tight">
              Creating
              <span className="block bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
                Unforgettable
              </span>
              Experiences
            </h1>

            <p className="text-xl text-purple-200 leading-relaxed">
              We are a full-service event management company specializing in bringing your vision to life.
              From concept to execution, we handle every detail with creativity and precision.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-6">
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 hover:bg-white/20 transition-all duration-300">
                <div className="text-3xl mb-2">🎨</div>
                <h3 className="font-semibold mb-1">Graphic Design</h3>
                <p className="text-sm text-purple-300">Creative visual solutions</p>
              </div>

              <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 hover:bg-white/20 transition-all duration-300">
                <div className="text-3xl mb-2">🖨️</div>
                <h3 className="font-semibold mb-1">Printing</h3>
                <p className="text-sm text-purple-300">High-quality prints</p>
              </div>

              <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 hover:bg-white/20 transition-all duration-300">
                <div className="text-3xl mb-2">🎪</div>
                <h3 className="font-semibold mb-1">Event Management</h3>
                <p className="text-sm text-purple-300">Seamless execution</p>
              </div>

              <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 hover:bg-white/20 transition-all duration-300">
                <div className="text-3xl mb-2">🏢</div>
                <h3 className="font-semibold mb-1">Store Branding</h3>
                <p className="text-sm text-purple-300">Brand identity solutions</p>
              </div>
            </div>

            <button className="mt-8 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300">
              Explore Our Work
            </button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-white rounded-full animate-pulse"></div>
        </div>
      </div>
    </section>
  );
}
