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

// Get reviews with meaningful comments (longer than 20 chars) and 4+ stars
const goodReviews = reviews.reviews
  .filter((r) => r.comment && r.comment.length > 20 && r.value >= 4)
  .slice(0, 100) as Review[];

// Create weighted array - longer reviews appear more often
const getWeightedRandomReview = (): Review => {
  // Weight by comment length (longer = higher weight)
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
    { id: number; review: Review; position: { x: number; y: number }; isExiting: boolean; isPaused: boolean }[]
  >([]);
  const isHoveringRef = useRef(false);
  const [isMobile, setIsMobile] = useState(false);

  // Check for mobile viewport
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    let popupId = 0;
    const showRandomPopup = () => {
      // Don't show new popups while hovering
      if (isHoveringRef.current) return;
      
      const review = getWeightedRandomReview();
      const id = popupId++;
      
      // Random position - adjust for mobile vs desktop
      const position = isMobile 
        ? { x: 5, y: 5 }  // Mobile: top left with padding
        : { x: 80, y: 5 }; // Desktop: top right corner area
      
      setActivePopups((prev) => [...prev, { id, review, position, isExiting: false, isPaused: false }]);

      // Start exit animation after 6 seconds (only if not paused)
      const startExit = () => {
        setTimeout(() => {
          setActivePopups((prev) => {
            const popup = prev.find((p) => p.id === id);
            if (popup?.isPaused) {
              // If paused, check again in 500ms
              setTimeout(startExit, 500);
              return prev;
            }
            return prev.map((p) => (p.id === id ? { ...p, isExiting: true } : p));
          });
        }, 100);
      };

      setTimeout(startExit, 6000);

      // Remove popup after exit animation (500ms)
      const checkAndRemove = () => {
        setTimeout(() => {
          setActivePopups((prev) => {
            const popup = prev.find((p) => p.id === id);
            if (popup && !popup.isExiting) {
              // Not yet exiting, check again
              setTimeout(checkAndRemove, 500);
              return prev;
            }
            if (popup?.isPaused) {
              setTimeout(checkAndRemove, 500);
              return prev;
            }
            return prev.filter((p) => p.id !== id);
          });
        }, 500);
      };

      setTimeout(checkAndRemove, 6500);
    };

    // Show first popup after 1 second
    const initialTimeout = setTimeout(showRandomPopup, 1000);

    // Then show a new popup every 3-5 seconds
    const interval = setInterval(() => {
      showRandomPopup();
    }, 7000 + Math.random() * 2000);

    return () => {
      clearTimeout(initialTimeout);
      clearInterval(interval);
    };
  }, [isMobile]);

  const truncateComment = (comment: string, maxLength: number = 100) => {
    // Shorter truncation on mobile
    const limit = isMobile ? 80 : maxLength;
    if (comment.length <= limit) return comment;
    return comment.slice(0, limit).trim() + "...";
  };

  const getStarCount = (value: unknown): number => {
    const num = Number(value);
    if (isNaN(num) || !isFinite(num)) return 5;
    return Math.max(0, Math.min(5, Math.floor(num)));
  };

  // Map country names to country codes for flag URLs
  const countryNameToCode: { [key: string]: string } = {
    "United States": "us",
    "United Kingdom": "gb",
    "Canada": "ca",
    "Australia": "au",
    "Germany": "de",
    "France": "fr",
    "Spain": "es",
    "Italy": "it",
    "Netherlands": "nl",
    "Belgium": "be",
    "Switzerland": "ch",
    "Sweden": "se",
    "Norway": "no",
    "Denmark": "dk",
    "Finland": "fi",
    "Poland": "pl",
    "Czech Republic": "cz",
    "Austria": "at",
    "Portugal": "pt",
    "Greece": "gr",
    "Ireland": "ie",
    "New Zealand": "nz",
    "India": "in",
    "China": "cn",
    "Japan": "jp",
    "South Korea": "kr",
    "Singapore": "sg",
    "Malaysia": "my",
    "Thailand": "th",
    "Indonesia": "id",
    "Philippines": "ph",
    "Vietnam": "vn",
    "Pakistan": "pk",
    "Bangladesh": "bd",
    "Brazil": "br",
    "Mexico": "mx",
    "Argentina": "ar",
    "Chile": "cl",
    "Colombia": "co",
    "Peru": "pe",
    "South Africa": "za",
    "Egypt": "eg",
    "Nigeria": "ng",
    "Kenya": "ke",
    "United Arab Emirates": "ae",
    "Saudi Arabia": "sa",
    "Israel": "il",
    "Turkey": "tr",
    "Russia": "ru",
    "Ukraine": "ua",
    "Hong Kong": "hk",
    "Taiwan": "tw",
    "Sri Lanka": "lk",
  };

  const getCountryCode = (countryName: string): string => {
    return countryNameToCode[countryName] || countryName.toLowerCase().substring(0, 2);
  };

  const handleMouseEnter = (id: number) => {
    isHoveringRef.current = true;
    setActivePopups((prev) =>
      prev.map((p) => (p.id === id ? { ...p, isPaused: true } : p))
    );
  };

  const handleMouseLeave = (id: number) => {
    isHoveringRef.current = false;
    setActivePopups((prev) =>
      prev.map((p) => (p.id === id ? { ...p, isPaused: false } : p))
    );
  };

  return (
    <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
      {activePopups.map(({ id, review, position, isExiting }) => (
        <div
          key={id}
          className={`absolute transition-all duration-500 ease-out pointer-events-auto cursor-default ${
            isExiting ? "opacity-0 translate-y-4" : "opacity-100 translate-y-0"
          }`}
          style={{
            left: isMobile ? `${position.x}%` : `${position.x}%`,
            top: `${position.y}%`,
            right: isMobile ? `${position.x}%` : 'auto',
            animation: isExiting ? undefined : "popupIn 0.5s ease-out",
          }}
          onMouseEnter={() => handleMouseEnter(id)}
          onMouseLeave={() => handleMouseLeave(id)}
        >
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-3 md:p-4 max-w-[calc(100vw-2rem)] md:max-w-xs shadow-2xl">
            <div className="flex items-center gap-2 mb-2">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className={`text-xs md:text-sm ${i < getStarCount(review.value) ? 'text-yellow-400' : 'text-white/30'}`}>★</span>
                ))}
              </div>
              <span className="text-white/60 text-[10px] md:text-xs">Fiverr Review</span>
            </div>
            <p className="text-white/90 text-xs md:text-sm leading-relaxed mb-2">
              "{truncateComment(review.comment)}"
            </p>
            <div className="flex items-center justify-between flex-wrap gap-1">
              <span className="text-white/60 text-[10px] md:text-xs">— {review.username}</span>
              <div className="flex items-center gap-1 md:gap-2">
                <Image
                  src={`https://flagcdn.com/w40/${getCountryCode(review.reviewer_country)}.png`}
                  alt={review.reviewer_country}
                  width={16}
                  height={12}
                  className="rounded-sm md:w-5 md:h-[15px]"
                />
                <span className="text-white/40 text-[10px] md:text-xs hidden sm:inline">{review.reviewer_country}</span>
              </div>
            </div>
          </div>
        </div>
      ))}
      
      <style jsx>{`
        @keyframes popupIn {
          from {
            opacity: 0;
            transform: translateY(20px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
      `}</style>
    </div>
  );
}
