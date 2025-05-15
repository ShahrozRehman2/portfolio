import React from 'react';
import { Progress } from "@/components/ui/progress";

interface Skill {
  name: string;
  proficiency: number;
  category: 'frontend' | 'backend' | 'tools';
}

const SKILLS: Skill[] = [
  { name: 'React', proficiency: 80, category: 'frontend' },
  { name: 'JavaScript', proficiency: 70, category: 'frontend' },
  { name: '&CSS', proficiency: 80, category: 'frontend' },
  { name: 'HTML ', proficiency: 90, category: 'frontend' },
  { name: 'Redux', proficiency: 85, category: 'frontend' },
  { name: 'Tailwind CSS', proficiency: 70, category: 'frontend' },
  { name: 'Git', proficiency: 80, category: 'tools' },
  { name: 'Webpack', proficiency: 75, category: 'tools' },
  { name: 'Formik and Yup', proficiency: 75, category: 'tools' },
];

const SkillsSection = () => {
  const frontendSkills = SKILLS.filter(skill => skill.category === 'frontend');
  const toolsSkills = SKILLS.filter(skill => skill.category === 'tools');

  const renderSkillBar = (skill: Skill) => (
    <div key={skill.name} className="mb-6">
      <div className="flex justify-between mb-1">
        <span className="text-gray-700 font-medium">{skill.name}</span>
        <span className="text-gray-500 font-medium">{skill.proficiency}%</span>
      </div>
      <Progress value={skill.proficiency} className="h-2" />
    </div>
  );

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-poppins text-primary mb-4">My Skills</h2>
          <div className="w-24 h-1.5 bg-secondary rounded-full mb-6"></div>
          <p className="text-gray-600 max-w-2xl text-center">
            I've worked with a variety of technologies throughout my career. 
            Here are the key skills I've developed and my proficiency levels.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-semibold mb-6 text-primary border-b pb-2">Frontend Development</h3>
            <div className="space-y-6">
              {frontendSkills.map(renderSkillBar)}
            </div>
          </div>

          {/* Backend Development section removed */}

          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-semibold mb-6 text-primary border-b pb-2">Tools & Others</h3>
            <div className="space-y-6">
              {toolsSkills.map(renderSkillBar)}
            </div>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-white p-4 rounded-lg shadow flex items-center justify-center h-24">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React" className="h-12" />
          </div>
          <div className="bg-white p-4 rounded-lg shadow flex items-center justify-center h-24">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" alt="TypeScript" className="h-12" />
          </div>
          <div className="bg-white p-4 rounded-lg shadow flex items-center justify-center h-24">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JavaScript" className="h-12" />
          </div>
          <div className="bg-white p-4 rounded-lg shadow flex items-center justify-center h-24">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" alt="Node.js" className="h-12" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
