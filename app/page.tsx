import Navbar from './components/SquareNav';
import About from './components/About';
import HelloCard from './components/HelloCard';
import Work from './components/Work';
import ReviewPopups from './components/ReviewPopups';
import ScrollAndCursor from './components/ScrollAndCursor';
import ThemeToggle from './components/ThemeToggle';

function Home() {
  return (
    <main
      id="home"
      className="relative overflow-x-hidden min-h-screen"
      style={{ background: 'var(--bg)', color: 'var(--text)' }}
    >
      {/* Theme toggle - top right */}
      <ThemeToggle />

      {/* Scroll progress & cursor trail */}
      <ScrollAndCursor />

      {/* Grain texture */}
      <div className="grain-overlay" />

      {/* Social proof review popups */}
      <ReviewPopups />

      {/* Soft ambient glow - adapts to theme via opacity */}
      <div
        className="pointer-events-none absolute top-0 right-0 w-[600px] h-[600px] rounded-full blur-3xl -z-0 opacity-30"
        style={{ background: 'radial-gradient(circle, var(--amber-light), transparent 70%)' }}
      />
      <div
        className="pointer-events-none absolute top-[40%] left-[-100px] w-[500px] h-[500px] rounded-full blur-3xl -z-0 opacity-20"
        style={{ background: 'radial-gradient(circle, rgba(124,58,237,0.15), transparent 70%)' }}
      />

      {/* Hero */}
      <HelloCard />

      {/* Floating dock nav */}
      <Navbar />

      {/* All sections */}
      <About />
      <Work />

      {/* Footer */}
      <footer
        className="relative z-10 py-10 border-t text-xs"
        style={{ borderColor: 'var(--border)', background: 'var(--bg)', color: 'var(--text-faint)' }}
      >
        <div
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4"
        >
          <div>
            <span className="font-serif italic font-semibold text-sm" style={{ color: 'var(--text)' }}>
              Sahiru Wijesinghe
            </span>
            <span style={{ color: 'var(--text-faint)' }}> - Freelance Engineer &amp; Consultant</span>
            <div className="mt-0.5 font-mono text-[11px]">
              © {new Date().getFullYear()} Sahiru Wijesinghe. All rights reserved.
            </div>
          </div>
          <div className="flex flex-wrap gap-6 font-mono text-xs" style={{ color: 'var(--text-faint)' }}>
            {['#problems', '#services', '#work', '#experience', '#process', '#contact'].map((href) => (
              <a
                key={href}
                href={href}
                className="capitalize transition-colors hover:text-[var(--amber)]"
              >
                {href.replace('#', '')}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </main>
  );
}

export default Home;
