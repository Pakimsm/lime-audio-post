const works = [
  {
    title: "Porsche Commercial",
    video: "https://www.youtube.com/embed/O5bUnG_tgTA"
  },
  {
    title: "Honda Campaign",
    video: "https://www.youtube.com/embed/O5bUnG_tgTA"
  }
];

export default function WorkGrid() {
  return (
    <section className="px-6 py-20">
      <h2 className="text-3xl mb-10">Our Work</h2>

      <div className="grid md:grid-cols-2 gap-8">
        {works.map((work, i) => (
          <div key={i}>
            <iframe
              className="w-full aspect-video"
              src={work.video}
              allowFullScreen
            />
            <p className="mt-3 text-gray-400">{work.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
}