"use client";
import { useState } from "react";
import { Headphones, Music, MonitorSpeaker, Mic, Plane } from "lucide-react";

const services = [
  {
    title: "Audio Branding",
    desc: "Crafting distinctive sonic identities that resonate deeply and define your brand’s enduring presence",
    icon: Headphones,
  },
  {
    title: "Commercial Jingle",
    desc: "Memorable melodies crafted to captivate audiences and create lasting brand affinity",
    icon: Music,
  },
  {
    title: "Mixing & Mastering",
    desc: "Elevating your audio to broadcast-quality excellence — refined, polished, and powerfully immersive",
    icon: MonitorSpeaker,
  },
  {
    title: "Voice Over Production",
    desc: "From meticulous casting to flawless final recording, delivering voices that inspire and connect",
    icon: Mic,
  },
  {
    title: "Sound Design",
    desc: "Creating rich, cinematic soundscapes that evoke emotion and bring your brand story to life with depth and sophistication",
    icon: Plane,
  },
];

export default function Services() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const playSound = () => {
    const audio = new Audio("/hover.mp3");
    audio.volume = 0.2;
    audio.play().catch(() => {});
  };

  const toggleService = (index: number) => {
    playSound();                    // mainin suara setiap klik
    setOpenIndex(openIndex === index ? null : index); // klik lagi = tutup
  };

  return (
    <section
      id="services"
      className="relative px-6 py-24 bg-black text-white overflow-hidden"
    >
      {/* BACKGROUND GLOW */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute w-[500px] h-[500px] bg-purple-500 blur-[120px] top-[-100px] left-[20%]"></div>
        <div className="absolute w-[400px] h-[400px] bg-blue-500 blur-[120px] bottom-[-100px] right-[20%]"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl mb-16 tracking-widest text-gray-300">
          OUR SERVICES
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-10">
          {services.map((item, i) => {
            const Icon = item.icon;
            const isOpen = openIndex === i;

            return (
              <div
                key={i}
                onClick={() => toggleService(i)}
                className="group cursor-pointer flex flex-col items-center text-center p-6 rounded-2xl border border-white/10 hover:border-white/30 transition-all duration-300 hover:translate-y-[-4px]"
              >
                {/* ICON */}
                <div className="mb-4">
                  <Icon 
                    className={`w-10 h-10 transition-all duration-300 ${
                      isOpen ? "text-white scale-110" : "text-white/70 group-hover:text-white"
                    }`} 
                  />
                </div>

                {/* TITLE */}
                <h3 className="text-sm md:text-base font-medium mb-3">
                  {item.title}
                </h3>

                {/* DESCRIPTION - muncul dengan animasi */}
                <div
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${
                    isOpen 
                      ? "max-h-40 opacity-100 mt-2" 
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="text-xs text-gray-400 leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                {/* Optional: indikator panah kecil */}
                <div className={`mt-3 text-xs transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}>
                  ↓
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}