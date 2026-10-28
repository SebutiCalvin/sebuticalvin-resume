import { Code2, Database, Server, MonitorSmartphone, Box, Network, Trophy } from "lucide-react";

export default function SkillsPage() {
  const skills = [
    { title: "Frontend", icon: <MonitorSmartphone className="w-5 h-5" />, items: "React.js, JavaScript, HTML5, CSS3" },
    { title: "Backend", icon: <Server className="w-5 h-5" />, items: "Node.js, Express.js, PHP, Laravel, REST APIs" },
    { title: "Databases", icon: <Database className="w-5 h-5" />, items: "MySQL, MongoDB, Firebase, Firestore" },
    { title: "Virtual Reality & 3D", icon: <Box className="w-5 h-5" />, items: "3ds Max, VR Concepts" },
    { title: "Networking", icon: <Network className="w-5 h-5" />, items: "Network configuration, Protocols, Server setup" },
    { title: "Creative & Design", icon: <Code2 className="w-5 h-5" />, items: "Photoshop, Illustrator, After Effects" },
  ];

  return (
    <main className="w-full max-w-6xl mx-auto px-6 py-32 min-h-[calc(100vh-80px)]">
      <div className="flex flex-col items-center mb-16 animate-in fade-in slide-in-from-bottom-4 duration-700">
        <h1 className="font-serif text-5xl md:text-7xl mb-6">Technical Skills</h1>
        <p className="text-sm text-gray-500 tracking-widest uppercase text-center max-w-md">
          Technologies I can confidently explain, demonstrate, and build with.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-in fade-in slide-in-from-bottom-8 duration-1000">
        {skills.map((skill, index) => (
          <div key={index} className="p-8 border border-gray-200 hover:border-black transition-colors bg-white group">
            <div className="flex items-center gap-3 mb-4 text-black">
              {skill.icon}
              <h3 className="text-sm font-bold tracking-wider uppercase">{skill.title}</h3>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed">{skill.items}</p>
          </div>
        ))}
      </div>

      {/* TJ Group Award */}
      <div className="mt-12 p-8 bg-black text-white flex flex-col md:flex-row items-start md:items-center gap-6 animate-in fade-in slide-in-from-bottom-10 duration-1000 delay-200">
        <Trophy className="w-10 h-10 text-yellow-500 shrink-0" />
        <div>
          <h4 className="font-serif text-2xl mb-2">Winning Logo Designer (2024)</h4>
          <p className="text-sm text-gray-300 font-light">Awarded first place in the TJ Group logo design competition.</p>
        </div>
      </div>
    </main>
  );
}