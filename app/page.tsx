import { Preloader } from "@/components/Preloader";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Work } from "@/components/Work";
import { Capabilities } from "@/components/Capabilities";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { FadeIn } from "@/components/FadeIn";

export default function Home() {
  return (
    <>
      <Preloader />
      <Header />
      <main className="min-h-screen relative font-sans transition-colors duration-700 bg-background text-foreground">
        <Hero />
        <FadeIn>
          <Work />
        </FadeIn>
        <FadeIn>
          <Capabilities />
        </FadeIn>
        <FadeIn>
          <Contact />
        </FadeIn>
        <Footer />
      </main>
    </>
  );
}
