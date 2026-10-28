export default function AboutPage() {
  return (
    <main className="w-full max-w-4xl mx-auto px-6 py-32 min-h-[calc(100vh-80px)]">
      <h1 className="font-serif text-5xl md:text-7xl mb-12 text-center animate-in fade-in slide-in-from-bottom-4 duration-700">About Me</h1>
      <div className="prose prose-lg text-gray-600 font-light leading-relaxed mx-auto animate-in fade-in slide-in-from-bottom-8 duration-1000">
        <p className="mb-6">
          I am a recent <strong>BSc Software Engineering with Multimedia</strong> graduate from Limkokwing University. My approach to problem-solving is structured, analytical, and driven by a desire to build systems that are not only functional but highly intuitive. 
        </p>
        <p className="mb-6">
          I enjoy building full-stack web applications and mobile solutions. I have experience developing challenging projects, from comprehensive e-commerce platforms to complex JavaFX desktop applications. For my final-year major project, I utilized <strong>Python</strong> alongside <strong>Flask</strong> to deliver a robust application.
        </p>
        <p>
          Beyond web development, I have a strong interest in Virtual Reality (VR) and 3D modeling using 3ds Max, which I look forward to exploring further in a professional capacity. I am eager to integrate into an engineering team where I can contribute, learn from experienced developers, and continue building impactful digital solutions.
        </p>
      </div>
    </main>
  );
}