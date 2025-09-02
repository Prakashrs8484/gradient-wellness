'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useScrollReveal, useScrollRevealMultiple } from '@/hooks/useScrollReveal';
import { useEffect } from 'react';

export default function Home() {
  const { ref: heroRef, isVisible: heroVisible } = useScrollReveal({ threshold: 0.1 });
  const { visibleItems: featureVisible, getRef: getFeatureRef } = useScrollRevealMultiple(6, { threshold: 0.1 });
  const { ref: ctaRef, isVisible: ctaVisible } = useScrollReveal({ threshold: 0.1 });

  useEffect(() => {
    // Add staggered animation delays to hero elements
    const heroElements = document.querySelectorAll('.hero-element');
    heroElements.forEach((el, index) => {
      (el as HTMLElement).style.animationDelay = `${index * 0.2}s`;
    });
  }, []);
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section ref={heroRef} className="relative bg-[#f7f8f7] section-padding">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h1 className="hero-element fade-in-up text-4xl lg:text-7xl font-bold font-serif text-black mb-8 leading-tight">
                Transform Your Life with{' '}
                <span className="text-red-600">
                  Holistic Wellness
                </span>
              </h1>
              <p className="hero-element fade-in-up text-xl font-sans text-black/80 mb-10 leading-relaxed max-w-2xl">
                Discover a comprehensive approach to health that nurtures your mind, body, and spirit.
                Our expert team is here to guide you on your wellness journey.
              </p>
              <div className="hero-element fade-in-up flex flex-col sm:flex-row gap-6">
                <Link
                  href="/services"
                  className="bg-red-600 text-white px-10 py-5 rounded-lg font-semibold hover:bg-red-700 transition-all duration-1200 text-center shadow-lg"
                >
                  Explore Services
                </Link>
                <Link
                  href="/contact"
                  className="bg-black text-white px-10 py-5 rounded-lg font-semibold hover:bg-red-600 transition-all duration-1200 text-center"
                >
                  Book Consultation
                </Link>
              </div>
            </div>
            <div className="hero-element fade-in-up relative">
              <div className="bg-gradient-to-br from-red-600 to-red-500 rounded-3xl p-10 shadow-2xl">
                <div className="bg-[#f7f8f7] rounded-2xl p-8 shadow-xl">
                  <div className="flex items-center space-x-6 mb-6">
                    <div className="w-16 h-16 bg-[#f7f8f7] rounded-full flex items-center justify-center">
                      <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold font-serif text-black">Wellness Assessment</h3>
                      <p className="text-sm text-black/70">Personalized health evaluation</p>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex justify-between">
                      <span className="text-black/80">Energy Level</span>
                      <span className="text-black font-semibold">85%</span>
                    </div>
                    <div className="w-full bg-[#f7f8f7] rounded-full h-3">
                      <div className="bg-gradient-to-r from-red-600 to-red-500 h-3 rounded-full" style={{ width: '85%' }}></div>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-black/80">Stress Level</span>
                      <span className="text-black font-semibold">Low</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-padding bg-[#f2f2f2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20 scroll-reveal">
            <h2 className="text-4xl lg:text-5xl font-bold font-serif text-black mb-6">
              Why Choose Gradient Wellness?
            </h2>
            <p className="text-xl font-sans text-black/80 max-w-4xl mx-auto leading-relaxed">
              Our holistic approach combines evidence-based practices with personalized care to help you achieve optimal health and wellness.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {[
              {
                icon: (
                  <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
                title: "Personalized Care",
                description: "Every wellness plan is tailored to your unique needs, goals, and lifestyle."
              },
              {
                icon: (
                  <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                ),
                title: "Holistic Approach",
                description: "We address mind, body, and spirit to create lasting wellness transformations."
              },
              {
                icon: (
                  <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                ),
                title: "Expert Team",
                description: "Certified professionals with years of experience in wellness and health coaching."
              },
              {
                icon: (
                  <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
                title: "Flexible Scheduling",
                description: "Convenient appointment times that fit your busy lifestyle and commitments."
              },
              {
                icon: (
                  <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                ),
                title: "Progress Tracking",
                description: "Monitor your wellness journey with detailed progress reports and insights."
              },
              {
                icon: (
                  <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                ),
                title: "Ongoing Support",
                description: "Continuous guidance and support throughout your wellness transformation journey."
              }
            ].map((feature, index) => (
              <div
                key={index}
                ref={getFeatureRef(index)}
                className={`bg-[#f7f8f7] rounded-2xl p-10 hover:shadow-xl transition-shadow duration-1200 scroll-reveal ${featureVisible[index] ? 'visible' : ''}`}
                style={{ transitionDelay: `${index * 0.15}s` }}
              >
                <div className="w-16 h-16 bg-black rounded-xl flex items-center justify-center text-[#f2f2f2] mb-8">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-semibold font-serif text-black mb-6">{feature.title}</h3>
                <p className="font-sans text-black/80 leading-relaxed text-lg">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section ref={ctaRef} className="section-padding bg-gradient-to-r from-red-700 to-red-500">
        <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center scroll-reveal ${ctaVisible ? 'visible' : ''}`}>
          <h2 className="text-4xl lg:text-5xl font-bold font-serif text-white mb-8">
            Ready to Start Your Wellness Journey?
          </h2>
          <p className="text-xl font-sans text-white/90 mb-10 max-w-3xl mx-auto leading-relaxed">
            Join hundreds of clients who have transformed their lives with our comprehensive wellness programs.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link
              href="/contact"
              className="bg-white text-red-600 px-10 py-5 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-1200 shadow-lg"
            >
              Book Your Free Consultation
            </Link>
            <Link
              href="/testimonials"
              className="border-2 border-white text-white px-10 py-5 rounded-lg font-semibold hover:bg-white hover:text-red-600 transition-all duration-1200"
            >
              Read Success Stories
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
