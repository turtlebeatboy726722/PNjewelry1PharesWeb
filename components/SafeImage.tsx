"use client";

import { useState } from "react";
import Image from "next/image";

interface SafeImageProps {
  src: string;
  alt: string;
  fill?: boolean;
  width?: number;
  height?: number;
  className?: string;
  fallbackIcon?: string;
  objectFit?: "cover" | "contain";
}

export default function SafeImage({
  src,
  alt,
  fill,
  width,
  height,
  className = "",
  fallbackIcon = "◇",
  objectFit = "cover",
}: SafeImageProps) {
  const [error, setError] = useState(false);

  if (error) {
    return (
      <div
        className={`img-placeholder w-full h-full flex items-center justify-center ${className}`}
        style={{ minHeight: fill ? undefined : height }}
      >
        <span
          style={{
            color: "var(--gold)",
            fontSize: "2rem",
            opacity: 0.4,
            fontFamily: "var(--font-cormorant)",
          }}
        >
          {fallbackIcon}
        </span>
      </div>
    );
  }

  if (fill) {
    return (
      <Image
        src={src}
        alt={alt}
        fill
        className={`${objectFit === "cover" ? "object-cover" : "object-contain"} ${className}`}
        onError={() => setError(true)}
      />
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      width={width || 800}
      height={height || 600}
      className={className}
      onError={() => setError(true)}
    />
  );
}
