// components/Footer.jsx
// import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white bg-opacity-10 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="md:w-1/3 mb-8 md:mb-0">
            <h2 className="text-5xl font-extrabold text-red-500 mb-4">Fitness</h2>
            <p className="text-gray-400 text-lg">
              We believe fitness should be accessible to everyone, everywhere, regardless of income or access to a gym. With hundreds of professional workouts.
            </p>
          </div>
          <div className="md:w-1/4 mb-8 md:mb-0">
            <h3 className="text-2xl font-medium mb-4 text-white">Get Started</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white text-lg">Service</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white text-lg">Contact Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white text-lg">Affiliate Program</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white text-lg">About Us</a></li>
            </ul>
          </div>
          <div className="md:w-1/4">
            <h3 className="text-2xl font-medium mb-4 text-white">Get Started</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white text-lg">Fitness</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white text-lg">Platform</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white text-lg">Workout Library</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white text-lg">App Design</a></li>
            </ul>
          </div>
        </div>
        <hr className="border-gray-700 my-8" />
        <div className="text-center">
          <p className="text-gray-400 text-lg">All rights reserved @Fitness 2024</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;