'use client'

import React from 'react'
import Image from 'next/image'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    applications: [
      { name: 'Apparel', href: '#' },
      { name: 'Automotive', href: '#' },
      { name: 'Filtration', href: '#' },
      { name: 'Customised Nonwoven', href: '#' },
    ],
    company: [
      { name: 'Who We Are', href: '#' },
      { name: 'Global Competency', href: '#' },
      { name: 'Innovation', href: '#' },
      { name: 'ESG Impact', href: '#' },
    ],
    more: [
      { name: 'Contact Us', href: '#' },
      { name: 'Careers', href: '#' },
    ],
    followUs: [
      { name: 'LinkedIn', href: 'https://www.linkedin.com/company/supreme-group-company/', color: 'text-gray-700' },
    ],
  }

  return (
    <footer className="relative min-h-[600px] font-sans">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-gradient-to-b from-blue-50 to-blue-100"
        style={{
          backgroundImage: 'url(/assets/images/footer.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      />
      
      {/* Light overlay for text readability */}
      <div className="absolute inset-0 bg-white/40" />
      
      {/* Footer Content */}
      <div className="relative z-10 flex flex-col justify-between h-full min-h-[600px]">
        {/* Main Footer Content */}
        <div className="flex-1 flex flex-col items-center justify-center">
          <div className="max-w-6xl mx-auto px-8 py-20 w-full">
            
            {/* Logo Section - Centered at Top */}
            <div className="flex  mb-1">
              <div className="w-36 h-24 relative">
                <Image
                  src="/assets/images/Supreme_logo.png"
                  alt="Supreme Group"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </div>
            
            {/* Navigation Links - All aligned in same line */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-12 lg:gap-16">
              
              {/* Applications Column */}
              <div className="text-center md:text-left">
                <h3 className="text-base font-bold text-gray-900 uppercase tracking-wide mb-6 font-sans">
                  APPLICATIONS
                </h3>
                <ul className="space-y-4">
                  {footerLinks.applications.map((link) => (
                    <li key={link.name}>
                      <a
                        href={link.href}
                        className="text-base text-gray-700 hover:text-gray-900 transition-colors duration-200 leading-relaxed font-medium"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Company Column */}
              <div className="text-center md:text-left">
                <h3 className="text-base font-bold text-gray-900 uppercase tracking-wide mb-6 font-sans">
                  COMPANY
                </h3>
                <ul className="space-y-4">
                  {footerLinks.company.map((link) => (
                    <li key={link.name}>
                      <a
                        href={link.href}
                        className="text-base text-gray-700 hover:text-gray-900 transition-colors duration-200 leading-relaxed font-medium"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* More Column */}
              <div className="text-center md:text-left">
                <h3 className="text-base font-bold text-gray-900 uppercase tracking-wide mb-6 font-sans">
                  MORE
                </h3>
                <ul className="space-y-4">
                  {footerLinks.more.map((link) => (
                    <li key={link.name}>
                      <a
                        href={link.href}
                        className="text-base text-gray-700 hover:text-gray-900 transition-colors duration-200 leading-relaxed font-medium"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Follow Us Column */}
              <div className="text-center md:text-left">
                <h3 className="text-base font-bold text-gray-900 uppercase tracking-wide mb-6 font-sans">
                  FOLLOW US
                </h3>
                <ul className="space-y-4">
                  {footerLinks.followUs.map((link) => (
                    <li key={link.name}>
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`text-base hover:text-gray-900 hover:underline transition-colors duration-200 leading-relaxed font-medium ${link.color}`}
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section - Pushed to bottom */}
        <div className="border-t border-gray-400/30 mt-auto">
          <div className="max-w-6xl mx-auto px-8 py-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              
              {/* Copyright */}
              <div className="text-base text-gray-700 font-semibold">
                ©{currentYear}. All Rights Reserved.
              </div>

              {/* Address */}
              <div className="text-base text-gray-700 text-center md:text-right font-semibold">
                Supreme House, 110, 16th Road, Chembur, Mumbai - 400071
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
