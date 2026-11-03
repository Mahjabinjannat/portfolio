import About from "@/components/About";
import Banner from "@/components/Banner";
import Contact from "@/components/Contact";
import Education from "@/components/Education";
import Footer from "@/components/Footer";
import Nav from "@/components/Nav";
import OffScreen from "@/components/OffScreen";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <>
      <Nav />
      {/* Bottom padding on small screens keeps the footer clear of the tab bar. */}
      <div className="mx-auto max-w-[1080px] px-4 max-[720px]:pb-[calc(32px+env(safe-area-inset-bottom))] min-[720px]:px-10">
        <main id="top">
          <Banner />
          <Projects />
          <About />
          <Education />
          <Skills />
          <OffScreen />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
}
