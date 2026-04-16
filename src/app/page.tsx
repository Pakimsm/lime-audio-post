"use client";

import Collaborators from "@/components/Collaborators";
import { useEffect } from "react";
import WorkGrid from "@/components/WorkGrid";
import Services from "@/components/Services";
import AboutPreview from "@/components/AboutPreview";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Home() {

  // 🔊 AUTO AUDIO (AFTER FIRST INTERACTION)
  useEffect(() => {
    let audio: HTMLAudioElement | null = null;

    const handleFirstInteraction = () => {
      if (!audio) {
        audio = new Audio("/intro.mp3"); // ✅ karena file di /public
        audio.volume = 0.25; // lebih subtle
        audio.loop = false;

        audio.play().catch(() => {});
      }

      window.removeEventListener("click", handleFirstInteraction);
      window.removeEventListener("scroll", handleFirstInteraction);
    };

    window.addEventListener("click", handleFirstInteraction);
    window.addEventListener("scroll", handleFirstInteraction);

    return () => {
      window.removeEventListener("click", handleFirstInteraction);
      window.removeEventListener("scroll", handleFirstInteraction);
    };
  }, []);

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
          playsInline
          className="absolute w-full h-full object-cover"
        >
          <source src="/showreel.mp4" type="video/mp4" />
        </video>

        {/* OVERLAY */}
        <div className="absolute inset-0 bg-black/60" />

        {/* CONTENT */}
        <div className="relative z-10 px-6">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            We Craft Sound <br /> That Wants To Be Remembered
          </h1>

          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
            Cinematic sound design for films, commercials, and brands.
          </p>
        </div>
      </section>

      {/* ABOUT */}
      <section className="py-24 px-6 text-center">
        <p className="text-gray-400 max-w-3xl mx-auto text-lg leading-relaxed">
          Sound is what transforms visuals into emotion.  
          We design every detail to elevate storytelling and create impact.  
          <br /><br />
          We provide end-to-end audio post production — from jingle creation 
          to cinematic sound design for commercials and films.
        </p>
      </section>

      {/* WORK (HOME - LIMIT 2) */}
<WorkGrid limit={2} />

<div className="text-center -mt-10 mb-20">
  <a
    href="/work"
    className="text-sm text-gray-400 hover:text-white transition"
  >
    View All Work →
  </a>
</div>

      {/* SERVICES */}
	<section id="services">
  <Services />
</section>
	  
	  {/* Collaborators */}
	  	<section id="collaborators">
  <Collaborators />
</section>

  {/* About */}
	  	<section id="AboutPreview">
  <AboutPreview />
</section>


      {/* CTA */}
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
	  
	    {/* Footer */}
<Footer />

    </main>
  );
}