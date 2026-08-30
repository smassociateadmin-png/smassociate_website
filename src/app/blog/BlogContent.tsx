'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Search, Calendar, User, ArrowRight, BookOpen, Lightbulb } from 'lucide-react';
import { BLOG_POSTS } from '@/lib/constants';
import { DateFormatter } from '@/lib/DateFormatter';
import VaultContactSection from '@/components/sections/VaultContactSection';
import FAQSection from '@/components/sections/FAQSection';

export default function BlogContent() {
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
  }, []);

  const categories = ['All', 'Finance', 'Loans', 'Vehicles'];
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredPosts = selectedCategory === 'All'
    ? BLOG_POSTS
    : BLOG_POSTS.filter(post => post.category === selectedCategory);

  // Featured post (first post from filtered list)
  const featuredPost = filteredPosts[0];
  const otherPosts = filteredPosts.slice(1);

  return (
    <>
      {/* Hero Section with Overview */}
      <section className="py-16 bg-gradient-to-br from-slate-900 via-teal-900 to-slate-800 text-white">
        <div className="container-padded">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-teal-500/20 border border-teal-500/30 text-teal-300 text-sm font-semibold mb-4">
              <BookOpen size={16} />
              Insights & Resources
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Financial Insights & Tips</h1>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Learn about finance, loans, vehicles, and making smart financial decisions.
            </p>
          </motion.div>

          {/* Category Overview */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            {[
              { label: 'Finance Tips', count: BLOG_POSTS.filter(p => p.category === 'Finance').length },
              { label: 'Loan Guides', count: BLOG_POSTS.filter(p => p.category === 'Loans').length },
              { label: 'Vehicle Info', count: BLOG_POSTS.filter(p => p.category === 'Vehicles').length },
              { label: 'Total Articles', count: BLOG_POSTS.length }
            ].map((cat, idx) => (
              <div key={idx} className="bg-white/10 backdrop-blur rounded-lg p-4 border border-white/20">
                <div className="text-2xl font-bold mb-1">{cat.count}</div>
                <p className="text-sm text-gray-300">{cat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Article Spotlight */}
      {featuredPost && (
        <section className="py-16 bg-white">
          <div className="container-padded">
            <h2 className="text-3xl font-bold text-navy mb-8 flex items-center gap-3">
              <Lightbulb size={32} className="text-teal" />
              Featured Article
            </h2>
            <motion.div
              initial={isMounted ? { opacity: 0, y: 20 } : { opacity: 1, y: 0 }}
              animate={{ opacity: 1, y: 0 }}
              transition={isMounted ? { duration: 0.5 } : { duration: 0 }}
              className="bg-gradient-to-r from-teal/10 to-cyan/10 border-2 border-teal/20 rounded-2xl overflow-hidden"
            >
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 p-8 min-h-[320px]">
                {/* Image */}
                <div className="lg:col-span-1">
                  <div className="relative h-64 w-full overflow-hidden rounded-xl border border-slate-700 lg:h-80 bg-slate-800">
                    <Image
                      src={featuredPost.image}
                      alt={`${featuredPost.title} - Featured Financial Article`}
                      fill
                      sizes="(max-width: 1024px) 100vw, 33vw"
                      className="object-cover"
                    />
                  </div>
                </div>

                {/* Content */}
                <div className="lg:col-span-2">
                  <span className="inline-block px-3 py-1 bg-teal/30 text-teal font-semibold rounded-full text-xs mb-4">
                    {featuredPost.category} • Featured
                  </span>
                  <h3 className="text-3xl font-bold text-navy mb-4">{featuredPost.title}</h3>
                  <div className="flex items-center gap-6 text-gray-600 mb-6">
                    <div className="flex items-center gap-2">
                      <Calendar size={18} />
                      <DateFormatter date={featuredPost.date} />
                    </div>
                    <div className="flex items-center gap-2">
                      <User size={18} />
                      SM Associate
                    </div>
                  </div>
                  <p className="text-gray-700 mb-6 leading-relaxed">
                    Discover insights and tips about {featuredPost.category.toLowerCase()}. Read our latest article to stay informed and make better financial decisions.
                  </p>
                  <Link
                    href={`/blog/${featuredPost.slug}`}
                    className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-teal to-cyan text-white font-semibold rounded-lg hover:shadow-lg transition-all"
                  >
                    Read Full Article
                    <ArrowRight size={20} />
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* Search & Filter */}
      <section className="py-12 bg-white border-b border-gray-200">
        <div className="container-padded max-w-4xl">
          {/* Search */}
          <div className="mb-8">
            <div className="relative">
              <Search className="absolute left-4 top-3 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Search articles..."
                className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg outline-none focus:border-teal"
              />
            </div>
          </div>

          {/* Categories */}
          <div className="flex gap-2 flex-wrap">
            {categories.map((category) => (
              <motion.button
                key={category}
                whileHover={{ scale: 1.05 }}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-lg font-semibold transition-all ${selectedCategory === category
                  ? 'bg-gradient-to-r from-teal to-cyan text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container-padded max-w-5xl">
          {otherPosts.length > 0 ? (
            <>
              <h2 className="text-2xl font-bold text-navy mb-8">Latest Articles</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {otherPosts.map((post, idx) => (
                  <motion.article
                    key={post.id}
                    initial={isMounted ? { opacity: 0, y: 20 } : { opacity: 1, y: 0 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={isMounted ? { delay: idx * 0.1, duration: 0.5 } : { duration: 0 }}
                    className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all"
                  >
                    {/* Thumbnail */}
                    <div className="relative h-48 overflow-hidden border-b border-slate-700 bg-slate-800">
                      <Image
                        src={post.image}
                        alt={`${post.title} - SM Associate Financial Insights`}
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="object-cover"
                      />
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      {/* Category Badge */}
                      <span className="inline-block px-3 py-1 bg-teal/20 text-teal text-xs font-semibold rounded-full mb-3">
                        {post.category}
                      </span>

                      {/* Title */}
                      <h3 className="text-lg font-bold text-navy mb-2 line-clamp-2">
                        {post.title}
                      </h3>

                      {/* Meta */}
                      <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
                        <div className="flex items-center gap-1">
                          <Calendar size={16} />
                          <DateFormatter date={post.date} />
                        </div>
                        <div className="flex items-center gap-1">
                          <User size={16} />
                          SM Associate
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-gray-700 text-sm mb-4">
                        Discover insights and tips about {post.category.toLowerCase()}. Read our latest article to stay informed.
                      </p>

                      {/* Read More Link */}
                      <Link
                        href={`/blog/${post.slug}`}
                        className="text-teal hover:text-cyan font-semibold flex items-center gap-2 transition-colors"
                      >
                        Read More
                        <ArrowRight size={16} />
                      </Link>
                    </div>
                  </motion.article>
                ))}
              </div>
            </>
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-600 text-lg">No articles found</p>
            </div>
          )}
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="py-16 bg-white">
        <div className="container-padded max-w-4xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Newsletter */}
            <motion.div
              initial={isMounted ? { opacity: 0, x: -20 } : { opacity: 1, x: 0 }}
              animate={{ opacity: 1, x: 0 }}
              transition={isMounted ? { duration: 0.5 } : { duration: 0 }}
              className="bg-gradient-to-br from-teal/10 to-cyan/10 p-8 rounded-xl border border-teal/20"
            >
              <h3 className="text-2xl font-bold text-navy mb-3">Subscribe to Updates</h3>
              <p className="text-gray-700 mb-6">Get the latest finance tips and insights delivered to your inbox every week.</p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="flex-1 px-4 py-2 rounded-lg border border-gray-300 outline-none focus:border-teal"
                />
                <button className="px-6 py-2 bg-gradient-to-r from-teal to-cyan text-white font-semibold rounded-lg hover:shadow-lg transition-all">
                  Subscribe
                </button>
              </div>
            </motion.div>

            {/* Related Resources */}
            <motion.div
              initial={isMounted ? { opacity: 0, x: 20 } : { opacity: 1, x: 0 }}
              animate={{ opacity: 1, x: 0 }}
              transition={isMounted ? { duration: 0.5 } : { duration: 0 }}
              className="bg-gradient-to-br from-cyan/10 to-teal/10 p-8 rounded-xl border border-cyan/20"
            >
              <h3 className="text-2xl font-bold text-navy mb-3">More Resources</h3>
              <p className="text-gray-700 mb-6">Explore our comprehensive guides and tools to help you make informed decisions.</p>
              <div className="space-y-2">
                <Link href="/emi-calculator" className="block text-teal hover:text-cyan font-semibold transition-colors">
                  → EMI Calculator
                </Link>
                <Link href="/loans" className="block text-teal hover:text-cyan font-semibold transition-colors">
                  → Loan Products
                </Link>
                <Link href="/contact" className="block text-teal hover:text-cyan font-semibold transition-colors">
                  → Contact Support
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Vaultline Blog & Advisory Contact Section */}
      <VaultContactSection
        theme="navy-blue"
        brandTag="SM Associate · Financial Advisory Desk"
        title={
          <>
            Turn financial insights into <em>smart moves</em>.
          </>
        }
        subtitle="Have questions about interest rate trends, vehicle valuations, or choosing between loan options? Ask our editorial finance specialists."
        stats={[
          { label: 'Articles & Guides Published', target: 55, suffix: '+' },
          { label: 'Monthly Readers', target: 4500, suffix: '+' },
          { label: 'Turnaround Time', target: 'under 2 hrs', isStatic: true },
        ]}
        formEyebrow="Reader & Advisory Inquiry"
        formTitle="Get personalized financial guidance."
        formSubtitle="Share your scenario — our specialists will review and suggest the most tax-efficient, lowest-interest path forward."
        reasonLabel="Topic of Interest"
        reasonOptions={[
          { value: 'loan_planning', label: 'Loan Planning & Strategy' },
          { value: 'vehicle_advice', label: 'Vehicle Purchase / Resale Advice' },
          { value: 'interest_rates', label: 'Interest Rate Comparison' },
          { value: 'general_query', label: 'General Editorial Query' },
        ]}
        defaultReason="loan_planning"
        valueLabel="Estimated Budget / Requirement"
        valuePlaceholder="e.g. ₹8,00,000"
        phoneLabel="Phone Number"
        phonePlaceholder="+91 97902 19874"
        messagePlaceholder="Ask about any financial concept, specific loan comparison, or vehicle financing question..."
        submitButtonText="Send Advisory Inquiry"
      />

      {/* FAQ Section */}
      <FAQSection category="blog" />
    </>
  );
}
