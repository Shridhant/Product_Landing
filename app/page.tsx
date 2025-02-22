import Navbar from "@/components/Navbar";
import Image from "next/image";
import Hero from "@/components/Hero";

export default function Page() {
  return (
    <div className="min-h-[200vh]">
      <Navbar />
      <Hero />
    </div>
  );
}
