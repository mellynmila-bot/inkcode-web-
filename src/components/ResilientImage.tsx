import React, { useState } from 'react';

interface ResilientImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  fallbackTitle?: string;
  fallbackSubtitle?: string;
}

export const ResilientImage: React.FC<ResilientImageProps> = ({
  src,
  alt,
  fallbackTitle = '@inkcode.web',
  fallbackSubtitle = 'Fotografia Editorial Monocromática',
  className = '',
  ...props
}) => {
  const [hasError, setHasError] = useState(false);

  if (hasError || !src) {
    return (
      <div
        className={`flex flex-col items-center justify-center bg-[#242424] text-[#D4D4D4] p-6 border border-[#666666]/30 select-none ${className}`}
        role="img"
        aria-label={alt}
      >
        <svg
          className="w-10 h-10 mb-3 text-[#A3A3A3]"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.25"
        >
          <path d="M12 2L15 8L21 9L16.5 14L18 20L12 17L6 20L7.5 14L3 9L9 8L12 2Z" />
        </svg>
        <span className="font-display text-sm font-semibold tracking-tight text-white text-center">
          {fallbackTitle}
        </span>
        <span className="text-xs text-[#A3A3A3] mt-1 text-center">
          {fallbackSubtitle}
        </span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      referrerPolicy="no-referrer"
      onError={() => setHasError(true)}
      className={className}
      {...props}
    />
  );
};
