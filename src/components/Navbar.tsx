import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 px-6 py-4 flex justify-between items-center bg-black/50 backdrop-blur-md border-b border-white/10">

      {/* LOGO (CLICK → HOME) */}
      <Link href="/">
        <img
          src="/logo.png"
          alt="Lime Audio Post"
          className="h-8 cursor-pointer"
        />
      </Link>

      {/* MENU */}
      <div className="hidden md:flex gap-8 text-sm text-gray-300">
        
        {/* WORK → PAGE /work */}
        <Link href="/work" className="hover:text-white transition">
          Work
        </Link>

        {/* SCROLL SECTIONS */}
        <Link href="/#services" className="hover:text-white transition">
  Services
</Link>
		
		 {/* SCROLL SECTIONS */}
		 
	<Link href="/#collaborators" className="hover:text-white transition">
  Collaborators
</Link>

        <Link href="about" className="hover:text-white transition">
          About
        </Link>

        <Link href="/contact" className="hover:text-white transition">
  Contact
</Link>

      </div>

      {/* CTA */}
      <a
        href="#contact"
        className="hidden md:block px-5 py-2 bg-white text-black rounded-full text-sm hover:scale-105 transition"
      >
        Start Project
      </a>

    </nav>
  );
}