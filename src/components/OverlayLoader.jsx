import React, { useState, useEffect } from 'react';

export default function OverlayLoader({ onComplete }) {
  const [active, setActive] = useState(true);

  useEffect(() => {
    // Unmount overlay after animation sequence completes (1.4s)
    const timer = setTimeout(() => {
      setActive(false);
      if (onComplete) onComplete();
    }, 1400);

    return () => clearTimeout(timer);
  }, [onComplete]);

  if (!active) return null;

  return (
    <div className="overlay-loader-wrapper" aria-hidden="true">
      {/* Single screen with 3 side-by-side vertical split columns moving up one after the other */}
      <div className="overlay first"></div>
      <div className="overlay second"></div>
      <div className="overlay third"></div>
    </div>
  );
}
