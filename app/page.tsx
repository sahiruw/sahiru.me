// pages/index.js
import Navbar from './components/SquareNav';
import randomImage from "../assests/images.jpeg";
import Image from "next/image"

function Home() {
  return (

    <main>
      <Navbar />
      <Image src="/images.jpeg" width="2500" height="64" alt='hehe' />

    </main>
  );
}

export default Home;