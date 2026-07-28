"use client";
import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import reviews from "../../fiverr_reviews.json";

interface Review {
  comment: string;
  username: string;
  reviewer_country: string;
  value: number;
}

const goodReviews = reviews.reviews
  .filter((r) => r.comment && r.comment.length > 20 && r.value >= 4)
  .slice(0, 100) as Review[];

const getWeightedRandomReview = (): Review => {
  const weights = goodReviews.map((r) => Math.pow(r.comment.length, 1.5));
  const totalWeight = weights.reduce((sum, w) => sum + w, 0);
  let random = Math.random() * totalWeight;
  for (let i = 0; i < goodReviews.length; i++) {
    random -= weights[i];
    if (random <= 0) return goodReviews[i];
  }
  return goodReviews[goodReviews.length - 1];
};

export default function ReviewPopups() {
  const [activePopups, setActivePopups] = useState<
    { id: number; review: Review; isExiting: boolean; isPaused: boolean }[]
  >([]);
  const isHoveringRef = useRef(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    let popupId = 0;
    const showRandomPopup = () => {
      if (isHoveringRef.current) return;
      const review = getWeightedRandomReview();
      const id = popupId++;
      setActivePopups((prev) => [...prev, { id, review, isExiting: false, isPaused: false }]);

      const startExit = () => {
        setTimeout(() => {
          setActivePopups((prev) => {
            const popup = prev.find((p) => p.id === id);
            if (popup?.isPaused) { setTimeout(startExit, 500); return prev; }
            return prev.map((p) => (p.id === id ? { ...p, isExiting: true } : p));
          });
        }, 100);
      };
      setTimeout(startExit, 6500);

      const checkAndRemove = () => {
        setTimeout(() => {
          setActivePopups((prev) => {
            const popup = prev.find((p) => p.id === id);
            if (popup && !popup.isExiting) { setTimeout(checkAndRemove, 500); return prev; }
            if (popup?.isPaused) { setTimeout(checkAndRemove, 500); return prev; }
            return prev.filter((p) => p.id !== id);
          });
        }, 500);
      };
      setTimeout(checkAndRemove, 7000);
    };

    const initialTimeout = setTimeout(showRandomPopup, 2500);
    const interval = setInterval(showRandomPopup, 9000 + Math.random() * 2000);
    return () => { clearTimeout(initialTimeout); clearInterval(interval); };
  }, [isMobile]);

  const getStarCount = (value: unknown): number => {
    const num = Number(value);
    if (isNaN(num) || !isFinite(num)) return 5;
    return Math.max(0, Math.min(5, Math.floor(num)));
  };

  const countryNameToCode: { [key: string]: string } = {
    "United States": "us", "United Kingdom": "gb", "Canada": "ca", "Australia": "au",
    "Germany": "de", "France": "fr", "Spain": "es", "Italy": "it", "Netherlands": "nl",
    "Belgium": "be", "Switzerland": "ch", "Sweden": "se", "Norway": "no", "Denmark": "dk",
    "Finland": "fi", "Poland": "pl", "Austria": "at", "Portugal": "pt", "Ireland": "ie",
    "New Zealand": "nz", "India": "in", "Japan": "jp", "South Korea": "kr", "Singapore": "sg",
    "Malaysia": "my", "Thailand": "th", "Indonesia": "id", "Philippines": "ph", "Pakistan": "pk",
    "Bangladesh": "bd", "Brazil": "br", "Mexico": "mx", "Argentina": "ar", "Colombia": "co",
    "South Africa": "za", "Egypt": "eg", "United Arab Emirates": "ae", "Saudi Arabia": "sa",
    "Turkey": "tr", "Russia": "ru", "Hong Kong": "hk", "Taiwan": "tw", "Sri Lanka": "lk",
  };

  const getCountryCode = (countryName: string): string => {
    if (!countryName) return "us";
    return countryNameToCode[countryName] || countryName.toLowerCase().substring(0, 2);
  };

  const handleMouseEnter = (id: number) => {
    isHoveringRef.current = true;
    setActivePopups((prev) => prev.map((p) => (p.id === id ? { ...p, isPaused: true } : p)));
  };

  const handleMouseLeave = (id: number) => {
    isHoveringRef.current = false;
    setActivePopups((prev) => prev.map((p) => (p.id === id ? { ...p, isPaused: false } : p)));
  };

  return (
    <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
      {activePopups.map(({ id, review, isExiting }) => (
        <div
          key={id}
          className={`absolute transition-all duration-500 ease-out pointer-events-auto cursor-default ${isExiting ? "opacity-0 translate-y-4" : "opacity-100 translate-y-0"
            }`}
          style={{
            left: isMobile ? '5%' : '75%',
            top: '12%',
            maxWidth: isMobile ? '90vw' : '300px',
            animation: isExiting ? undefined : "popupIn 0.5s ease-out",
          }}
          onMouseEnter={() => handleMouseEnter(id)}
          onMouseLeave={() => handleMouseLeave(id)}
        >
          <div
            className="rounded-2xl p-4 shadow-2xl backdrop-blur-xl border"
            style={{ background: 'var(--bg-card)', borderColor: 'var(--border)' }}
          >
            <div className="flex items-center justify-between gap-2 mb-2">
              <div className="flex text-xs" style={{ color: 'var(--amber)' }}>
                {[...Array(5)].map((_, i) => (
                  <span key={i} style={{ opacity: i < getStarCount(review.value) ? 1 : 0.2 }}>★</span>
                ))}
              </div>
              <span
                className="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded border"
                style={{ color: 'var(--amber)', background: 'var(--amber-light)', borderColor: 'var(--amber)' }}
              >
                Verified Client
              </span>
            </div>
            <p className="text-xs leading-relaxed mb-3 font-sans italic" style={{ color: 'var(--text-muted)' }}>
              &ldquo;{review.comment}&rdquo;
            </p>
            <div className="flex items-center justify-between flex-wrap gap-1 border-t pt-2" style={{ borderColor: 'var(--border)' }}>
              <span className="text-[11px] font-mono" style={{ color: 'var(--text-faint)' }}> -  {review.username}</span>
              <div className="flex items-center gap-1.5">
                <Image
                  src={`https://flagcdn.com/w40/${getCountryCode(review.reviewer_country)}.png`}
                  alt={review.reviewer_country}
                  width={16}
                  height={12}
                  className="rounded-sm w-4 h-3 object-cover"
                />
                <span className="text-[10px] hidden sm:inline font-mono" style={{ color: 'var(--text-faint)' }}>
                  {review.reviewer_country}
                </span>
              </div>
            </div>
          </div>
        </div>
      ))}

      <style jsx>{`
        @keyframes popupIn {
          from { opacity: 0; transform: translateY(20px) scale(0.95); }
          to   { opacity: 1; transform: translateY(0) scale(1); }
        }
      `}</style>
    </div>
  );
}
