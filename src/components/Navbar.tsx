export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 px-6 py-4 flex justify-between items-center bg-black/50 backdrop-blur-md border-b border-white/10">

      {/* LOGO */}
      <img
  src="/logo.png"
  alt="Lime Audio Post"
  className="h-8"
/>

      {/* MENU */}
      <div className="hidden md:flex gap-8 text-sm text-gray-300">
        <a href="#" className="hover:text-white transition">Work</a>
        <a href="#" className="hover:text-white transition">Services</a>
        <a href="#" className="hover:text-white transition">About</a>
        <a href="#" className="hover:text-white transition">Contact</a>
      </div>

      {/* CTA */}
      <a
        href="#"
        className="hidden md:block px-5 py-2 bg-white text-black rounded-full text-sm hover:scale-105 transition"
      >
        Start Project
      </a>

    </nav>
  );
}