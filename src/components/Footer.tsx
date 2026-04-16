export default function Footer() {
  const brands = [
    "/brands/brand1.png",
    "/brands/brand2.png",
    "/brands/brand3.png",
    "/brands/brand4.png",
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
      <div className="overflow-x-auto">
  <div className="flex gap-12 items-center w-max mx-auto">

    {brands.map((logo, i) => (
      <div
        key={i}
        className="flex justify-center items-center opacity-60 hover:opacity-100 transition"
      >
        <img
          src={logo}
          className="h-10 object-contain grayscale hover:grayscale-0 transition"
        />
      </div>
    ))}

  </div>
</div>

      {/* BOTTOM */}
      <div className="text-center mt-12 text-gray-500 text-sm">
        © {new Date().getFullYear()} Lime Audio Post. All rights reserved.
      </div>

    </footer>
  );
}