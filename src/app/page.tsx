 
import React from "react";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/NavBar";
import AboutSection from "./components/AboutSection";
import Footer from "./components/Footer";
import EmailSection from "./components/EmailSection";
import ProjectsSection from "./components/ProjectsSection";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#212222]">
      <Navbar/>
      <div className="container max-auto px-12 py-4">
      <HeroSection/>
      <AboutSection/>
      <ProjectsSection/>
      <EmailSection/>
      
      </div>
      <Footer/>
    </main>
  );
}
    