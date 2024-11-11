import React from 'react';
import Navbar from './Navbar';

const Hero = () => {
  return (
    <div id="hero" className="relative min-h-screen">
      {/* Background Image with Reduced Opacity */}
      <div
        className="absolute inset-0 bg-no-repeat bg-cover"
        style={{
          backgroundImage: "url('/bg.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
          // opacity: 0.7, // Adjust the opacity of bg.jpg only
          zIndex: -1, // Ensure this background layer is behind all other content
        }}
      />

      {/* Foreground Content with pro.png */}
      <div
        className="min-h-screen bg-no-repeat bg-cover"
        style={{
          backgroundImage: "url('/pro.png')",
          backgroundSize: '35%',
          backgroundPosition: 'left 100px top 180px',
        }}
      >
        <Navbar />
        <div className="container grid lg:grid-cols-2 h-[calc(100vh-60px)]">
          <div className="hidden lg:block"></div>
          <div className="text-[70px] sm:text-[90px] font-bold leading-tight flex justify-center items-center">
            <div>
              <p data-aos="zoom-in-up">I'm</p>
              <p data-aos="zoom-in-up">Maimoona</p>
              <p data-aos="zoom-in-up">Munir.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;