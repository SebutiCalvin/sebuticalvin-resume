import Link from "next/link";
import { ArrowRight, Download } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-[calc(100vh-80px)] flex flex-col bg-[#fafafa]">
      <section className="relative flex-1 flex flex-col items-center justify-center text-center px-6 overflow-hidden">
        
        {/* Background Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none"></div>

        {/* Welcome Text */}
        <p className="text-xs md:text-sm tracking-[0.3em] uppercase mb-4 text-gray-500 font-semibold animate-in fade-in slide-in-from-bottom-2 duration-700">
          Welcome to my portfolio
        </p>
        
        {/* Subtitle / CV Note */}
        <p className="text-sm md:text-base text-gray-600 mb-10 max-w-2xl font-light animate-in fade-in slide-in-from-bottom-4 duration-700 delay-100">
          Software Engineering Graduate from Lesotho. My CV is attached and ready for download below.
        </p>
        
        {/* Main Headline */}
        <h1 className="font-serif text-5xl md:text-7xl lg:text-[7rem] leading-[1.05] max-w-5xl mb-8 text-black tracking-tight animate-in fade-in slide-in-from-bottom-6 duration-1000">
          Engineering <br /> 
          <span className="italic text-gray-800">high-performance</span> <br /> 
          web applications.
        </h1>
        
        <p className="max-w-2xl text-base md:text-lg leading-relaxed text-gray-600 mb-12 font-light animate-in fade-in slide-in-from-bottom-8 duration-1000">
          BSc in Software Engineering with Multimedia. I specialize in full-stack development, 
          building modern, scalable web solutions that bridge the gap between elegant design and robust functionality.
        </p>

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
      </section>
    </main>
  );
}