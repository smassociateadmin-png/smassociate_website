'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { BLOG_POSTS } from '@/lib/constants';
import Link from 'next/link';
import { ChevronLeft, Calendar, User, Share2 } from 'lucide-react';
import { DateFormatter } from '@/lib/DateFormatter';
import VaultContactSection from '@/components/sections/VaultContactSection';
import FAQSection from '@/components/sections/FAQSection';

export default function BlogDetailClient({ params }: { params: { slug: string } }) {
  const post = BLOG_POSTS.find(p => p.slug === params.slug);

  if (!post) {
    return (
      <div className="py-20 text-center">
        <h1 className="text-2xl font-bold text-navy">Article not found</h1>
        <Link href="/blog" className="text-teal hover:text-cyan mt-4 inline-block">
          Back to Blog
        </Link>
      </div>
    );
  }

  return (
    <div>
      <section className="bg-gray-50 border-b border-gray-200 py-4">
        <div className="container-padded max-w-3xl">
          <Link href="/blog" className="flex items-center gap-2 text-teal hover:text-cyan transition-colors">
            <ChevronLeft size={20} />
            Back to Blog
          </Link>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="container-padded max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <span className="inline-block px-3 py-1 bg-teal/20 text-teal text-sm font-semibold rounded-full mb-4">
              {post.category}
            </span>
            <h1 className="text-5xl md:text-6xl font-bold text-navy mb-6">{post.title}</h1>
            <div className="flex items-center gap-6 mb-8 flex-wrap text-gray-600">
              <div className="flex items-center gap-2">
                <User size={18} />
                <span>SM Associate</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar size={18} />
                <DateFormatter date={post.date} options={{ month: 'long' }} />
              </div>
              <button className="flex items-center gap-2 text-teal hover:text-cyan">
                <Share2 size={18} />
                <span>Share</span>
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      <section>
        <div className="container-padded max-w-3xl">
          <div className="relative mb-12 h-96 overflow-hidden rounded-xl border border-slate-700 shadow-lg bg-slate-800">
            <Image
              src={post.image}
              alt={`${post.title} - SM Associate Financial Article`}
              fill
              sizes="(max-width: 768px) 100vw, 768px"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="container-padded max-w-3xl">
          <motion.article
            initial={false}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="prose prose-lg max-w-none text-gray-700 leading-relaxed"
          >
            <p className="text-xl text-gray-600 mb-8 font-medium">{post.excerpt}</p>

            {post.content.map((section, index) => (
              <div key={`${post.slug}-${section.heading}`} className={index > 0 ? 'mt-12' : ''}>
                <h2 className="text-3xl font-bold text-navy mb-6">{section.heading}</h2>

                {section.paragraphs && section.paragraphs.map((paragraph, paragraphIndex) => (
                  <p key={`${section.heading}-p-${paragraphIndex}`} className="mb-4">
                    {paragraph}
                  </p>
                ))}

                {section.points && (
                  <ul className="space-y-4 mb-6 list-none pl-0">
                    {section.points.map((point, pointIndex) => (
                      <li key={`${section.heading}-point-${pointIndex}`} className="flex items-start gap-3">
                        <span className="mt-2 h-2.5 w-2.5 rounded-full bg-teal flex-shrink-0"></span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </motion.article>
        </div>
      </section>

      {/* Vaultline Blog Detail Contact Section */}
      <VaultContactSection
        theme="navy-blue"
        brandTag="SM Associate · Financial Editorial Desk"
        title={
          <>
            Questions on this guide? <em>Ask an advisor</em>.
          </>
        }
        subtitle="Our team is available to explain loan structures, vehicle valuation procedures, or interest calculations in detail."
        stats={[
          { label: 'Articles & Guides Published', target: 55, suffix: '+' },
          { label: 'Monthly Readers', target: 4500, suffix: '+' },
          { label: 'Turnaround Time', target: 'under 2 hrs', isStatic: true },
        ]}
        formEyebrow="Direct Article Inquiry"
        formTitle="Get tailored advice on this topic."
        formSubtitle="Have questions related to this article? Fill out your details below and our specialist will guide you."
        reasonLabel="Topic Query"
        reasonOptions={[
          { value: 'article_topic', label: `Question on ${post.title.substring(0, 30)}...` },
          { value: 'loan_query', label: 'Loan / Finance Application' },
          { value: 'vehicle_query', label: 'Vehicle Purchase / Resale' },
          { value: 'general_query', label: 'General Consultation' },
        ]}
        defaultReason="article_topic"
        valueLabel="Estimated Budget / Requirement"
        valuePlaceholder="e.g. ₹5,00,000"
        phoneLabel="Phone Number"
        phonePlaceholder="+91 97902 19874"
        messagePlaceholder="Ask your questions about this article or your specific financial situation..."
        submitButtonText="Send Inquiry"
      />

      <section className="py-20 bg-white">
        <div className="container-padded max-w-5xl">
          <h2 className="text-3xl font-bold text-navy mb-12 text-center">Related Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {BLOG_POSTS.filter(p => p.id !== post.id).slice(0, 3).map((relatedPost) => (
              <Link
                key={relatedPost.id}
                href={`/blog/${relatedPost.slug}`}
                className="bg-gray-50 p-6 rounded-xl hover:shadow-lg transition-all"
              >
                <div className="relative mb-4 h-32 overflow-hidden rounded-lg bg-slate-800">
                  <Image src={relatedPost.image} alt={`${relatedPost.title} - Financial Guide`} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover" />
                </div>
                <h3 className="font-bold text-navy mb-2 line-clamp-2">{relatedPost.title}</h3>
                <p className="text-sm text-gray-600">
                  <DateFormatter date={relatedPost.date} />
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection category="blogDetail" />
    </div>
  );
}
