"use client";

import { useState } from "react";

interface VideoSectionProps {
  youtubeId: string;
  title: string;
  subtitle: string;
  label: string;
  description?: string;
  dark?: boolean;
}

export default function VideoSection({
  youtubeId,
  title,
  subtitle,
  label,
  description,
  dark = false,
}: VideoSectionProps) {
  const [playing, setPlaying] = useState(false);

  const thumbnailUrl = `https://img.youtube.com/vi/${youtubeId}/maxresdefault.jpg`;

  return (
    <section
      className="py-28"
      style={{ background: dark ? "var(--ink)" : "var(--cream)" }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="section-label mb-4">{label}</p>
          <h2
            className={`font-display font-light ${dark ? "text-white" : "text-charcoal-900"}`}
            style={{
              fontFamily: "var(--font-cormorant)",
              fontSize: "clamp(2rem, 4vw, 3.5rem)",
            }}
          >
            {title}{" "}
            <span className="italic gold-text">{subtitle}</span>
          </h2>
          {description && (
            <p className="text-charcoal-400 text-sm mt-4 max-w-xl mx-auto leading-relaxed">
              {description}
            </p>
          )}
        </div>

        {/* Video Player */}
        <div
          className="relative mx-auto overflow-hidden"
          style={{
            maxWidth: "900px",
            aspectRatio: "16/9",
            background: "#0d0d0d",
          }}
        >
          {!playing ? (
            /* Thumbnail + Play Button */
            <div
              className="absolute inset-0 cursor-pointer group"
              onClick={() => setPlaying(true)}
            >
              {/* Thumbnail */}
              <img
                src={thumbnailUrl}
                alt={title}
                className="w-full h-full object-cover"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = `https://img.youtube.com/vi/${youtubeId}/hqdefault.jpg`;
                }}
              />

              {/* Dark overlay */}
              <div
                className="absolute inset-0 transition-opacity duration-300 group-hover:opacity-70"
                style={{ background: "rgba(0,0,0,0.4)" }}
              />

              {/* Gold border */}
              <div
                className="absolute inset-0 border opacity-30"
                style={{ borderColor: "var(--gold)" }}
              />

              {/* Play Button */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div
                  className="flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                  style={{
                    width: "80px",
                    height: "80px",
                    background: "var(--gold)",
                    borderRadius: "50%",
                  }}
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="#0d0d0d"
                    style={{ width: "28px", height: "28px", marginLeft: "4px" }}
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>

              {/* Label */}
              <div className="absolute bottom-6 left-6">
                <span
                  className="text-[10px] tracking-widest uppercase"
                  style={{ color: "var(--gold)" }}
                >
                  ▶ Play Video
                </span>
              </div>
            </div>
          ) : (
            /* YouTube Embed */
            <iframe
              className="absolute inset-0 w-full h-full"
              src={`https://www.youtube.com/embed/${youtubeId}?autoplay=1&rel=0&modestbranding=1`}
              title={title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          )}
        </div>
      </div>
    </section>
  );
}
