import { Facebook, Twitter, Youtube, Instagram } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-dark text-gray-300 py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-10">
          {/* About Section */}
          <div>
            <h3 className="text-primary font-bold text-xl mb-5 font-display">About AGTV</h3>
            <p className="text-sm leading-relaxed mb-4">
              Broadcasting faith that transforms lives across Africa. Join millions of viewers experiencing the power of God's word through inspiring programs.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-gray-300 hover:text-primary transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-primary transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-primary transition-colors">
                <Youtube size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-primary transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-primary font-bold text-xl mb-5 font-display">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-primary transition-colors">Live Stream</a></li>
              <li><a href="#" className="text-gray-300 hover:text-primary transition-colors">Program Schedule</a></li>
              <li><a href="#" className="text-gray-300 hover:text-primary transition-colors">Prayer Requests</a></li>
              <li><a href="#" className="text-gray-300 hover:text-primary transition-colors">Testimonies</a></li>
              <li><a href="#" className="text-gray-300 hover:text-primary transition-colors">Ministry Partners</a></li>
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h3 className="text-primary font-bold text-xl mb-5 font-display">Popular Programs</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-primary transition-colors">Morning Glory</a></li>
              <li><a href="#" className="text-gray-300 hover:text-primary transition-colors">Word of Life</a></li>
              <li><a href="#" className="text-gray-300 hover:text-primary transition-colors">Family Foundations</a></li>
              <li><a href="#" className="text-gray-300 hover:text-primary transition-colors">Praise & Worship</a></li>
              <li><a href="#" className="text-gray-300 hover:text-primary transition-colors">Kingdom Business</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-primary font-bold text-xl mb-5 font-display">Contact Us</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <span>📍</span>
                <span>123 Faith Street<br />Accra, Ghana</span>
              </li>
              <li className="flex items-center gap-3">
                <span>📞</span>
                <span>+233 20 123 4567</span>
              </li>
              <li className="flex items-center gap-3">
                <span>✉️</span>
                <span>info@agtv.org</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 pt-6 text-center text-sm">
          <p>&copy; 2024 AGTV - Faith That Transforms Lives. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
