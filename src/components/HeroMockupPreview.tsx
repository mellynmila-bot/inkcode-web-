import React, { useState } from 'react';
import { HERO_IMAGE, HERO_FALLBACK_URL } from '../data/inkcodeData';

export const HeroMockupPreview: React.FC = () => {
  const [imgSrc, setImgSrc] = useState<string>(HERO_IMAGE);

  return (
    <div className="relative w-full flex items-center justify-center py-2 sm:py-4">
      {/* Subtle Ambient Monochromatic Frame */}
      <div className="relative w-full max-w-[560px] animate-float-slow">
        <div className="relative overflow-hidden border border-[#666666]/40 bg-[#242424] shadow-2xl">
          <img
            src={imgSrc}
            alt="@inkcode.web — Websites para tatuadores"
            referrerPolicy="no-referrer"
            onError={() => {
              if (imgSrc !== HERO_FALLBACK_URL) {
                setImgSrc(HERO_FALLBACK_URL);
              }
            }}
            className="w-full h-auto object-cover block"
          />
        </div>
      </div>
    </div>
  );
};
