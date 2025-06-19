'use client'

import React, { useState, useEffect, useRef } from 'react'
import { Play, Pause } from 'lucide-react'

interface VehicleOption {
  id: string
  name: string
  description: string
}

// Passenger vehicle options (5 videos)
const passengerOptions: VehicleOption[] = [
  { id: 'complete-body', name: 'Complete body', description: 'Full vehicle assembly' },
  { id: 'front', name: 'Front',  description: 'Front section components' },
  { id: 'cabin', name: 'Cabin',  description: 'Interior cabin solutions' },
  { id: 'trunk', name: 'Trunk',  description: 'Rear storage compartment' },
  { id: 'exterior', name: 'Exterior', description: 'External body parts' },
]

// Commercial vehicle options (3 videos)
const commercialOptions: VehicleOption[] = [
  { id: 'complete-body', name: 'Complete body',  description: 'Full commercial vehicle assembly' },
  { id: 'engine', name: 'Engine',  description: 'Engine components and systems' },
  { id: 'cabin', name: 'Cabin', description: 'Commercial cabin solutions' },
]

const VehicleShowcase = () => {
  const [activeTab, setActiveTab] = useState<'passenger' | 'commercial'>('passenger')
  const [selectedOption, setSelectedOption] = useState('complete-body')
  const [isVideoPlaying, setIsVideoPlaying] = useState(true)
  const [videoProgress, setVideoProgress] = useState(0)
  const [showHeaderAtTop, setShowHeaderAtTop] = useState(false)
  
  const titleSectionRef = useRef<HTMLDivElement>(null)
  const vehicleContainerRef = useRef<HTMLDivElement>(null)
  const videoRef = useRef<HTMLVideoElement>(null)

  // Get current vehicle options based on active tab
  const getCurrentOptions = () => {
    return activeTab === 'passenger' ? passengerOptions : commercialOptions
  }

  // Reset selected option when switching tabs
  useEffect(() => {
    setSelectedOption('complete-body')
    setVideoProgress(0)
  }, [activeTab])

  // Video progress tracking
  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const updateProgress = () => {
      if (video.duration) {
        const progress = (video.currentTime / video.duration) * 100
        setVideoProgress(progress)
      }
    }

    video.addEventListener('timeupdate', updateProgress)
    return () => video.removeEventListener('timeupdate', updateProgress)
  }, [activeTab, selectedOption])

  // Handle scroll for header appearance and tab switching
  useEffect(() => {
    const handleScroll = () => {
      if (!titleSectionRef.current || !vehicleContainerRef.current) return

      const titleRect = titleSectionRef.current.getBoundingClientRect()
      const containerRect = vehicleContainerRef.current.getBoundingClientRect()
      
      // Show header at top when title section is scrolled out of view
      // Using a smaller threshold to trigger earlier
      setShowHeaderAtTop(titleRect.bottom < 100)
      
      // Dynamic tab switching based on scroll position within the vehicle section
      if (containerRect.top <= 0 && containerRect.bottom > window.innerHeight) {
        // Calculate how much we've scrolled through the vehicle section
        const scrollProgress = Math.abs(containerRect.top) / window.innerHeight
        
        // Switch to commercial when scrolled enough through the section
        if (scrollProgress > 0.7) {
          setActiveTab('commercial')
        } else if (scrollProgress < 0.3) {
          setActiveTab('passenger')
        }
      }
      // Reset to passenger when section comes back into view from top
      else if (containerRect.top > 0) {
        setActiveTab('passenger')
        setShowHeaderAtTop(false) // Hide header when back to top
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll() // Initial check
    
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleVideo = () => {
    if (videoRef.current) {
      if (isVideoPlaying) {
        videoRef.current.pause()
      } else {
        videoRef.current.play()
      }
      setIsVideoPlaying(!isVideoPlaying)
    }
  }

  const getVideoSource = () => {
    const prefix = activeTab === 'passenger' ? 'Passenger' : 'Commercial'
    return `/assets/videos/${prefix}-${selectedOption}.mp4`
  }

  const handleOptionSelect = (optionId: string) => {
    setSelectedOption(optionId)
    setIsVideoPlaying(true)
    setVideoProgress(0)
    
    if (videoRef.current) {
      videoRef.current.currentTime = 0
      videoRef.current.play().catch(console.error)
    }
  }

  const currentOptions = getCurrentOptions()

  // Get image source with fallback logic
  const getImageSource = (optionId: string) => {
    const availableImages = ['complete-body', 'front', 'trunk', 'exterior']
    if (availableImages.includes(optionId)) {
      return `/assets/images/${optionId}.png`
    }
    return `/assets/images/complete-body.png`
  }

  return (
    <>
      {/* Title Section */}
      <section 
        ref={titleSectionRef}
        className="relative h-screen bg-black flex items-center justify-center"
      >
        <div className="text-center text-white px-4 max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-light leading-tight">
            Evolving the drive with{' '}
            <span className="text-cyan-400 font-medium">360-degree</span>
            <br />
            comprehensive solutions
          </h2>
        </div>
      </section>

      {/* Vehicle Container - Extended height for scroll-based tab switching */}
      <div ref={vehicleContainerRef} className="relative h-[200vh] bg-black">
        
        {/* Header at Top - Shows after scroll, stays in position */}
        <div className={`absolute top-0 left-0 right-0 bg-black/95 backdrop-blur-md text-center py-6 px-4 border-b border-gray-800/30 z-20 transition-all duration-500 ${
          showHeaderAtTop ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full'
        }`}>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-light text-white leading-tight">
            Evolving the drive with{' '}
            <span className="text-cyan-400 font-medium">360-degree</span>
            {' '}comprehensive solutions
          </h2>
        </div>

        {/* Sticky Vehicle Content - Stays in place while scrolling */}
        <div className="sticky top-0 h-screen bg-black flex">
          
          {/* Left Side - Vehicle Tabs (35%) */}
          <div className="w-[35%] flex items-center justify-center">
            <div className="w-full max-w-lg px-6 lg:px-12">
              
              {/* Passenger Vehicles Tab */}
              <div 
                className={`mb-16 cursor-pointer transition-all duration-500 ${
                  activeTab === 'passenger' 
                    ? 'opacity-100 transform scale-105' 
                    : 'opacity-60 hover:opacity-80 transform scale-100'
                }`}
                onClick={() => setActiveTab('passenger')}
              >
                <div className="border-l-4 border-white pl-6 lg:pl-8">
                  <h3 className={`text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-light mb-3 lg:mb-4 transition-all duration-500 ${
                    activeTab === 'passenger' ? 'text-white' : 'text-gray-500'
                  }`}>
                    Passenger vehicles
                  </h3>
                  <p className={`text-sm md:text-base lg:text-lg leading-relaxed transition-all duration-500 ${
                    activeTab === 'passenger' ? 'text-gray-300' : 'text-gray-600'
                  }`}>
                    Revving up innovation from interior to exterior.
                  </p>
                </div>
              </div>

              {/* Commercial Vehicles Tab */}
              <div 
                className={`cursor-pointer transition-all duration-500 ${
                  activeTab === 'commercial' 
                    ? 'opacity-100 transform scale-105' 
                    : 'opacity-60 hover:opacity-80 transform scale-100'
                }`}
                onClick={() => setActiveTab('commercial')}
              >
                <div className="border-l-4 border-white pl-6 lg:pl-8">
                  <h3 className={`text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-light mb-3 lg:mb-4 transition-all duration-500 ${
                    activeTab === 'commercial' ? 'text-white' : 'text-gray-500'
                  }`}>
                    Commercial vehicles
                  </h3>
                  <p className={`text-sm md:text-base lg:text-lg leading-relaxed transition-all duration-500 ${
                    activeTab === 'commercial' ? 'text-gray-300' : 'text-gray-600'
                  }`}>
                    Advancing engineering for heavy-duty vehicles.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Video Content (65%) */}
          <div className="w-[65%] flex items-center">
            <div className={`w-full h-full flex flex-col justify-center transition-all duration-700 ${
              showHeaderAtTop ? 'pt-24 pb-8' : 'py-8'
            }`}>
              
              {/* Video Container - Clean, no blue box */}
              <div className="relative w-full flex-1 max-h-[60vh] px-4 lg:px-8">
                <div className="relative w-full h-full">
                  <video
                    ref={videoRef}
                    className="w-full h-full object-contain bg-transparent"
                    autoPlay
                    muted
                    loop
                    playsInline
                    key={`${activeTab}-${selectedOption}`}
                    style={{ 
                      outline: 'none',
                      border: 'none',
                      margin: 0,
                      padding: 0
                    }}
                    onError={(e) => {
                      console.error('Video failed to load:', getVideoSource())
                    }}
                    onLoadedData={() => {
                      console.log('Video loaded:', getVideoSource())
                    }}
                  >
                    <source src={getVideoSource()} type="video/mp4" />
                  </video>
                </div>
              </div>

              {/* Component Options and Controls */}
              <div className="flex items-center justify-center gap-4 lg:gap-6 px-4 lg:px-8 mt-6">
                
                {/* Component Images Row */}
                <div className="flex items-center gap-2 lg:gap-3">
                  {currentOptions.map((option) => (
                    <button
                      key={`${activeTab}-${option.id}`}
                      onClick={() => handleOptionSelect(option.id)}
                      className={`group relative flex flex-col items-center transition-all duration-300 ${
                        selectedOption === option.id 
                          ? 'text-white scale-110' 
                          : 'text-gray-400 hover:text-gray-200 hover:scale-105'
                      }`}
                    >
                      <div className={`w-12 h-10 lg:w-16 lg:h-12 rounded-lg border-2 overflow-hidden flex items-center justify-center mb-2 transition-all duration-300 ${
                        selectedOption === option.id 
                          ? 'border-cyan-400 bg-cyan-400/10 shadow-lg shadow-cyan-400/20' 
                          : 'border-gray-600 group-hover:border-gray-400'
                      }`}>
                        <img 
                          src={getImageSource(option.id)} 
                          alt={option.name}
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            (e.target as HTMLImageElement).src = '/assets/images/complete-body.png';
                          }}
                        />
                      </div>
                      <span className="text-xs lg:text-sm font-medium whitespace-nowrap text-center">
                        {option.name}
                      </span>
                      {selectedOption === option.id && (
                        <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1.5 h-1.5 bg-cyan-400 rounded-full"></div>
                      )}
                    </button>
                  ))}
                </div>

                {/* Play/Pause Button with Progress */}
                <div className="relative flex-shrink-0 ml-2 lg:ml-4">
                  <svg className="absolute inset-0 w-12 h-12 lg:w-14 lg:h-14 transform -rotate-90">
                    <circle
                      cx="50%"
                      cy="50%"
                      r="18"
                      stroke="currentColor"
                      strokeWidth="2"
                      fill="none"
                      className="text-gray-700"
                    />
                    <circle
                      cx="50%"
                      cy="50%"
                      r="18"
                      stroke="currentColor"
                      strokeWidth="2"
                      fill="none"
                      strokeDasharray={`${2 * Math.PI * 18}`}
                      strokeDashoffset={`${2 * Math.PI * 18 * (1 - videoProgress / 100)}`}
                      className="text-cyan-400 transition-all duration-300"
                      style={{ strokeLinecap: 'round' }}
                    />
                  </svg>
                  <button
                    onClick={toggleVideo}
                    className="relative w-12 h-12 lg:w-14 lg:h-14 bg-black/60 hover:bg-black/80 text-white rounded-full transition-all duration-200 backdrop-blur-sm border border-gray-600 hover:border-cyan-400 flex items-center justify-center shadow-lg"
                  >
                    {isVideoPlaying ? (
                      <Pause className="w-4 h-4 lg:w-5 lg:h-5" />
                    ) : (
                      <Play className="w-4 h-4 lg:w-5 lg:h-5 ml-0.5" />
                    )}
                  </button>
                </div>
              </div>

              {/* Current Selection Info */}
              <div className="text-center mt-4 px-4 lg:px-8">
                <p className="text-xs lg:text-sm text-gray-400">
                  {activeTab === 'passenger' ? 'Passenger' : 'Commercial'} Vehicle - {' '}
                  {currentOptions.find(opt => opt.id === selectedOption)?.name}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default VehicleShowcase