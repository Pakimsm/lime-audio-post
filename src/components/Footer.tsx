export default function Footer() {
  const brands = [
    "/brands/brand1.png",
    "/brands/brand2.png",
    "/brands/brand3.png",
    "/brands/brand4.png",
	"/brands/brand5.png",
	"/brands/brand6.png",
	"/brands/brand7.png",
	"/brands/brand8.png",
	"/brands/brand9.png",
	"/brands/brand10.png",
	"/brands/brand11.png",
  ];

  return (
    <footer className="bg-black border-t border-white/10 py-16 px-6">

      {/* TITLE */}
      <div className="text-center mb-10">
        <p className="text-gray-500 text-sm tracking-widest uppercase">
          Trusted By
        </p>
      </div>

      {/* LOGO GRID */}
      <div className="overflow-hidden">
  <div className="flex gap-12 items-center animate-marquee w-max">

    {[...brands, ...brands].map((logo, i) => (
      <div
        key={i}
        className="flex justify-center items-center opacity-60 hover:opacity-100 transition"
      >
        <img
          src={logo}
          className="h-12 object-contain grayscale hover:grayscale-0 transition"
        />
      </div>
    ))}

  </div>
</div>



      {/* BOTTOM */}
      <div className="text-center mt-12 text-gray-500 text-sm">
        © {new Date().getFullYear()} Lime Audio Post. All rights reserved. @pakimsm
      </div>
	  

    </footer>
  );
}