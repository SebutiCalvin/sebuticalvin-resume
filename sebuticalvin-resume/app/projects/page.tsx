import { ArrowUpRight, Globe, LayoutTemplate, Code2, Hammer } from "lucide-react";

// Custom SVG for GitHub
const GithubIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
  </svg>
);

export default function ProjectsPage() {
  const softwareProjects = [
    {
      title: "Limkokwing Alumni Portal",
      category: "Python · Full-Stack Web Application",
      description: "A comprehensive university portal connecting alumni and employers. Features an AI Chatbot, real-time messaging, and a job placement system. This is a fully deployed, working application.",
      tech: "Python · Flask · SQLite · OpenAI API",
      liveLink: "https://sebuticalvin.pythonanywhere.com/",
      githubLink: "https://github.com/SebutiCalvin/limkokwing-alumni-portal",
    },
    {
      title: "Laravel Career Guidance",
      category: "Web Platform",
      description: "A platform helping students explore higher-learning courses in Lesotho (NUL, Limkokwing, Botho, LCE) with application management and email verification.",
      tech: "Laravel 11 · PHP · MySQL",
      liveLink: null,
      githubLink: "#",
    },
    {
      title: "WINGS Cafe Inventory",
      category: "Web Application",
      description: "A practical inventory management system for a cafe, featuring real-time stock tracking, product management, and low-stock alerts.",
      tech: "React · Firebase · Firestore",
      liveLink: null,
      githubLink: "#",
    }
  ];

  // ADD YOUR PROTOTYPES HERE ONCE DEPLOYED
  const prototypes = [
    {
      title: "Project One (Prototype)", // Change this to the real name
      status: "In Development",
      description: "Brief description of what this prototype does and what you are currently learning/building.",
      tech: "React · Next.js", // Update tech stack
      liveLink: "#", // Paste your deployed link here later
    },
    {
      title: "Project Two (Prototype)", // Change this to the real name
      status: "In Development",
      description: "Brief description of what this prototype does and what you are currently learning/building.",
      tech: "Python · Flask", // Update tech stack
      liveLink: "#", // Paste your deployed link here later
    }
  ];

  const templates = [
    { name: "Motsieleli Mona (Luxury E-commerce)", link: "https://adorable-mochi-074fb4.netlify.app/" },
    { name: "Ubiquitous Faun (Creative Layout)", link: "https://ubiquitous-faun-b7d6ac.netlify.app" },
    { name: "Monumental Sable (Corporate Structure)", link: "https://monumental-sable-c92591.netlify.app" },
    { name: "Ornate Cuchufli (Minimalist Design)", link: "https://ornate-cuchufli-6e7231.netlify.app" },
    { name: "Splendid Bonbon (Vibrant Interface)", link: "https://splendid-bonbon-da32b1.netlify.app" },
  ];

  return (
    <main className="w-full max-w-7xl mx-auto px-6 md:px-12 py-32 min-h-[calc(100vh-80px)]">
      
      {/* SOFTWARE PROJECTS SECTION */}
      <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
        <h1 className="font-serif text-5xl md:text-7xl">Selected Works</h1>
        <p className="text-sm tracking-widest uppercase text-gray-500 max-w-xs md:text-right">
          A showcase of my software engineering projects.
        </p>
      </div>

      <div className="flex flex-col animate-in fade-in slide-in-from-bottom-8 duration-1000 mb-24">
        {softwareProjects.map((project, index) => (
          <div 
            key={index} 
            className="group border-t border-gray-300 py-12 flex flex-col md:flex-row justify-between items-start md:items-center gap-8 hover:bg-white transition-all duration-300 px-6 md:px-10 -mx-6 md:-mx-10"
          >
            <div className="flex-1 max-w-3xl">
              <p className="text-xs font-medium tracking-[0.2em] uppercase text-gray-400 mb-3 group-hover:text-black transition-colors">{project.category}</p>
              
              <a href={project.githubLink} target="_blank" rel="noreferrer">
                <h3 className="font-serif text-3xl md:text-4xl mb-4 group-hover:italic transition-all inline-block hover:underline decoration-2 underline-offset-4">{project.title}</h3>
              </a>

              <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-6">{project.description}</p>
              
              <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8">
                <p className="text-xs font-semibold tracking-wider text-gray-800">{project.tech}</p>
                
                <div className="flex items-center gap-4 text-xs font-medium uppercase tracking-wider">
                  {project.liveLink && (
                    <a href={project.liveLink} target="_blank" rel="noreferrer" className="flex items-center gap-1.5 text-blue-600 hover:text-black transition-colors">
                      <Globe className="w-3.5 h-3.5" /> Live Demo
                    </a>
                  )}
                  {project.githubLink !== "#" && (
                    <a href={project.githubLink} target="_blank" rel="noreferrer" className="flex items-center gap-1.5 text-gray-600 hover:text-black transition-colors">
                      <GithubIcon className="w-3.5 h-3.5" /> Source Code
                    </a>
                  )}
                </div>
              </div>
            </div>
            
            <a 
              href={project.liveLink || project.githubLink} 
              target="_blank" 
              rel="noreferrer"
              className="w-16 h-16 rounded-full border border-gray-300 flex items-center justify-center group-hover:bg-black group-hover:border-black transition-all duration-300 shrink-0"
            >
              <ArrowUpRight className="w-6 h-6 text-black group-hover:text-white transition-colors duration-300" />
            </a>
          </div>
        ))}
      </div>

      {/* CURRENT WORKS / PROTOTYPES SECTION */}
      <div className="mb-32">
        <div className="flex items-center gap-3 mb-8 text-gray-500">
          <Hammer className="w-6 h-6" />
          <span className="text-xs font-bold tracking-[0.2em] uppercase">Current Works</span>
        </div>
        <h2 className="font-serif text-4xl md:text-5xl mb-12">Prototypes & In Development</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {prototypes.map((proto, index) => (
            <div key={index} className="p-8 border border-dashed border-gray-400 bg-gray-50 flex flex-col justify-between min-h-[250px]">
              <div>
                <span className="inline-block px-3 py-1 bg-yellow-100 text-yellow-800 text-[10px] font-bold uppercase tracking-wider mb-4 rounded-sm">
                  {proto.status}
                </span>
                <h3 className="font-serif text-2xl mb-3">{proto.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-6">{proto.description}</p>
              </div>
              <div className="flex justify-between items-center border-t border-gray-200 pt-4">
                <p className="text-xs font-semibold text-gray-500">{proto.tech}</p>
                {proto.liveLink !== "#" ? (
                  <a href={proto.liveLink} target="_blank" rel="noreferrer" className="text-xs font-bold uppercase tracking-wider hover:underline flex items-center gap-1">
                    View Prototype <ArrowUpRight className="w-3 h-3" />
                  </a>
                ) : (
                  <span className="text-xs font-bold uppercase tracking-wider text-gray-400">Coming Soon</span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* MENTORSHIP & TEMPLATES SECTION */}
      <div className="pt-16 border-t-2 border-black">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 animate-in fade-in slide-in-from-bottom-4 duration-700">
          <div>
            <div className="flex items-center gap-3 mb-4 text-gray-500">
              <LayoutTemplate className="w-6 h-6" />
              <span className="text-xs font-bold tracking-[0.2em] uppercase">Mentorship</span>
            </div>
            <h2 className="font-serif text-4xl md:text-5xl">Web Design Templates</h2>
          </div>
          <p className="text-sm text-gray-600 max-w-md md:text-right font-light">
            A collection of responsive web templates designed to demonstrate modern UI/UX principles and assist students in mastering frontend development.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-in fade-in slide-in-from-bottom-8 duration-1000">
          {templates.map((template, index) => (
            <a 
              key={index}
              href={template.link}
              target="_blank"
              rel="noreferrer"
              className="group flex flex-col justify-between p-8 bg-white border border-gray-200 hover:border-black transition-colors min-h-[200px]"
            >
              <div className="flex justify-between items-start mb-8">
                <Code2 className="w-6 h-6 text-gray-400 group-hover:text-black transition-colors" />
                <ArrowUpRight className="w-5 h-5 text-gray-300 group-hover:text-black transition-all group-hover:translate-x-1 group-hover:-translate-y-1" />
              </div>
              <div>
                <h3 className="font-serif text-xl mb-2">{template.name}</h3>
                <p className="text-xs text-gray-500 uppercase tracking-widest">View Live Template</p>
              </div>
            </a>
          ))}
        </div>
      </div>

    </main>
  );
}