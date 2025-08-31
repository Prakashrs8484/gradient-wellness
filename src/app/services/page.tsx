import Link from 'next/link';

export default function ServicesPage() {
  const services = [
    {
      id: 'nutrition-coaching',
      title: 'Nutrition Coaching',
      description: 'Personalized nutrition plans tailored to your goals, lifestyle, and dietary preferences.',
      longDescription: 'Our certified nutrition coaches work with you to create sustainable eating habits that support your health goals. We focus on whole foods, balanced nutrition, and developing a healthy relationship with food.',
      features: [
        'Personalized meal planning',
        'Nutritional analysis and recommendations',
        'Grocery shopping guidance',
        'Recipe development and cooking tips',
        'Ongoing support and accountability'
      ],
      duration: '60-90 minutes',
      price: '$120/session',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13l2.5 5m6-5v6a2 2 0 01-2 2H9a2 2 0 01-2-2v-6m8 0V9a2 2 0 00-2-2H9a2 2 0 00-2 2v4.01" />
        </svg>
      )
    },
    {
      id: 'fitness-training',
      title: 'Personal Fitness Training',
      description: 'Customized workout programs designed to improve strength, flexibility, and overall fitness.',
      longDescription: 'Our certified personal trainers create individualized exercise programs that match your fitness level, goals, and schedule. We focus on functional movements, proper form, and sustainable progress.',
      features: [
        'Customized workout programs',
        'Strength and conditioning training',
        'Flexibility and mobility work',
        'Progress tracking and adjustments',
        'Injury prevention strategies'
      ],
      duration: '45-60 minutes',
      price: '$100/session',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    },
    {
      id: 'mental-health',
      title: 'Mental Health Counseling',
      description: 'Professional therapy services to support your emotional well-being and mental health.',
      longDescription: 'Our licensed therapists provide evidence-based counseling for stress management, anxiety, depression, and life transitions. We create a safe, supportive environment for personal growth and healing.',
      features: [
        'Individual therapy sessions',
        'Stress and anxiety management',
        'Depression treatment',
        'Life transition support',
        'Mindfulness and coping strategies'
      ],
      duration: '50 minutes',
      price: '$150/session',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      )
    },
    {
      id: 'yoga-meditation',
      title: 'Yoga & Meditation',
      description: 'Mind-body practices to enhance flexibility, reduce stress, and promote inner peace.',
      longDescription: 'Our certified yoga instructors and meditation guides help you develop mindfulness, improve flexibility, and find inner balance. Classes are suitable for all levels, from beginners to advanced practitioners. We&apos;ll help you find your center and reduce stress through proven mind-body practices.',
      features: [
        'Vinyasa and Hatha yoga classes',
        'Meditation and mindfulness training',
        'Breathing techniques (Pranayama)',
        'Stress reduction practices',
        'Group and private sessions'
      ],
      duration: '60-90 minutes',
      price: '$80/session',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      )
    },
    {
      id: 'wellness-assessment',
      title: 'Comprehensive Wellness Assessment',
      description: 'Complete health evaluation to create your personalized wellness roadmap.',
      longDescription: 'Our comprehensive wellness assessment includes physical health evaluation, lifestyle analysis, stress assessment, and goal setting. This forms the foundation for your personalized wellness plan.',
      features: [
        'Health history review',
        'Physical fitness assessment',
        'Nutritional analysis',
        'Stress and lifestyle evaluation',
        'Personalized wellness plan'
      ],
      duration: '120 minutes',
      price: '$200',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      )
    },
    {
      id: 'wellness-coaching',
      title: 'Wellness Coaching',
      description: 'Holistic coaching to help you achieve balance and create lasting lifestyle changes.',
      longDescription: 'Our wellness coaches provide comprehensive support to help you integrate healthy habits into your daily life. We focus on sustainable change and long-term wellness transformation.',
      features: [
        'Goal setting and action planning',
        'Habit formation strategies',
        'Lifestyle optimization',
        'Accountability and support',
        'Progress monitoring'
      ],
      duration: '60 minutes',
      price: '$130/session',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      )
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Our <span className="bg-gradient-to-r from-red-600 to-red-400 bg-clip-text text-transparent">Services</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover our comprehensive range of wellness services designed to support your journey to optimal health and well-being.
            </p>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div key={service.id} className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-red-700 to-red-500 rounded-lg flex items-center justify-center text-white mb-6">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <div className="flex justify-between items-center mb-4">
                  <span className="text-sm text-gray-500">{service.duration}</span>
                  <span className="text-lg font-semibold text-red-500">{service.price}</span>
                </div>
                <Link
                  href={`#${service.id}`}
                  className="text-red-500 hover:text-red-400 font-medium transition-colors duration-200"
                >
                  Learn More →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Service Descriptions */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Service Details</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Learn more about each of our services and how they can support your wellness journey.
            </p>
          </div>

          <div className="space-y-16">
            {services.map((service) => (
              <div key={service.id} id={service.id} className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                  <div>
                    <div className="flex items-center mb-6">
                      <div className="w-12 h-12 bg-gradient-to-r from-red-700 to-red-500 rounded-lg flex items-center justify-center text-white mr-4">
                        {service.icon}
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900">{service.title}</h3>
                    </div>
                    <p className="text-lg text-gray-600 mb-6 leading-relaxed">{service.longDescription}</p>
                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-gray-900 mb-3">What&apos;s Included:</h4>
                      <ul className="space-y-2">
                        {service.features.map((feature, index) => (
                          <li key={index} className="flex items-center text-gray-600">
                            <svg className="w-5 h-5 text-red-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-4">
                      <div className="bg-gray-50 rounded-lg p-4">
                        <span className="text-sm text-gray-500">Duration</span>
                        <p className="font-semibold text-gray-900">{service.duration}</p>
                      </div>
                      <div className="bg-gray-50 rounded-lg p-4">
                        <span className="text-sm text-gray-500">Investment</span>
                        <p className="font-semibold text-red-500">{service.price}</p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gradient-to-br from-red-50 to-red-100 rounded-xl p-8">
                    <h4 className="text-xl font-semibold text-gray-900 mb-4">Ready to Get Started?</h4>
                    <p className="text-gray-600 mb-6">
                      Book your first session and take the first step towards your wellness goals.
                    </p>
                    <Link
                      href="/contact"
                      className="bg-gradient-to-r from-red-700 to-red-500 text-white px-6 py-3 rounded-lg font-semibold hover:from-red-800 hover:to-red-600 transition-all duration-300 inline-block"
                    >
                      Book Session
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Wellness Packages</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose from our curated packages designed to provide comprehensive wellness support.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Starter Package",
                price: "$450",
                description: "Perfect for those beginning their wellness journey",
                features: [
                  "Comprehensive Wellness Assessment",
                  "3 Nutrition Coaching Sessions",
                  "3 Personal Training Sessions",
                  "2 Yoga/Meditation Classes",
                  "Wellness Plan Development"
                ]
              },
              {
                name: "Complete Wellness",
                price: "$850",
                description: "Comprehensive support for serious wellness transformation",
                features: [
                  "Comprehensive Wellness Assessment",
                  "6 Nutrition Coaching Sessions",
                  "6 Personal Training Sessions",
                  "4 Yoga/Meditation Classes",
                  "3 Mental Health Sessions",
                  "Ongoing Wellness Coaching"
                ]
              },
              {
                name: "Premium Transformation",
                price: "$1,200",
                description: "Ultimate wellness experience with full support",
                features: [
                  "Comprehensive Wellness Assessment",
                  "12 Nutrition Coaching Sessions",
                  "12 Personal Training Sessions",
                  "8 Yoga/Meditation Classes",
                  "6 Mental Health Sessions",
                  "Weekly Wellness Coaching",
                  "Progress Tracking & Reports"
                ]
              }
            ].map((package_, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow duration-300">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{package_.name}</h3>
                <p className="text-3xl font-bold text-red-500 mb-2">{package_.price}</p>
                <p className="text-gray-600 mb-6">{package_.description}</p>
                <ul className="space-y-3 mb-8">
                  {package_.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-600">
                      <svg className="w-5 h-5 text-red-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/contact"
                  className="w-full bg-gradient-to-r from-red-700 to-red-500 text-white px-6 py-3 rounded-lg font-semibold hover:from-red-800 hover:to-red-600 transition-all duration-300 text-center block"
                >
                  Choose Package
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-red-700 to-red-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Transform Your Life?
          </h2>
          <p className="text-xl text-red-100 mb-8 max-w-2xl mx-auto">
            Start your wellness journey today with our expert team and comprehensive services.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-red-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300"
            >
              Book Your First Session
            </Link>
            <Link
              href="/testimonials"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-red-600 transition-all duration-300"
            >
              Read Success Stories
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
} 