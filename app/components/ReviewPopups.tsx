"use client";

import { useEffect, useState, useRef } from "react";
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
  .slice(0, 50) as Review[];

export default function ReviewPopups() {
  const [activePopups, setActivePopups] = useState<
    { id: number; review: Review; position: { x: number; y: number }; isExiting: boolean; isPaused: boolean }[]
  >([]);
  const isHoveringRef = useRef(false);

  useEffect(() => {
    let popupId = 0;    const showRandomPopup = () => {
      // Don't show new popups while hovering
      if (isHoveringRef.current) return;
      
      const review = goodReviews[Math.floor(Math.random() * goodReviews.length)];
      const id = popupId++;
        // Random position - top right corner area
      const position = {
        x: 80, // 60% to 85% from left
        y: 5,  // 5% to 25% from top
      };      setActivePopups((prev) => [...prev, { id, review, position, isExiting: false, isPaused: false }]);

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
    };    // Show first popup after 1 second
    const initialTimeout = setTimeout(showRandomPopup, 1000);

    // Then show a new popup every 3-5 seconds
    const interval = setInterval(() => {
      showRandomPopup();
    }, 6000 + Math.random() * 2000);    return () => {
      clearTimeout(initialTimeout);
      clearInterval(interval);
    };
  }, []);
  const truncateComment = (comment: string, maxLength: number = 100) => {
    if (comment.length <= maxLength) return comment;
    return comment.slice(0, maxLength).trim() + "...";
  };

  const getStarCount = (value: unknown): number => {
    const num = Number(value);
    if (isNaN(num) || !isFinite(num)) return 5;
    return Math.max(0, Math.min(5, Math.floor(num)));
  };  const handleMouseEnter = (id: number) => {
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
            left: `${position.x}%`,
            top: `${position.y}%`,
            animation: isExiting ? undefined : "popupIn 0.5s ease-out",
          }}
          onMouseEnter={() => handleMouseEnter(id)}
          onMouseLeave={() => handleMouseLeave(id)}
        ><div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-4 max-w-xs shadow-2xl">            <div className="flex items-center gap-2 mb-2">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className={`text-sm ${i < getStarCount(review.value) ? 'text-yellow-400' : 'text-white/30'}`}>★</span>
                ))}
              </div>
              <span className="text-white/60 text-xs">Fiverr Review</span>
            </div>
            <p className="text-white/90 text-sm leading-relaxed mb-2">
              "{truncateComment(review.comment)}"
            </p>
            <div className="flex items-center justify-between">
              <span className="text-white/60 text-xs">— {review.username}</span>
              <span className="text-white/40 text-xs">{review.reviewer_country}</span>
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
