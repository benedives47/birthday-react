import Navbar from "./components/Navbar";
import FloatingDecor from "./components/FloatingDecor";
import MusicPlayer from "./components/MusicPlayer";
import Hero from "./sections/Hero";
import Story from "./sections/Story";
import Gallery from "./sections/Gallery";
import Letter from "./sections/Letter";
import Gift from "./sections/Gift";
import Ending from "./sections/Ending";

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
        <Letter />
        <Gift />
        <Ending />
      </main>
    </div>
  );
}