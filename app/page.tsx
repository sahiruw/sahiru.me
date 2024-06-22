import Navbar from './components/SquareNav';
import randomImage from "../assests/images.jpeg";
import Image from "next/image";
import { useEffect, useState } from 'react';
import About from './components/About';
import HelloCard from './components/HelloCard';
import LogoBar from './components/LogoBar';
import Work from './components/Work';

function Home() {
  let ids = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  return (
    <main className='bg-neutral-900 font-mono ' id='home'>
      <Navbar />
      <LogoBar />
      
      <div className="video-container blur-sm z-0 ">
        <video preload="auto" autoPlay loop playsInline muted>
          <source src="/back.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        
      </div>

      <HelloCard />
      
      <About  />

      <Work />
    </main>
  );
}

export default Home;
