import Image from "next/image";
import { HeroSection } from "./components/HeroSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#231942]">
      
      <div className="container mt-24 mx-auto py-4">
        <HeroSection/>
      </div>
    </main>
  );
}
