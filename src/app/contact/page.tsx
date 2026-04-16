"use client";

import Navbar from "@/components/Navbar";

export default function ContactPage() {
  return (
    <main className="bg-black text-white min-h-screen">

      <Navbar />

      {/* HERO */}
      <section className="py-32 text-center px-6">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Let’s Work Together
        </h1>

        <p className="text-gray-400 max-w-2xl mx-auto">
          Have a project in mind? Send us a message or reach out directly.
        </p>
      </section>

      {/* CONTENT */}
      <section className="px-6 pb-24">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12">

          {/* FORM */}
          <form
            action="https://formspree.io/f/your-form-id"
            method="POST"
            className="space-y-6"
          >
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="w-full p-4 bg-black border border-white/20 rounded-lg focus:outline-none"
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              className="w-full p-4 bg-black border border-white/20 rounded-lg focus:outline-none"
            />

            <textarea
              name="message"
              placeholder="Tell us about your project..."
              rows={5}
              required
              className="w-full p-4 bg-black border border-white/20 rounded-lg focus:outline-none"
            />

            <button
              type="submit"
              className="px-6 py-3 bg-white text-black rounded-full hover:scale-105 transition"
            >
              Send Message
            </button>
          </form>

          {/* CONTACT INFO */}
          <div className="flex flex-col justify-center gap-6">

            <div>
              <h3 className="text-xl mb-2">Email</h3>
              <p className="text-gray-400">your@email.com</p>
            </div>

            <div>
              <h3 className="text-xl mb-2">Phone</h3>
              <p className="text-gray-400">+62 812 3456 7890</p>
            </div>

            {/* WHATSAPP BUTTON */}
            <a
              href="https://wa.me/6281234567890"
              target="_blank"
              className="inline-block mt-4 px-6 py-3 bg-green-500 text-black rounded-full hover:scale-105 transition text-center"
            >
              Chat via WhatsApp
            </a>

          </div>

        </div>
      </section>

    </main>
  );
}