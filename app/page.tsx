import Navbar from './components/SquareNav';
import About from './components/About';
import HelloCard from './components/HelloCard';
import Work from './components/Work';
import ReviewPopups from './components/ReviewPopups';

function Home() {
  return (
    <main className='bg-[#0A1020] min-h-screen text-white relative overflow-hidden' id='home'>
      {/* Dynamic Fiverr & Client Review Popups */}
      <ReviewPopups />

      {/* Subtle Dark Grid & Gradient Atmosphere Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#1e293b_0,transparent_50%)] opacity-40 pointer-events-none"></div>

      {/* Hero Section */}
      <HelloCard />

      {/* Floating Dock Navigation */}
      <Navbar />

      {/* Main Experience & Portfolio Sections */}
      <About />
      <Work />

      {/* Footer */}
      <footer className="py-12 border-t border-white/5 text-center text-xs text-neutral-500 bg-[#070D1B]">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            © {new Date().getFullYear()} Sahiru Wijesinghe. All rights reserved.
          </div>
          <div className="flex gap-6 text-neutral-400">
            <a href="#services" className="hover:text-white transition-colors">Services</a>
            <a href="#work" className="hover:text-white transition-colors">Case Studies</a>
            <a href="#process" className="hover:text-white transition-colors">Process</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          </div>
        </div>
      </footer>
    </main>
  );
}

export default Home;
