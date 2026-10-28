import Link from "next/link";
import { ArrowRight, Download, Mail } from "lucide-react";

// Custom SVG Icons
const GithubIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
  </svg>
);

const LinkedinIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
  </svg>
);

export default function Home() {
  return (
    <main className="min-h-[calc(100vh-80px)] flex flex-col bg-[#fafafa]">
      <section className="relative flex-1 flex flex-col items-center justify-center text-center px-6 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none"></div>

        <p className="text-xs md:text-sm tracking-[0.3em] uppercase mb-8 text-gray-500 font-semibold animate-in fade-in slide-in-from-bottom-4 duration-700">
          Software Engineering Graduate · Lesotho
        </p>
        
        <h1 className="font-serif text-5xl md:text-7xl lg:text-[7rem] leading-[1.05] max-w-5xl mb-8 text-black tracking-tight animate-in fade-in slide-in-from-bottom-6 duration-1000">
          Engineering <br /> 
          <span className="italic text-gray-800">high-performance</span> <br /> 
          web applications.
        </h1>
        
        <p className="max-w-2xl text-base md:text-lg leading-relaxed text-gray-600 mb-10 font-light animate-in fade-in slide-in-from-bottom-8 duration-1000">
          BSc in Software Engineering with Multimedia. I specialize in full-stack development, 
          building modern, scalable web solutions that bridge the gap between elegant design and robust functionality.
        </p>

        {/* Social Icons */}
        <div className="flex items-center gap-6 mb-10 animate-in fade-in slide-in-from-bottom-8 duration-1000">
          <a href="https://github.com/SebutiCalvin/" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-black transition-colors">
            <GithubIcon className="w-6 h-6" />
          </a>
          <a href="https://www.linkedin.com/in/sebuti-mofokeng-bb5444419/" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-black transition-colors">
            <LinkedinIcon className="w-6 h-6" />
          </a>
          <a href="mailto:sebuticalvin@gmail.com" className="text-gray-400 hover:text-black transition-colors">
            <Mail className="w-6 h-6" />
          </a>
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto animate-in fade-in slide-in-from-bottom-10 duration-1000 mb-16">
          <Link 
            href="/projects" 
            className="group flex items-center justify-center gap-3 bg-black text-white px-10 py-5 text-xs font-medium tracking-[0.2em] uppercase hover:bg-gray-800 transition-all w-full sm:w-auto"
          >
            View Projects
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
          
          <a 
            href="/cv.pdf" 
            target="_blank"
            className="group flex items-center justify-center gap-3 border border-black text-black px-10 py-5 text-xs font-medium tracking-[0.2em] uppercase hover:bg-black hover:text-white transition-all w-full sm:w-auto"
          >
            Download CV
            <Download className="w-4 h-4 group-hover:-translate-y-1 transition-transform" />
          </a>
        </div>

        {/* Tech Stack Marquee */}
        <div className="absolute bottom-0 w-full border-t border-gray-200 bg-white/50 backdrop-blur-sm py-4 overflow-hidden">
          <div className="flex whitespace-nowrap animate-[marquee_20s_linear_infinite]">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="flex gap-8 px-4 text-xs font-semibold tracking-widest text-gray-400 uppercase">
                <span>React.js</span>
                <span>·</span>
                <span>Node.js</span>
                <span>·</span>
                <span>Python</span>
                <span>·</span>
                <span>Flask</span>
                <span>·</span>
                <span>Laravel</span>
                <span>·</span>
                <span>MySQL</span>
                <span>·</span>
                <span>JavaFX</span>
                <span>·</span>
                <span>Firebase</span>
                <span>·</span>
                <span>3ds Max</span>
                <span>·</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}