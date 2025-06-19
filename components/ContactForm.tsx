'use client'

import React, { useState } from 'react'
import { Check, X } from 'lucide-react'

interface FormData {
  fullName: string
  email: string
  company: string
  message: string
}

interface FormErrors {
  fullName?: string
  email?: string
  company?: string
  message?: string
}

const ContactForm = () => {
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    email: '',
    company: '',
    message: ''
  })

  const [errors, setErrors] = useState<FormErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showSuccessPopup, setShowSuccessPopup] = useState(false)

  // Email validation regex
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {}

    // Full Name validation
    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full name is required'
    } else if (formData.fullName.trim().length < 2) {
      newErrors.fullName = 'Full name must be at least 2 characters'
    }

    // Email validation
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!emailRegex.test(formData.email.trim())) {
      newErrors.email = 'Please enter a valid email address'
    }

    // Company validation
    if (!formData.company.trim()) {
      newErrors.company = 'Company name is required'
    }

    // Message validation
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required'
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))

    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({
        ...prev,
        [name]: undefined
      }))
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) {
      return
    }

    setIsSubmitting(true)

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000))
      
      // Here you would typically send the data to your backend
      console.log('Form submitted:', formData)
      
      // Show success popup
      setShowSuccessPopup(true)
      
      // Reset form
      setFormData({
        fullName: '',
        email: '',
        company: '',
        message: ''
      })
      
    } catch (error) {
      console.error('Submission error:', error)
      // Handle error (you could show an error popup here)
    } finally {
      setIsSubmitting(false)
    }
  }

  const closeSuccessPopup = () => {
    setShowSuccessPopup(false)
  }

  return (
    <>
      {/* Contact Form Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center px-8 py-16" style={{ backgroundColor: '#006ABC' }}>
        <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          {/* Left Side - Contact Info */}
          <div className="text-white space-y-8">
            <div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-light mb-4">
                Get in touch
              </h2>
              <div className="w-12 h-0.5 bg-white mb-8"></div>
            </div>

            <div className="space-y-6 text-lg">
              <div>
                <h3 className="text-xl font-medium mb-4">For general enquiries</h3>
              </div>

              <div>
                <p className="font-medium mb-2">Address :</p>
                <p className="text-white/90 leading-relaxed">
                  110, 16th Road, Chembur, Mumbai - 400071
                </p>
              </div>

              <div>
                <p className="font-medium mb-2">Phone :</p>
                <p className="text-white/90">+91 22 25208822</p>
              </div>

              <div>
                <p className="font-medium mb-2">Email :</p>
                <p className="text-white/90">info@supremegroup.co.in</p>
              </div>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div className="w-full max-w-md mx-auto lg:mx-0">
            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* Full Name Field */}
              <div>
                <div className="relative">
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    placeholder="Full name"
                    className={`w-full bg-transparent border-0 border-b-2 border-white/40 text-white placeholder-white/70 text-lg py-3 px-0 focus:outline-none focus:border-white transition-all duration-300 ${
                      errors.fullName ? 'border-red-400' : ''
                    }`}
                  />
                </div>
                {/* Fixed height container for error message */}
                <div className="h-6 mt-2">
                  {errors.fullName && (
                    <p className="text-red-300 text-sm">{errors.fullName}</p>
                  )}
                </div>
              </div>

              {/* Email Field */}
              <div>
                <div className="relative">
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Email"
                    className={`w-full bg-transparent border-0 border-b-2 border-white/40 text-white placeholder-white/70 text-lg py-3 px-0 focus:outline-none focus:border-white transition-all duration-300 ${
                      errors.email ? 'border-red-400' : ''
                    }`}
                  />
                </div>
                {/* Fixed height container for error message */}
                <div className="h-6 mt-2">
                  {errors.email && (
                    <p className="text-red-300 text-sm">{errors.email}</p>
                  )}
                </div>
              </div>

              {/* Company Field */}
              <div>
                <div className="relative">
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    placeholder="Company"
                    className={`w-full bg-transparent border-0 border-b-2 border-white/40 text-white placeholder-white/70 text-lg py-3 px-0 focus:outline-none focus:border-white transition-all duration-300 ${
                      errors.company ? 'border-red-400' : ''
                    }`}
                  />
                </div>
                {/* Fixed height container for error message */}
                <div className="h-6 mt-2">
                  {errors.company && (
                    <p className="text-red-300 text-sm">{errors.company}</p>
                  )}
                </div>
              </div>

              {/* Message Field */}
              <div>
                <div className="relative">
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Message"
                    rows={4}
                    className={`w-full bg-transparent border-0 border-b-2 border-white/40 text-white placeholder-white/70 text-lg py-3 px-0 focus:outline-none focus:border-white transition-all duration-300 resize-none ${
                      errors.message ? 'border-red-400' : ''
                    }`}
                  />
                </div>
                {/* Fixed height container for error message */}
                <div className="h-6 mt-2">
                  {errors.message && (
                    <p className="text-red-300 text-sm">{errors.message}</p>
                  )}
                </div>
              </div>

              {/* Submit Button */}
              <div className="pt-6">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-full text-lg font-medium hover:bg-white hover:text-blue-700 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed min-w-[120px]"
                >
                  {isSubmitting ? (
                    <div className="flex items-center justify-center">
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                    </div>
                  ) : (
                    'Send'
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Success Popup */}
      {showSuccessPopup && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 px-4">
          <div className="bg-white rounded-2xl p-8 max-w-md w-full mx-4 relative animate-fade-in-scale">
            {/* Close Button */}
            <button
              onClick={closeSuccessPopup}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Success Content */}
            <div className="text-center">
              {/* Success Icon */}
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Check className="w-8 h-8 text-green-600" />
              </div>

              {/* Success Message */}
              <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                Message Sent Successfully!
              </h3>
              <p className="text-gray-600 mb-6">
                Thank you for reaching out. We'll get back to you within 24 hours.
              </p>

              {/* OK Button */}
              <button
                onClick={closeSuccessPopup}
                className="bg-blue-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors"
              >
                OK
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default ContactForm