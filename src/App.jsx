import Navbar from "./components/Navbar";
import FloatingDecor from "./components/FloatingDecor";
import MusicPlayer from "./components/MusicPlayer";
import Hero from "./sections/Hero";
import Story from "./sections/Story";
import Gallery from "./sections/Gallery";
import Letter from "./sections/Letter";
import Gift from "./sections/Gift";
import Ending from "./sections/Ending";
import VideoSection from "./components/VideoSection";

export default function App() {
  return (
    <div className="app">
      <Navbar />
      <FloatingDecor />
      <MusicPlayer />

      <main>
        <Hero />
        <Story />
        <Gallery />
        <VideoSection />
        <Letter />
        <Gift />
        <Ending />
      </main>
    </div>
  );
}