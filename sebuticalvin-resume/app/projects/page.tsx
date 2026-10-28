import { ArrowUpRight } from "lucide-react";

export default function ProjectsPage() {
  const projects = [
    {
      title: "Limkokwing Alumni Portal",
      category: "Python · Full-Stack",
      description: "A comprehensive university portal featuring an AI Chatbot, a Job System, and real-time messaging for students and alumni.",
      tech: "Python · Flask · SQLite · OpenAI API",
      link: "https://github.com/SebutiCalvin/limkokwing-alumni-portal", 
    },
    {
      title: "Laravel Career Guidance",
      category: "Web Platform",
      description: "A platform helping students explore higher-learning courses in Lesotho (NUL, Limkokwing, Botho, LCE) with application management and email verification.",
      tech: "Laravel 11 · PHP · MySQL",
      link: "#",
    },
    {
      title: "WINGS Cafe Inventory",
      category: "Web Application",
      description: "A practical inventory management system for a cafe, featuring real-time stock tracking, product management, and low-stock alerts.",
      tech: "React · Firebase · Firestore",
      link: "#",
    }
  ];

  return (
    <main className="w-full max-w-7xl mx-auto px-6 md:px-12 py-32 min-h-[calc(100vh-80px)]">
      <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
        <h1 className="font-serif text-5xl md:text-7xl">Selected Works</h1>
        <p className="text-sm tracking-widest uppercase text-gray-500 max-w-xs md:text-right">
          A showcase of my software engineering projects.
        </p>
      </div>

      <div className="flex flex-col animate-in fade-in slide-in-from-bottom-8 duration-1000">
        {projects.map((project, index) => (
          <a 
            key={index} 
            href={project.link}
            target={project.link !== "#" ? "_blank" : "_self"}
            rel="noreferrer"
            className="group border-t border-gray-300 py-12 flex flex-col md:flex-row justify-between items-start md:items-center gap-8 hover:bg-white transition-all duration-300 px-6 md:px-10 -mx-6 md:-mx-10"
          >
            <div className="flex-1 max-w-3xl">
              <p className="text-xs font-medium tracking-[0.2em] uppercase text-gray-400 mb-3 group-hover:text-black transition-colors">{project.category}</p>
              <h3 className="font-serif text-3xl md:text-4xl mb-4 group-hover:italic transition-all">{project.title}</h3>
              <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-6">{project.description}</p>
              <p className="text-xs font-semibold tracking-wider text-gray-800">{project.tech}</p>
            </div>
            
            <div className="w-16 h-16 rounded-full border border-gray-300 flex items-center justify-center group-hover:bg-black group-hover:border-black transition-all duration-300 shrink-0">
              <ArrowUpRight className="w-6 h-6 text-black group-hover:text-white transition-colors duration-300" />
            </div>
          </a>
        ))}
      </div>
    </main>
  );
}