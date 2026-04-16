import WorkGrid from "@/components/WorkGrid";
import Navbar from "@/components/Navbar";

export default function WorkPage() {
  return (
    <main className="bg-black text-white">
      <Navbar />

      {/* FULL WORK */}
      <WorkGrid />

    </main>
  );
}