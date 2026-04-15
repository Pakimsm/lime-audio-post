import Navbar from "@/components/Navbar";
import WorkGrid from "@/components/WorkGrid";
export default function Home() {
  return (
    <main className="bg-black text-white">
  <Navbar />

      {/* HERO */}
      <section className="relative h-screen flex items-center justify-center text-center overflow-hidden">

        {/* VIDEO BACKGROUND */}
        <video
          autoPlay
          muted
          loop
          className="absolute w-full h-full object-cover"
        >
          <source src="/showreel.mp4" type="video/mp4" />
        </video>

        {/* DARK OVERLAY */}
        <div className="absolute inset-0 bg-black/60"></div>

        {/* CONTENT */}
        <div className="relative z-10 px-6">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            We Craft Sound <br /> That Moves People
          </h1>

          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
            Cinematic sound design for films, commercials, and brands.
          </p>	
         <div className="mt-8 flex gap-4 justify-center">
          
         </div>
		 
		 <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
            Audiopost Production
Provide all-around audio needs, such as jingle creation for brand commercials
          </p>	
		 
        </div>
			
			
      </section>
	  
	  <section className="py-24 px-6 text-center">
  <p className="text-gray-400 max-w-3xl mx-auto text-lg">
    Sound is what transforms visuals into emotion.  
    We design every detail to elevate storytelling and create impact.
  </p>
</section>

<section className="px-6 py-20">
  <h2 className="text-3xl mb-10">Our Work</h2>

  <div className="grid md:grid-cols-2 gap-8">

    <div className="group">
      <iframe
        className="w-full aspect-video rounded-xl"
        src="https://www.youtube.com/embed/O5bUnG_tgTA"
        allowFullScreen
      />
      <p className="mt-3 text-gray-400 group-hover:text-white transition">
        Porsche Commercial
      </p>
    </div>

    <div className="group">
  <iframe
    className="w-full aspect-video rounded-xl"
    src="https://www.youtube.com/embed/O5bUnG_tgTA"
    allowFullScreen
  />
  <p className="mt-3 text-gray-400 group-hover:text-white transition">
    Porsche Commercial
  </p>
</div>

  </div>
</section>

<section className="py-24 text-center">
  <h2 className="text-3xl mb-4">Let’s Make Something Powerful</h2>

  <p className="text-gray-400 mb-6">
    Ready to collaborate on your next film or commercial?
  </p>

  <a
    href="https://wa.me/your-number"
    className="px-6 py-3 bg-white text-black rounded-full hover:scale-105 transition"
  >
    Start a Project
  </a>
</section>

    </main>
  );
}