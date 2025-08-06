import Link from 'next/link';

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-50 to-blue-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              About <span className="text-gradient-to-r from-green-600 to-blue-600 bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">Gradient Wellness</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We&apos;re passionate about helping individuals achieve optimal health and wellness through a comprehensive, 
              evidence-based approach that addresses mind, body, and spirit.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Founded in 2020, Gradient Wellness emerged from a simple yet powerful belief: that true wellness 
                requires a holistic approach. Our founder, Dr. Sarah Johnson, recognized that traditional healthcare 
                often treated symptoms rather than addressing the root causes of health issues.
              </p>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                What started as a small wellness practice has grown into a comprehensive wellness center serving 
                hundreds of clients. We&apos;ve helped individuals overcome chronic stress, improve their nutrition, 
                enhance their fitness levels, and achieve mental clarity through our integrated approach.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Today, our team of certified professionals continues to uphold our founding principles while 
                staying current with the latest research and wellness practices.
              </p>
            </div>
            <div className="bg-gradient-to-br from-green-400 to-blue-400 rounded-2xl p-8 shadow-2xl">
              <div className="bg-white rounded-xl p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Impact</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Clients Served</span>
                    <span className="text-2xl font-bold text-green-600">500+</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Success Rate</span>
                    <span className="text-2xl font-bold text-blue-600">95%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Years of Experience</span>
                    <span className="text-2xl font-bold text-green-600">4+</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Mission & Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We&apos;re committed to empowering individuals to take control of their health and wellness journey.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
              <p className="text-gray-600 leading-relaxed">
                To provide comprehensive, personalized wellness solutions that empower individuals to achieve 
                optimal health and live their best lives. We believe that everyone deserves access to quality 
                wellness care that addresses the whole person.
              </p>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
              <p className="text-gray-600 leading-relaxed">
                To be the leading wellness center that transforms lives through innovative, evidence-based 
                approaches to health and wellness, creating a healthier and more vibrant community.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Holistic Approach",
                description: "We address mind, body, and spirit to create lasting wellness transformations.",
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                )
              },
              {
                title: "Evidence-Based",
                description: "All our practices are grounded in scientific research and proven methodologies.",
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                )
              },
              {
                title: "Personalized Care",
                description: "Every wellness plan is tailored to your unique needs, goals, and lifestyle.",
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                )
              }
            ].map((value, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center text-white mx-auto mb-4">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our certified professionals are passionate about helping you achieve your wellness goals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Dr. Sarah Johnson",
                role: "Founder & Wellness Director",
                bio: "Certified nutritionist and wellness coach with over 10 years of experience in holistic health.",
                image: "/api/placeholder/300/400"
              },
              {
                name: "Michael Chen",
                role: "Fitness Specialist",
                bio: "Personal trainer and movement specialist focused on functional fitness and injury prevention.",
                image: "/api/placeholder/300/400"
              },
              {
                name: "Dr. Emily Rodriguez",
                role: "Mental Health Counselor",
                bio: "Licensed therapist specializing in stress management, anxiety, and mindfulness practices.",
                image: "/api/placeholder/300/400"
              },
              {
                name: "Lisa Thompson",
                role: "Nutrition Coach",
                bio: "Registered dietitian with expertise in personalized meal planning and dietary optimization.",
                image: "/api/placeholder/300/400"
              },
              {
                name: "David Park",
                role: "Yoga & Meditation Instructor",
                bio: "Certified yoga teacher and meditation guide with training in mindfulness-based stress reduction.",
                image: "/api/placeholder/300/400"
              },
              {
                name: "Amanda Foster",
                role: "Wellness Coordinator",
                bio: "Dedicated to ensuring every client receives personalized attention and support throughout their journey.",
                image: "/api/placeholder/300/400"
              }
            ].map((member, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6 text-center hover:shadow-lg transition-shadow duration-300">
                <div className="w-24 h-24 bg-gradient-to-r from-green-400 to-blue-400 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-white text-2xl font-bold">{member.name.split(' ').map(n => n[0]).join('')}</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{member.name}</h3>
                <p className="text-green-600 font-medium mb-3">{member.role}</p>
                <p className="text-gray-600 text-sm">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Start Your Wellness Journey?
          </h2>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            Join our community of wellness enthusiasts and take the first step towards a healthier, happier you.
          </p>
          <Link
            href="/contact"
            className="bg-white text-green-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300 inline-block"
          >
            Schedule Your Consultation
          </Link>
        </div>
      </section>
    </div>
  );
} 