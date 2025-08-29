import Link from 'next/link';

export default function BlogPage() {
  const posts = [
    {
      title: '5 Simple Habits for a Healthier Life',
      excerpt: 'Discover easy-to-implement habits that can make a big difference in your overall wellness. From mindful eating to daily movement, these tips are for everyone.',
      date: '2024-05-01',
      slug: '5-simple-habits-for-a-healthier-life',
    },
    {
      title: 'The Power of Mindfulness Meditation',
      excerpt: 'Learn how mindfulness meditation can reduce stress, improve focus, and enhance your emotional well-being. Practical tips for beginners included.',
      date: '2024-04-20',
      slug: 'the-power-of-mindfulness-meditation',
    },
    {
      title: 'Nutrition Myths Debunked',
      excerpt: 'We separate fact from fiction on common nutrition myths. Get the real scoop on carbs, fats, and more from our certified nutritionists.',
      date: '2024-04-10',
      slug: 'nutrition-myths-debunked',
    },
    {
      title: 'How to Stay Motivated on Your Fitness Journey',
      excerpt: 'Staying motivated can be tough. Here are our top strategies for keeping your fitness goals on track, even when life gets busy.',
      date: '2024-03-28',
      slug: 'how-to-stay-motivated-on-your-fitness-journey',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-black to-zinc-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Wellness <span className="bg-gradient-to-r from-red-600 to-red-400 bg-clip-text text-transparent">Blog & Updates</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Stay up to date with the latest wellness tips, news, and updates from the Gradient Wellness team.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Posts Section */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, idx) => (
              <div key={idx} className="bg-zinc-900 rounded-xl p-8 shadow hover:shadow-lg transition-shadow duration-300 flex flex-col justify-between">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">
                    <Link href={`/blog/${post.slug}`} className="hover:text-red-500 transition-colors">
                      {post.title}
                    </Link>
                  </h2>
                  <p className="text-gray-500 text-sm mb-4">{new Date(post.date).toLocaleDateString()}</p>
                  <p className="text-gray-300 mb-6">{post.excerpt}</p>
                </div>
                <div>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="text-red-500 hover:text-red-400 font-medium transition-colors duration-200"
                  >
                    Read More →
                  </Link>
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
            Want More Wellness Tips?
          </h2>
          <p className="text-xl text-red-100 mb-8 max-w-2xl mx-auto">
            Contact us or book a consultation to get personalized advice from our expert team.
          </p>
          <Link
            href="/contact"
            className="bg-white text-red-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300 inline-block"
          >
            Book Consultation
          </Link>
        </div>
      </section>
    </div>
  );
}