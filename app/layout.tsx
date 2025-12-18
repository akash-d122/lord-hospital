import type React from "react"
import type { Metadata, Viewport } from "next"
import { Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Lord Hospital | 24/7 Emergency & Medical Care | Tadipatri",
  description:
    "Lord Hospital provides 24/7 emergency care, ICU, orthopaedics, general medicine, pediatrics, and maternity services in Tadipatri, Andhra Pradesh. Call 063096 30960.",
  keywords:
    "hospital, Tadipatri, emergency care, ICU, orthopaedics, diabetes specialist, Andhra Pradesh, Lord Hospital",
  generator: "v0.app",
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
  openGraph: {
    title: "Lord Hospital | 24/7 Emergency & Medical Care",
    description: "Trusted community healthcare in Tadipatri. Emergency, ICU, Orthopaedics & more. Open 24/7.",
    type: "website",
  },
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#1e5aa8",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`} suppressHydrationWarning>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
