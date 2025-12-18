"use client"

import { useCallback, useEffect, useRef, useState } from "react"
import { Play, Heart } from "lucide-react"
import Image from "next/image"

const YOUTUBE_VIDEO_ID = "nx88-ShF3Kw"

function getYoutubeEmbedSrc(videoId: string, origin?: string) {
  /**
   * Autoplay strategy:
   * - Start with reliable muted autoplay (works across Chrome/Safari/Firefox/mobile).
   * - Enable JS API so we can immediately attempt to unmute (audible autoplay where allowed),
   *   and otherwise unmute/play on the very first user interaction anywhere on the page,
   *   without requiring an extra click on the video itself.
   */
  const params = new URLSearchParams({
    autoplay: "1",
    mute: "1",
    playsinline: "1",
    enablejsapi: "1",
    rel: "0",
    modestbranding: "1",
  })
  // YouTube recommends specifying origin when using enablejsapi.
  // This must be client-derived to avoid SSR/client mismatches.
  if (origin) params.set("origin", origin)
  return `https://www.youtube.com/embed/${videoId}?${params.toString()}`
}

export function VideoSection() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMounted, setIsMounted] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)
  const iframeRef = useRef<HTMLIFrameElement>(null)
  const unmuteAttemptedRef = useRef(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  const tryUnmuteAndPlay = useCallback(() => {
    const iframe = iframeRef.current
    if (!iframe?.contentWindow) return

    // YouTube IFrame Player API commands via postMessage (requires enablejsapi=1).
    const postCommand = (func: string, args?: unknown[]) => {
      iframe.contentWindow?.postMessage(
        JSON.stringify({ event: "command", func, args: args ?? [] }),
        "*",
      )
    }

    postCommand("playVideo")
    postCommand("unMute")
    postCommand("setVolume", [100])
  }, [])

  useEffect(() => {
    if (isPlaying) return

    // If we load already near/in view (common on fast scroll / back nav),
    // don't rely solely on IntersectionObserver to flip isPlaying.
    const el = sectionRef.current
    if (el) {
      const checkInView = () => {
        const rect = el.getBoundingClientRect()
        const vh = window.innerHeight || document.documentElement.clientHeight
        const isInView = rect.top < vh * 0.9 && rect.bottom > vh * 0.1
        if (isInView) setIsPlaying(true)
      }
      requestAnimationFrame(checkInView)
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio >= 0.5) {
            setIsPlaying(true)
            observer.disconnect()
          }
        })
      },
      { threshold: 0.25 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [isPlaying])

  useEffect(() => {
    if (!isPlaying || !isMounted) return

    // If unmuted autoplay is blocked, unmute/play on the first user interaction
    // anywhere on the page (tap/scroll/key) without requiring additional clicks.
    const onFirstUserInteraction = () => {
      // In some browsers the first attempt can race the iframe initialization;
      // do a couple quick retries while we're still inside the user-gesture window.
      tryUnmuteAndPlay()
      setTimeout(() => tryUnmuteAndPlay(), 250)
      setTimeout(() => tryUnmuteAndPlay(), 750)
      window.removeEventListener("pointerdown", onFirstUserInteraction, opts as any)
      window.removeEventListener("touchstart", onFirstUserInteraction, opts as any)
      window.removeEventListener("touchmove", onFirstUserInteraction, opts as any)
      window.removeEventListener("wheel", onFirstUserInteraction, opts as any)
      window.removeEventListener("scroll", onFirstUserInteraction, opts as any)
      window.removeEventListener("keydown", onFirstUserInteraction, { capture: true } as any)
    }

    const opts = { capture: true, passive: true } as const
    window.addEventListener("pointerdown", onFirstUserInteraction, opts)
    window.addEventListener("touchstart", onFirstUserInteraction, opts)
    window.addEventListener("touchmove", onFirstUserInteraction, opts)
    window.addEventListener("wheel", onFirstUserInteraction, opts)
    window.addEventListener("scroll", onFirstUserInteraction, opts)
    window.addEventListener("keydown", onFirstUserInteraction, { capture: true })

    return () => {
      window.removeEventListener("pointerdown", onFirstUserInteraction, opts as any)
      window.removeEventListener("touchstart", onFirstUserInteraction, opts as any)
      window.removeEventListener("touchmove", onFirstUserInteraction, opts as any)
      window.removeEventListener("wheel", onFirstUserInteraction, opts as any)
      window.removeEventListener("scroll", onFirstUserInteraction, opts as any)
      window.removeEventListener("keydown", onFirstUserInteraction, { capture: true } as any)
    }
  }, [isMounted, isPlaying, tryUnmuteAndPlay])

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
          {isPlaying && isMounted ? (
            <iframe
              ref={iframeRef}
              src={getYoutubeEmbedSrc(YOUTUBE_VIDEO_ID, window.location.origin)}
              title="Lord Hospital Community Initiative Video"
              // Explicitly allow autoplay for browsers with stricter policies (Chrome/Safari).
              allow="autoplay; encrypted-media; fullscreen; picture-in-picture"
              allowFullScreen
              className="absolute inset-0 w-full h-full"
              onLoad={() => {
                // Ensure playback starts (muted) as soon as the iframe is ready.
                // Audible playback will still be gated by user-gesture policies.
                iframeRef.current?.contentWindow?.postMessage(
                  JSON.stringify({ event: "command", func: "playVideo", args: [] }),
                  "*",
                )
              }}
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
