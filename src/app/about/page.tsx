"use client";

import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";
import { useState } from "react";

const images = ["/studio/1.jpg", "/studio/2.jpg", "/studio/3.jpg"];

export default function AboutPage() {
  const [activeImage, setActiveImage] = useState<string | null>(null);

  return (
    <main className="bg-black text-white">

      <Navbar />

      {/* HERO */}
      <motion.section
  initial={{ opacity: 0, y: 40 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  className="pt-24 pb-12 text-center"
>
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          About Us
        </h1>

        <p className="text-gray-400 max-w-2xl mx-auto">
          Crafting cinematic sound experiences for brands and films.
        </p>
      </motion.section>

      {/* STORY */}
      <motion.section
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  className="px-6 py-16 max-w-4xl mx-auto text-center"
>
        <p className="text-gray-400 leading-relaxed text-lg">
          Lime Audio Post is an audio post production studio focused on 
          cinematic sound design, audio branding, and mixing for films 
          and commercials.
          <br /><br />
          Over the years, we have collaborated with brands such as Porsche, 
          Honda, and Garuda Indonesia, delivering sound that enhances visual 
          storytelling and creates emotional impact.
        </p>
      </motion.section>

      {/* STUDIO PHOTOS */}
      <section className="px-6 py-20">
        <h2 className="text-3xl mb-10 text-center">Our Workspace</h2>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {images.map((src, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="relative group cursor-pointer"
              onClick={() => setActiveImage(src)}
            >
              <img
                src={src}
                className="rounded-xl w-full h-full object-cover transition duration-500 group-hover:brightness-110"
              />

              {/* GLOW */}
              <div className="absolute inset-0 rounded-xl border border-purple-500/30 group-hover:border-purple-400 group-hover:shadow-[0_0_30px_rgba(168,85,247,0.5)] transition"></div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* LOCATION */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="px-6 py-20 text-center"
      >
        <h2 className="text-3xl mb-6">Visit Us</h2>

        <p className="text-gray-400 mb-8">
          Jakarta, Indonesia
        </p>

        <div className="max-w-4xl mx-auto">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.963031978647!2d106.8059768!3d-6.2685924!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f195f480916d%3A0xf5c95a42c03118dd!2sLime%20Audiopost!5e0!3m2!1sen!2sid!4v1776320698436!5m2!1sen!2sid"
            className="w-full h-[400px] rounded-xl"
            loading="lazy"
          />
        </div>
      </motion.section>

      {/* 🔥 IMAGE MODAL */}
      {activeImage && (
        <div
          className="fixed inset-0 bg-black/90 flex items-center justify-center z-50"
          onClick={() => setActiveImage(null)}
        >
          <motion.img
            src={activeImage}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="max-w-5xl w-full rounded-xl"
          />
        </div>
      )}

    </main>
  );
}