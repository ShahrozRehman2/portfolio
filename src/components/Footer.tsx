import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-primary text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <a href="#home" className="text-2xl font-bold font-poppins">
              Shahroz<span className="text-secondary">portfolio</span>
            </a>
            <p className="mt-2 text-gray-300 max-w-md">
              A passionate React developer focused on creating responsive and user-friendly web applications.
            </p>
          </div>
          
          <div className="flex flex-col md:flex-row gap-8">
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#home" className="text-gray-300 hover:text-white transition-colors">Home</a></li>
                <li><a href="#about" className="text-gray-300 hover:text-white transition-colors">About</a></li>
                <li><a href="#skills" className="text-gray-300 hover:text-white transition-colors">Skills</a></li>
                <li><a href="#projects" className="text-gray-300 hover:text-white transition-colors">Projects</a></li>
                <li><a href="#contact" className="text-gray-300 hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Resources</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Resume</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Testimonials</a></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400">
            2024 Shahroz Portfolio
          </p>
          <div className="mt-4 md:mt-0">
            <p className="text-gray-400">
              Designed and built by Shahroz Rehman
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;


