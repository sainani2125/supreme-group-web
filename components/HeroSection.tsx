'use client'

import React, { useState, useEffect, useRef } from 'react'

const HeroSection = () => {
  const [isClient, setIsClient] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    setIsClient(true)
    
    const timer = setTimeout(() => {
      if (videoRef.current) {
        videoRef.current.play().catch(e => console.log('Autoplay failed:', e))
      }
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  if (!isClient) {
    return (
      <section className="relative h-screen w-full overflow-hidden">
        <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-blue-900 to-gray-900"></div>
        <div className="relative z-10 flex items-center justify-center h-full">
          <div className="text-center text-white px-4 max-w-4xl mx-auto">
            <p className="text-lg md:text-xl font-light mb-4 tracking-wide opacity-90">
              Driven by performance
            </p>
            <h1 className="text-4xl md:text-6xl lg:text-5xl font-light leading-tight mb-2">
              Soft trims and{' '}
              <span className="text-cyan-400 font-medium">
                NVH solutions
              </span>
            </h1>
            <p className="text-2xl md:text-3xl lg:text-4xl font-light opacity-90">
              for seamless rides
            </p>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Video with brightness filter */}
      <video
        ref={videoRef}
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        controls={false}
        style={{
          zIndex: 1,
          minWidth: '100%',
          minHeight: '100%',
          filter: 'brightness(0.4) contrast(1.1)', 
        }}
      >
        <source src="/assets/videos/automotive-hero.mp4" type="video/mp4" />
      </video>

      {/* Content over video */}
      <div className="absolute inset-0 flex items-center justify-center" style={{ zIndex: 10 }}>
        <div className="text-center text-white px-4 max-w-4xl mx-auto">
          <p className="text-lg md:text-2xl font-light mb-4 tracking-wide opacity-90 drop-shadow-2xl">
            Driven by performance
          </p>
          <h1 className="text-4xl md:text-6xl lg:text-6xl font-light leading-tight mb-2 drop-shadow-2xl">
            Soft trims and{' '}
            <span className="text-cyan-400 font-medium">
              NVH solutions
            </span>
          </h1>
          <p className="text-2xl md:text-3xl lg:text-5xl font-light opacity-90 drop-shadow-2xl">
            for seamless rides
          </p>
        </div>
      </div>

    </section>
  )
}

export default HeroSection