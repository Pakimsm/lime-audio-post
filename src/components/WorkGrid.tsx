"use client";

import { useRef } from "react";

type Work = {
  title: string;
  video: string;
};

const works: Work[] = [
  { title: "Scoot Airlines", video: "/videos/Scoot.mp4" },
  { title: "Garuda Indonesia", video: "/videos/garuda.mp4" },
  { title: "Honda Brio", video: "/videos/honda.mp4" },
  { title: "Netflix Campaign", video: "/videos/netflix.mp4" },
  { title: "Jobstreet", video: "/videos/Jobstreet.mp4" },
  { title: "Mitsubishi Xpander", video: "/videos/Mitsubishi.mp4" },
  { title: "Pizza Hut", video: "/videos/PizzaHut.mp4" },
  { title: "Sony Camera", video: "/videos/Sony.mp4" },
  { title: "Tiktok", video: "/videos/Tiktok.mp4" },
  { title: "Grab Hemat", video: "/videos/Grab.mp4" },
  { title: "Nowness Asia", video: "/videos/Nowness.mp4" },
  { title: "Sang Pemula", video: "/videos/Sang Pemula shortmovie.mp4" },
];

export default function WorkGrid({ limit }: { limit?: number }) {
  const displayWorks = limit ? works.slice(0, limit) : works;

  return (
    <section className="px-6 py-20">
      <h2 className="text-3xl mb-10 text-center">Our Work</h2>

      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {displayWorks.map((work, i) => (
          <VideoCard key={i} work={work} />
        ))}
      </div>
    </section>
  );
}

function VideoCard({ work }: { work: Work }) {
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleMouseEnter = () => {
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play().catch(() => {});
    }
  };

  const handleMouseLeave = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  const handleClick = () => {
  if (videoRef.current) {
    videoRef.current.muted = false; // 🔊 UNMUTE
    videoRef.current.controls = true;
    videoRef.current.play();
  }
};

  return (
    <div
      className="group cursor-pointer"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
    >
      <div className="relative rounded-xl overflow-hidden border border-purple-500/40 group-hover:border-purple-400 transition">

        {/* VIDEO */}
        <video
          ref={videoRef}
          muted
          playsInline
          className="w-full aspect-video object-cover"
		  className="w-full aspect-video object-cover group-hover:scale-105 transition duration-500"
        >
          <source src={work.video} type="video/mp4" />
        </video>

        {/* OVERLAY */}
        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/10 transition" />

        {/* PLAY BUTTON */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-14 h-14 opacity-100 group-hover:opacity-0 transition">
            ▶
          </div>
        </div>

      </div>

      {/* TITLE */}
      <p className="mt-3 text-gray-400 group-hover:text-white transition">
        {work.title}
      </p>
    </div>
  );
}