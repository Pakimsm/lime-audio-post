"use client";

const collaborators = [
  {
    name: "Joe Taslim",
    role: "Voice Actress",
    desc: "Warm cinematic tone",
    image: "/collab/vo1.jpg",
  },
  {
    name: "Nicholas Saputra",
    role: "Voice Actress",
    desc: "Bright & commercial voice",
    image: "/collab/vo2.jpg",
  },
  {
    name: "Martin Westlake",
    role: "Voice Actress",
    desc: "Emotional & dynamic",
    image: "/collab/player1.jpg",
  },
  {
    name: "Christine Hakim",
    role: "Voice Actress",
    desc: "Modern cinematic scoring",
    image: "/collab/player2.jpg",
  },
];

export default function Collaborators() {
  return (
    <section className="px-6 py-24 bg-black text-white">
      <div className="max-w-6xl mx-auto text-center">

        {/* TITLE */}
        <h2 className="text-3xl md:text-4xl mb-16 tracking-widest text-gray-300">
          COLLABORATORS
        </h2>

        {/* GRID */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">

          {collaborators.map((item, i) => (
            <div
              key={i}
              className="group text-center"
            >

              {/* IMAGE */}
              <div className="overflow-hidden rounded-xl mb-4">
                <img
                  src={item.image}
                  className="w-full h-[220px] object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition duration-500"
                />
              </div>

              {/* NAME */}
              <h3 className="text-sm md:text-base font-medium">
                {item.name}
              </h3>

              {/* ROLE */}
              <p className="text-xs text-gray-400">
                {item.role}
              </p>

              {/* DESC */}
              <p className="text-xs text-gray-600 mt-1">
                {item.desc}
              </p>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
}