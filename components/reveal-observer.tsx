"use client"

import { useEffect } from "react"

/**
 * Attaches lightweight entrance animations to any element marked with `data-reveal`.
 * - Uses transform/opacity only (GPU-friendly)
 * - Respects prefers-reduced-motion
 * - No layout/structure changes (renders null)
 */
export function RevealObserver() {
  useEffect(() => {
    const nodes = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"))
    if (nodes.length === 0) return

    const reduceMotion = window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches
    if (reduceMotion) {
      nodes.forEach((n) => n.classList.add("reveal--visible"))
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            ;(entry.target as HTMLElement).classList.add("reveal--visible")
            observer.unobserve(entry.target)
          }
        }
      },
      {
        threshold: 0.15,
        rootMargin: "0px 0px -10% 0px",
      },
    )

    nodes.forEach((n) => observer.observe(n))
    return () => observer.disconnect()
  }, [])

  return null
}


