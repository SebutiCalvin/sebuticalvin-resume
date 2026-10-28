import { GraduationCap, Briefcase } from "lucide-react";

export default function JourneyPage() {
  return (
    <main className="w-full max-w-4xl mx-auto px-6 py-32 min-h-[calc(100vh-80px)]">
      <h1 className="font-serif text-5xl md:text-7xl mb-16 text-center animate-in fade-in slide-in-from-bottom-4 duration-700">Journey</h1>
      
      <div className="space-y-16 animate-in fade-in slide-in-from-bottom-8 duration-1000">
        {/* Education */}
        <div className="flex flex-col md:flex-row gap-6 md:gap-12">
          <div className="md:w-1/3">
            <GraduationCap className="w-10 h-10 text-gray-400 mb-4" />
            <h3 className="text-lg font-bold mb-1">Education</h3>
            <p className="text-sm font-medium text-gray-500 uppercase tracking-widest">Limkokwing University</p>
          </div>
          <div className="md:w-2/3 border-l-2 border-gray-200 pl-6 md:pl-10">
            <h4 className="text-2xl font-serif mb-2">BSc Software Engineering with Multimedia</h4>
            <p className="text-gray-600 text-sm leading-relaxed mb-6">
              Focused on full-stack development, software architecture, and multimedia integration. 
            </p>
            <h5 className="text-xs font-bold uppercase tracking-widest mb-3">Relevant Coursework</h5>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-gray-600 font-light">
              <li>• Software Testing & QA</li>
              <li>• Distributed Systems</li>
              <li>• JavaFX Application Development</li>
              <li>• Database Management</li>
              <li>• 3D Modeling & VR</li>
              <li>• Web Technologies</li>
            </ul>
          </div>
        </div>

        {/* Professional Experience */}
        <div className="flex flex-col md:flex-row gap-6 md:gap-12">
          <div className="md:w-1/3">
            <Briefcase className="w-10 h-10 text-gray-400 mb-4" />
            <h3 className="text-lg font-bold mb-1">Experience</h3>
            <p className="text-sm font-medium text-gray-500 uppercase tracking-widest">Field Operations</p>
          </div>
          <div className="md:w-2/3 border-l-2 border-gray-200 pl-6 md:pl-10">
            <h4 className="text-2xl font-serif mb-2">Data Collector</h4>
            <p className="text-gray-600 text-sm leading-relaxed mb-4">
              Played a critical role in national data initiatives, including the 2026 Population and Housing Census and the Proof of Life project.
            </p>
            <p className="text-gray-600 text-sm leading-relaxed">
              Conducted over 500 household interviews using digital tools like ODK, KoboToolbox, and CSPro, demonstrating strong organizational, technical, and communication skills under pressure.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}