"use client";

import { useRef, useState } from "react";

const driverVideos = [
  {
    id: "driver-1",
    src: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
    label: "Driver testimonial video 1",
  },
  {
    id: "driver-2",
    src: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
    label: "Driver testimonial video 2",
  },
  {
    id: "driver-3",
    src: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4",
    label: "Driver testimonial video 3",
  },
];

function PlayIcon() {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 22 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M7 5.5L17 11L7 16.5V5.5Z"
        fill="#2daa5a"
        stroke="#2daa5a"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function VideoCard({ video }) {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = async () => {
    const element = videoRef.current;
    if (!element) {
      return;
    }

    try {
      await element.play();
      setIsPlaying(true);
    } catch {
      setIsPlaying(false);
    }
  };

  const handlePause = () => {
    setIsPlaying(false);
  };

  const handleEnded = () => {
    setIsPlaying(false);
  };

  return (
    <article className="rounded-2xl border border-[#e2e8f0] bg-white p-3 sm:p-4">
      <div className="relative aspect-[9/16] overflow-hidden rounded-xl bg-[#eef3f8]">
        <video
          ref={videoRef}
          src={video.src}
          controls={isPlaying}
          muted
          playsInline
          preload="metadata"
          aria-label={video.label}
          onPlay={() => setIsPlaying(true)}
          onPause={handlePause}
          onEnded={handleEnded}
          className="h-full w-full object-cover"
        />

        {!isPlaying ? (
          <button
            type="button"
            onClick={handlePlay}
            className="absolute inset-0 flex items-center justify-center"
            aria-label={`Play ${video.label}`}
          >
            <span className="flex h-16 w-16 items-center justify-center rounded-full bg-white/90 shadow-sm backdrop-blur-sm">
              <PlayIcon />
            </span>
          </button>
        ) : null}
      </div>
    </article>
  );
}

export default function DriverVideosSection() {
  return (
    <section aria-label="Hear it from our drivers">
      <div className="mx-auto max-w-[1320px] px-6 pb-16 pt-4 sm:px-8 lg:px-6">
        <h2 className="text-center text-[clamp(1.5rem,3vw,2rem)] font-bold leading-[1.2] text-[var(--header-navy)]">
          Hear it from our drivers
        </h2>

        <div className="mx-auto mt-10 grid max-w-[1080px] grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {driverVideos.map((video) => (
            <VideoCard key={video.id} video={video} />
          ))}
        </div>
      </div>
    </section>
  );
}
