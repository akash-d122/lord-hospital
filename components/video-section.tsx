"use client"

import { useState, useEffect, useRef } from "react"
import { Play, Heart } from "lucide-react"
import Image from "next/image"

const YOUTUBE_VIDEO_ID = "nx88-ShF3Kw"

export function VideoSection() {
  const [isPlaying, setIsPlaying] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    if (isPlaying) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio >= 0.5) {
            setIsPlaying(true)
            observer.disconnect()
          }
        })
      },
      { threshold: 0.5 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [isPlaying])

  return (
    <section ref={sectionRef} className="px-4 py-12 md:py-16 bg-gradient-to-b from-sky-50 to-white">
      <div className="container mx-auto max-w-3xl">
        <div className="flex items-center justify-center gap-2 mb-3">
          <Heart className="w-5 h-5 text-primary" />
          <span className="text-sm font-medium text-primary uppercase tracking-wide">Community Initiative</span>
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-foreground text-center mb-4 text-balance">
          Our Initiative to Contribute to Society
        </h2>
        <p className="text-muted-foreground text-center mb-8 max-w-xl mx-auto">
          Watch how Lord Hospital is making a difference in our community
        </p>

        <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-xl bg-slate-900 ring-1 ring-border">
          {isPlaying ? (
            <iframe
              src={`https://www.youtube.com/embed/${YOUTUBE_VIDEO_ID}?autoplay=1&mute=1&rel=0&modestbranding=1`}
              title="Lord Hospital Community Initiative Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute inset-0 w-full h-full"
            />
          ) : (
            <button
              onClick={() => setIsPlaying(true)}
              className="absolute inset-0 w-full h-full group cursor-pointer"
              aria-label="Play video"
            >
              <Image
                src={`https://img.youtube.com/vi/${YOUTUBE_VIDEO_ID}/maxresdefault.jpg`}
                alt="Video thumbnail"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors flex items-center justify-center">
                <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-primary flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-300">
                  <Play className="w-8 h-8 md:w-10 md:h-10 text-primary-foreground ml-1" fill="currentColor" />
                </div>
              </div>
            </button>
          )}
        </div>
      </div>
    </section>
  )
}
