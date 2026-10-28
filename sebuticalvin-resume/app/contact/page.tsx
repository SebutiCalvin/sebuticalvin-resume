import { Mail } from "lucide-react";

export default function ContactPage() {
  return (
    <main className="w-full min-h-[calc(100vh-80px)] flex flex-col items-center justify-center px-6 py-24 bg-black text-white text-center">
      <div className="max-w-2xl mx-auto animate-in fade-in slide-in-from-bottom-8 duration-1000">
        <h1 className="font-serif text-5xl md:text-7xl mb-8">Let's Build Something.</h1>
        <p className="text-gray-400 font-light text-lg mb-12">
          I am currently seeking internship and entry-level software engineering opportunities. 
          Whether you have a question or just want to say hi, my inbox is always open.
        </p>
        <a 
          href="mailto:sebuticalvin@gmail.com" 
          className="inline-flex items-center gap-3 bg-white text-black px-12 py-6 text-sm font-medium tracking-[0.2em] uppercase hover:bg-gray-200 transition-all"
        >
          <Mail className="w-5 h-5" /> Get In Touch
        </a>
      </div>
    </main>
  );
}