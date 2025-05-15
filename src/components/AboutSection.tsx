import React from 'react';
import { Card } from "@/components/ui/card";
import { User, Code, Briefcase } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-poppins text-primary mb-4">About Me</h2>
          <div className="w-24 h-1.5 bg-secondary rounded-full mb-6"></div>
          <p className="text-gray-600 max-w-2xl text-center">
            I'm a passionate React developer with a strong foundation in building modern web applications. 
            Here's a bit more about my background and what drives me.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <Card className="p-6 shadow-md hover:shadow-lg transition-shadow bg-white border-none">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                <User className="text-primary h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold">Personal Background</h3>
            </div>
            <p className="text-gray-600">
              I'm a detail-oriented developer with a passion for creating clean, efficient, and maintainable code. 
              I believe in continuous learning and staying updated with the latest technologies and best practices.
            </p>
          </Card>

          <Card className="p-6 shadow-md hover:shadow-lg transition-shadow bg-white border-none">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center mr-4">
                <Code className="text-secondary h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold">Technical Focus</h3>
            </div>
            <p className="text-gray-600">
              My primary focus is on front-end development with React,  and modern CSS. 
              I'm experienced in state management, responsive design, and creating accessible interfaces.
            </p>
          </Card>

          <Card className="p-6 shadow-md hover:shadow-lg transition-shadow bg-white border-none">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mr-4">
                <Briefcase className="text-accent h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold">Work Approach</h3>
            </div>
            <p className="text-gray-600">
              I approach each project with a focus on user experience and performance. 
              I enjoy collaborating with teams to solve complex problems and deliver high-quality solutions.
            </p>
          </Card>
        </div>

        <div className="mt-16 bg-white p-8 rounded-lg shadow-md">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="w-full md:w-1/2">
              <h3 className="text-2xl font-bold mb-4 text-primary">My Journey</h3>
              <p className="text-gray-600 mb-4">
                I started my development journey 1+ years ago, initially working with  JavaScript and reactjs. 
                As the web evolved, so did my skills, and I pivoted to modern frameworks like React.
              </p>
              <p className="text-gray-600">
                Throughout my career, I've worked on a variety of projects ranging from e-commerce platforms to data visualization 
                dashboards, always focusing on creating responsive, accessible, and performant applications.
              </p>
            </div>
            <div className="w-full md:w-1/2">
              <h3 className="text-2xl font-bold mb-4 text-primary">Education & Certification</h3>
              <div className="space-y-4">
                <div className="border-l-2 border-secondary pl-4">
                  <h4 className="font-semibold">Bachelor's in Computer Science</h4>
                  <p className="text-gray-500">Superior University Lahore, 2024</p>
                </div>
                <div className="border-l-2 border-secondary pl-4">
                  <h4 className="font-semibold">Front-End Web Developer Certification</h4>
                  <p className="text-gray-500">Frontend Masters, 2024</p>
                </div>
                <div className="border-l-2 border-secondary pl-4">
                  <h4 className="font-semibold">Advanced React Patterns</h4>
                  <p className="text-gray-500">React Training, 2023</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

