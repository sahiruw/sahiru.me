import Navbar from './components/SquareNav';
import randomImage from "../assests/images.jpeg";
import Image from "next/image";
import { useEffect, useState } from 'react';
import About from './components/About';
import HelloCard from './components/HelloCard';
import LogoBar from './components/LogoBar';
import Work from './components/Work';

function Home() {

  return (
    <main className='bg-neutral-900 ' id='home'>
      {/* <Navbar /> */}
      <div className="video-container blur-sm z-0 relative">
        <video preload="auto" autoPlay loop playsInline muted className="absolute inset-0 w-full h-full object-cover">
          <source src="/back.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-black opacity-60"></div>

        <div className="absolute inset-0 bg-blue-900 opacity-20"></div>
      </div>

      <HelloCard />

      <Navbar />

    </main>
  );
}

export default Home;
