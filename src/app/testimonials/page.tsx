import Link from 'next/link';

export default function TestimonialsPage() {
  const testimonials = [
    {
      name: 'Jessica M.',
      text: 'Gradient Wellness changed my life! The personalized nutrition and fitness plans helped me lose 30 pounds and feel more energetic than ever.',
      service: 'Nutrition & Fitness',
    },
    {
      name: 'Carlos R.',
      text: 'The mental health counseling sessions gave me the tools to manage my anxiety and improve my overall well-being. Highly recommend!',
      service: 'Mental Health Counseling',
    },
    {
      name: 'Priya S.',
      text: 'I love the yoga and meditation classes. The instructors are knowledgeable and supportive, and I feel so much calmer and more balanced.',
      service: 'Yoga & Meditation',
    },
    {
      name: 'David L.',
      text: 'The comprehensive wellness assessment was eye-opening. The team created a plan that addressed all aspects of my health.',
      service: 'Wellness Assessment',
    },
    {
      name: 'Emily T.',
      text: 'The support and accountability from my wellness coach helped me make lasting changes. I feel healthier and happier!',
      service: 'Wellness Coaching',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Client <span className="bg-gradient-to-r from-red-600 to-red-400 bg-clip-text text-transparent">Testimonials</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Hear from our clients about their wellness journeys and the transformations they've experienced with Gradient Wellness.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, idx) => (
              <div key={idx} className="bg-gray-50 rounded-xl p-8 shadow hover:shadow-lg transition-shadow duration-300 flex flex-col justify-between">
                <div>
                  <p className="text-lg text-gray-700 mb-6">"{testimonial.text}"</p>
                </div>
                <div>
                  <p className="font-semibold text-red-500">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.service}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-red-700 to-red-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Start Your Success Story?
          </h2>
          <p className="text-xl text-red-100 mb-8 max-w-2xl mx-auto">
            Join our community and experience the transformation for yourself.
          </p>
          <Link
            href="/contact"
            className="bg-white text-red-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300 inline-block"
          >
            Book Your Consultation
          </Link>
        </div>
      </section>
    </div>
  );
}