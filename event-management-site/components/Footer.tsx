export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-slate-950 via-purple-950 to-slate-950 text-white py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-pink-500 via-purple-500 to-blue-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">EM</span>
              </div>
              <span className="font-bold text-xl">EventMasters</span>
            </div>
            <p className="text-purple-300 text-sm leading-relaxed">
              Creating unforgettable experiences through innovative event management, design, and branding solutions.
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-white">Our Services</h3>
            <ul className="space-y-2 text-purple-300 text-sm">
              <li className="hover:text-pink-400 transition-colors cursor-pointer">Graphic Design</li>
              <li className="hover:text-pink-400 transition-colors cursor-pointer">Printing Services</li>
              <li className="hover:text-pink-400 transition-colors cursor-pointer">Event Management</li>
              <li className="hover:text-pink-400 transition-colors cursor-pointer">Stage Design</li>
              <li className="hover:text-pink-400 transition-colors cursor-pointer">Store Branding</li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-white">Quick Links</h3>
            <ul className="space-y-2 text-purple-300 text-sm">
              <li className="hover:text-pink-400 transition-colors cursor-pointer">About Us</li>
              <li className="hover:text-pink-400 transition-colors cursor-pointer">Portfolio</li>
              <li className="hover:text-pink-400 transition-colors cursor-pointer">Testimonials</li>
              <li className="hover:text-pink-400 transition-colors cursor-pointer">Blog</li>
              <li className="hover:text-pink-400 transition-colors cursor-pointer">Careers</li>
            </ul>
          </div>

          {/* Social & Newsletter */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-white">Stay Connected</h3>
            <div className="flex space-x-3 mb-4">
              <a href="#" className="w-10 h-10 bg-white/10 hover:bg-pink-500 rounded-lg flex items-center justify-center transition-all hover:scale-110">
                <span>📘</span>
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 hover:bg-blue-400 rounded-lg flex items-center justify-center transition-all hover:scale-110">
                <span>🐦</span>
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 hover:bg-pink-600 rounded-lg flex items-center justify-center transition-all hover:scale-110">
                <span>📸</span>
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 hover:bg-blue-700 rounded-lg flex items-center justify-center transition-all hover:scale-110">
                <span>💼</span>
              </a>
            </div>
            <p className="text-purple-300 text-sm mb-2">Subscribe to our newsletter</p>
            <div className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 px-3 py-2 bg-white/10 border border-white/30 rounded-l-lg text-white text-sm placeholder-purple-400 focus:outline-none"
              />
              <button className="bg-gradient-to-r from-pink-500 to-purple-600 px-4 py-2 rounded-r-lg hover:shadow-lg transition-all">
                →
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 mt-8 flex flex-col md:flex-row justify-between items-center text-sm text-purple-400">
          <p>&copy; 2025 Hue Creatives . All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-pink-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-pink-400 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-pink-400 transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
      
    </footer>
  );
}
