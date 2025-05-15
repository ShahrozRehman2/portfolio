import React from 'react';
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink } from "lucide-react";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  demoLink: string;
  githubLink: string;
  featured: boolean;
}

const PROJECTS: Project[] = [
  {
    id: 1,
    title: "E-Commerce Dashboard",
    description: "A comprehensive dashboard for e-commerce businesses with sales analytics, inventory management, and customer insights.",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1172&q=80",
    technologies: ["React", "Redux", "TypeScript", "Chart.js", "Tailwind CSS"],
    demoLink: "https://example.com",
    githubLink: "https://github.com",
    featured: true
  },
  {
    id: 2,
    title: "Task Management App",
    description: "A Kanban-style task management application with drag-and-drop functionality, real-time updates, and team collaboration features.",
    image: "https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1176&q=80",
    technologies: ["React", "Context API", "Firebase", "Styled Components"],
    demoLink: "https://example.com",
    githubLink: "https://github.com",
    featured: true
  }
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-poppins text-primary mb-4">My Projects</h2>
          <div className="w-24 h-1.5 bg-secondary rounded-full mb-6"></div>
          <p className="text-gray-600 max-w-2xl text-center">
            Here are some of the projects I've worked on. Each project represents different challenges and solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {PROJECTS.map((project) => (
            <Card key={project.id} className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-shadow">
              <div className="h-60 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold text-primary">{project.title}</h3>
                  {project.featured && (
                    <Badge className="bg-accent hover:bg-accent text-white">Featured</Badge>
                  )}
                </div>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="outline" className="bg-gray-100">{tech}</Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="px-6 pb-6 pt-0 flex justify-between">
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="flex items-center gap-2"
                  asChild
                >
                  <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                    <Github className="h-4 w-4" />
                    Code
                  </a>
                </Button>
                <Button 
                  size="sm"
                  className="bg-primary hover:bg-primary-light flex items-center gap-2"
                  asChild
                >
                  <a href={project.demoLink} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="h-4 w-4" />
                    Live Demo
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <Button 
            variant="outline"
            size="lg"
            className="border-primary text-primary hover:bg-primary hover:text-white"
          >
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
