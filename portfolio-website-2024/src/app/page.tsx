import Image from "next/image";
import { HeroSection } from "./components/HeroSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#231942] constainer mx-auto px-10 py-4">
      <HeroSection/>
    </main>
  );
}
