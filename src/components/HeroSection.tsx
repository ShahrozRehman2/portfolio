import React from 'react';

import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center items-center pt-20 pb-16 overflow-hidden"
    >
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>

      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-12">
        {/* Left Side */}
        <div className="w-full md:w-1/2 space-y-6 animate-fade-in">
          <p className="text-secondary font-medium">Hello, I'm</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-poppins leading-tight">
            Shahroz Rehman
          </h1>
          <h2 className="text-3xl md:text-4xl text-gray-700 font-semibold font-poppins">
            React Developer
          </h2>
          <p className="text-gray-600 max-w-lg">
            I build exceptional and accessible digital experiences for the web. Focused on creating responsive, user-friendly interfaces with modern technologies.
          </p>
{/* 
          <div className="flex flex-wrap gap-4 pt-4">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary-light transition-colors"
            >
              View My Work
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>

            <Button
              variant="outline"
              size="lg"
              className="border-primary text-primary hover:bg-primary hover:text-white"
            >
              Download CV
            </Button>
          </div> */}
        </div>

        {/* Right Side */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-end">
          <div className="relative">
            <div className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 bg-gradient-to-br from-primary to-secondary rounded-full overflow-hidden">
              <img
                src="/shahroz.jpg"
                alt="Shahroz"
                className="w-full h-full object-cover opacity-90 mix-blend-overlay"
              />
            </div>
            <div className="absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full"></div>
            <div
              className="absolute -bottom-6 -right-6 w-32 h-32 bg-accent rounded-full flex items-center justify-center text-secondary font-bold text-lg animate-pulse"
            >
             1+ Year Experience
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;


