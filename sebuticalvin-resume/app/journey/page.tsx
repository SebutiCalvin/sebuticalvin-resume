import { GraduationCap, Briefcase, MapPin, Rocket, Trophy } from "lucide-react";

export default function JourneyPage() {
  return (
    <main className="w-full max-w-4xl mx-auto px-6 py-32 min-h-[calc(100vh-80px)]">
      <div className="text-center mb-24 animate-in fade-in slide-in-from-bottom-4 duration-700">
        <h1 className="font-serif text-5xl md:text-7xl mb-6">My Journey</h1>
        <p className="text-sm text-gray-500 tracking-widest uppercase max-w-2xl mx-auto">
          From Serutle, Butha-Buthe to Software Engineering, Entrepreneurship, and Digital Innovation.
        </p>
      </div>

      <div className="space-y-24 animate-in fade-in slide-in-from-bottom-8 duration-1000">
        
        {/* THE BEGINNING */}
        <section>
          <div className="flex items-center gap-4 mb-8">
            <MapPin className="w-8 h-8 text-gray-400" />
            <h2 className="font-serif text-3xl">The Beginning</h2>
          </div>
          <div className="pl-12 border-l-2 border-gray-200">
            <p className="text-gray-600 leading-relaxed mb-6 text-lg font-light">
              My story begins in <strong>Serutle</strong>, a village in the Butha-Buthe district of Lesotho. Growing up in a close-knit community shaped my identity and instilled in me a deep determination to use technology to solve real-world problems. My curiosity led me from my local primary and high schools straight into the world of Information Technology.
            </p>
          </div>
        </section>

        {/* EDUCATION */}
        <section>
          <div className="flex items-center gap-4 mb-8">
            <GraduationCap className="w-8 h-8 text-gray-400" />
            <h2 className="font-serif text-3xl">Education</h2>
          </div>
          <div className="pl-12 border-l-2 border-gray-200 space-y-10">
            <div>
              <h3 className="text-xl font-bold mb-1">BSc in Software Engineering with Multimedia</h3>
              <p className="text-sm font-medium text-gray-500 uppercase tracking-widest mb-4">Limkokwing University of Technology (Graduated 2026)</p>
              <p className="text-gray-600 leading-relaxed">
                This milestone brought together my two greatest interests: software engineering and multimedia. I developed a strong foundation in programming, application development, database technologies, and creative digital production.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-1">Diploma in Information Technology</h3>
              <p className="text-sm font-medium text-gray-500 uppercase tracking-widest mb-4">IBC College</p>
              <p className="text-gray-600 leading-relaxed">
                This is where my interest in technology became specialized, providing me with the foundational skills that set the direction for my professional career.
              </p>
            </div>
          </div>
        </section>

        {/* SOFTWARE ENGINEERING */}
        <section>
          <div className="flex items-center gap-4 mb-8">
            <Briefcase className="w-8 h-8 text-gray-400" />
            <h2 className="font-serif text-3xl">Development Journey</h2>
          </div>
          <div className="pl-12 border-l-2 border-gray-200">
            <p className="text-gray-600 leading-relaxed mb-6 text-lg font-light">
              My journey into software engineering has never been limited to the classroom. I have a relentless drive to understand how complete digital systems are designed, built, and deployed. Instead of sticking to theoretical exercises, I learn by building. I have explored frontend and backend development, database management, REST APIs, AI integration, and full-stack application architecture.
            </p>
          </div>
        </section>

        {/* ENTREPRENEURSHIP & CREATIVITY */}
        <section>
          <div className="flex items-center gap-4 mb-8">
            <Rocket className="w-8 h-8 text-gray-400" />
            <h2 className="font-serif text-3xl">Entrepreneurship & Creativity</h2>
          </div>
          <div className="pl-12 border-l-2 border-gray-200">
            <p className="text-gray-600 leading-relaxed mb-6 text-lg font-light">
              I am not only focused on employment; I am driven to create opportunities. Through initiatives like <strong>House Hunting Monopoly Maseru</strong> and <strong>Mofokeng Interconnect</strong>, I am exploring how technology and digital services can create tangible value in my community.
            </p>
            <p className="text-gray-600 leading-relaxed text-lg font-light mb-8">
              Beyond code, I have a deep passion for multimedia and creative design. From graphic design using Adobe Illustrator and Photoshop to motion graphics, I bring a unique visual perspective to my engineering work.
            </p>
            
            <div className="bg-gray-50 border border-gray-200 p-6 flex items-start gap-4">
              <Trophy className="w-6 h-6 text-yellow-600 shrink-0 mt-1" />
              <div>
                <h4 className="font-bold text-md mb-1">Winning Logo Designer (2024)</h4>
                <p className="text-sm text-gray-600">Awarded first place in the Lila Investment Group logo design competition, designed using Adobe Illustrator.</p>
              </div>
            </div>
          </div>
        </section>

      </div>
    </main>
  );
}