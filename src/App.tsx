import React from "react";
import { Navigation } from "./components/Navigation";
import { VideoHero } from "./components/VideoHero";
import { TitleSection } from "./components/TitleSection";
import { HeroSection } from "./components/HeroSection";
import { AboutSection } from "./components/AboutSection";
import { VisionSection } from "./components/VisionSection";
import { TracksSection } from "./components/TracksSection";
import { ScheduleSection } from "./components/ScheduleSection";
import  MentorSection  from "./components/MentorSection";
import { Footer } from "./components/Footer";
import { MusicPlayer } from "./components/MusicPlayer";

function App() {
  return (
    <div className="relative min-h-screen bg-black overflow-x-hidden">

      <Navigation />
      <VideoHero />
      <TitleSection />
      <HeroSection />
      
      <div id="about">
        <AboutSection />
      </div>
      
      <div id="vision">
        <VisionSection />
      </div>
      
      <div id="tracks">
        <TracksSection />
      </div>
      
    
      
      <div id="schedule">
        <ScheduleSection />
      </div>
       <div id ="mentor">
        <MentorSection />
       </div>
      <Footer />
      <MusicPlayer />
    </div>
  );
}

export default App;
