import Link from "next/link";

export default function AboutPreview() {
  return (
    <section id="about" className="py-24 px-6 text-center">
      <div className="max-w-3xl mx-auto">

        <h2 className="text-3xl mb-6">About</h2>

        <p className="text-gray-400 text-lg leading-relaxed">
          We are a cinematic audio post production studio based in Indonesia, 
          working with brands and filmmakers to craft impactful sound.
          <br /><br />
          From commercials to films, we focus on creating sound that elevates 
          storytelling and leaves a lasting impression.
        </p>

        <Link
          href="/about"
          className="inline-block mt-8 text-sm text-purple-400 hover:text-white transition"
        >
          Read More →
        </Link>

      </div>
    </section>
  );
}