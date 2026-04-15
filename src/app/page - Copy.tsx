import WorkGrid from "@/components/WorkGrid";
export default function Home() {
  return (
    <main className="bg-black text-white">
      
      {/* HERO */}
      <section className="relative h-screen flex items-center justify-center text-center">

<WorkGrid />
  <video
    autoPlay
    muted
    loop
    className="absolute w-full h-full object-cover opacity-40"
  >
    <source src="/showreel.mp4" type="video/mp4" />
  </video>

  <div className="relative z-10 px-6">
    <h1 className="text-5xl md:text-7xl font-bold mb-6">
      We Craft Sound That Moves People
    </h1>
    <p className="text-lg text-gray-300 max-w-2xl mx-auto">
      Cinematic sound design and complete audio post-production for films, commercials, and brands.
    </p>
  </div>

</section>

<section className="px-6 py-20 text-center">
  <h2 className="text-3xl mb-4">Let’s Make Something Powerful</h2>
  <p className="text-gray-400 mb-6">
    Ready to collaborate on your next film or commercial?
  </p>

  <a
    href="https://wa.me/your-number"
    className="px-6 py-3 bg-white text-black rounded-full"
  >
    Start a Project
  </a>
</section>

    </main>
  );
}