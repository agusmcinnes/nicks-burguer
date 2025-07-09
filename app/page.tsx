"use client"

import { Button } from "@/components/ui/button"
import { Instagram } from "lucide-react"
import Image from "next/image"

// TikTok icon component
const TikTokIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-.04-.1z"/>
  </svg>
)

export default function NicksLanding() {
  const handleWhatsApp = () => {
    window.open("http://wa.me/18192015515", "_blank")
  }

  const handleMenu = () => {
    window.open("/menu-nicks.pdf", "_blank")
  }

  const handleInstagram = () => {
    window.open("https://www.instagram.com/nicks.mdp/", "_blank")
  }

  const handleTikTok = () => {
    window.open("https://www.tiktok.com/@nickrenzella", "_blank")
  }

  return (
    <div className="min-h-screen relative overflow-hidden" style={{ backgroundColor: "#f3ebdb" }}>
      {/* Pattern decorations */}
      <div className="absolute top-0 left-0 w-full h-8 opacity-80">
        <Image src="/pattern.png" alt="Pattern" fill className="object-cover object-repeat-x" />
      </div>

      <div className="absolute bottom-0 left-0 w-full h-8 opacity-80 rotate-180">
        <Image src="/pattern.png" alt="Pattern" fill className="object-cover object-repeat-x" />
      </div>

      {/* Main content */}
      <div className="flex flex-col items-center justify-center min-h-screen px-4 relative z-10">
        <div className="absolute inset-0 bg-black bg-opacity-5"></div>
        {/* Logo section */}
        <div className="mb-16 relative">
          <div className="relative w-96 h-48 md:w-[800px] md:h-40">
            <Image
              src="/nicks-logo-transparent.png"
              alt="Nick's Logo"
              fill
              className="object-contain drop-shadow-2xl"
              priority
            />
          </div>

          {/* Subtitle with vintage style */}
          <div className="text-center mt-6">
            <h2 className="text-2xl md:text-3xl font-bold tracking-wider" style={{ color: "#77120c" }}>
              SMASHED BURGERS
            </h2>
            <div className="flex items-center justify-center mt-2">
              <div className="h-px bg-current w-12" style={{ color: "#77120c" }}></div>
              <span className="mx-4 text-lg md:text-xl font-medium tracking-widest" style={{ color: "#77120c" }}>
                MAR DEL PLATA
              </span>
              <div className="h-px bg-current w-12" style={{ color: "#77120c" }}></div>
            </div>
          </div>
        </div>

        {/* Call to action buttons */}
        <div className="flex flex-col sm:flex-row gap-8 items-center justify-center">
          <Button
            onClick={handleMenu}
            className="group relative px-10 py-5 text-lg font-semibold tracking-wide rounded-2xl transition-all duration-500 transform hover:scale-105 hover:shadow-2xl min-w-[220px] overflow-hidden backdrop-blur-sm"
            style={{
              backgroundColor: "rgba(119, 18, 12, 0.1)",
              borderColor: "#77120c",
              color: "#77120c",
              border: "2px solid #77120c",
            }}
          >
            <span className="relative z-10 transition-all duration-300 group-hover:text-white">VER MENÚ</span>
            <div
              className="absolute inset-0 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out"
              style={{
                background: "linear-gradient(135deg, #77120c 0%, #a01810 100%)",
              }}
            ></div>
            <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-300">
              <div className="absolute top-0 left-0 w-full h-full bg-white transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[200%] transition-transform duration-700"></div>
            </div>
          </Button>

          <Button
            onClick={handleWhatsApp}
            className="group relative px-10 py-5 text-lg font-semibold tracking-wide rounded-2xl transition-all duration-500 transform hover:scale-105 hover:shadow-2xl min-w-[220px] overflow-hidden text-white"
            style={{
              background: "linear-gradient(135deg, #77120c 0%, #a01810 100%)",
              border: "2px solid transparent",
            }}
          >
            <span className="relative z-10 transition-all duration-300">PEDÍ ACÁ</span>
            <div
              className="absolute inset-0 transform scale-0 group-hover:scale-100 transition-transform duration-500 ease-out rounded-2xl"
              style={{
                backgroundColor: "#f3ebdb",
              }}
            ></div>
            <span
              className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 font-semibold z-20"
              style={{ color: "#77120c" }}
            >
              PEDÍ ACÁ
            </span>
            <div className="absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity duration-300">
              <div className="absolute top-0 right-0 w-full h-full bg-white transform skew-x-12 translate-x-[100%] group-hover:translate-x-[-200%] transition-transform duration-700"></div>
            </div>
          </Button>
        </div>

        {/* Social media buttons - below CTA buttons */}
        <div className="mt-8 flex justify-center gap-4">
          <Button
            onClick={handleInstagram}
            className="group rounded-full w-16 h-16 p-0 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-110 overflow-hidden"
            style={{
              background: "linear-gradient(135deg, #77120c 0%, #a01810 100%)",
              border: "3px solid #f3ebdb",
            }}
          >
            <Instagram className="w-10 h-10 text-white relative z-10 transition-transform duration-300 group-hover:rotate-12" />
            <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-full"></div>
          </Button>

          <Button
            onClick={handleTikTok}
            className="group rounded-full w-16 h-16 p-0 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-110 overflow-hidden"
            style={{
              background: "linear-gradient(135deg, #77120c 0%, #a01810 100%)",
              border: "3px solid #f3ebdb",
            }}
          >
            <TikTokIcon className="w-10 h-10 text-white relative z-10 transition-transform duration-300 group-hover:rotate-12" />
            <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-full"></div>
          </Button>
        </div>
      </div>

      {/* Vintage corner decorations */}
      <div
        className="absolute top-16 left-16 w-8 h-8 border-l-4 border-t-4 opacity-30"
        style={{ borderColor: "#77120c" }}
      ></div>
      <div
        className="absolute top-16 right-16 w-8 h-8 border-r-4 border-t-4 opacity-30"
        style={{ borderColor: "#77120c" }}
      ></div>
      <div
        className="absolute bottom-16 left-16 w-8 h-8 border-l-4 border-b-4 opacity-30"
        style={{ borderColor: "#77120c" }}
      ></div>
      <div
        className="absolute bottom-16 right-16 w-8 h-8 border-r-4 border-b-4 opacity-30"
        style={{ borderColor: "#77120c" }}
      ></div>
    </div>
  )
}
