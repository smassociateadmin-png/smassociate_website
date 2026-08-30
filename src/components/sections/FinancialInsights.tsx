import Image from 'next/image';
import { ChevronRight, Calendar, BookOpen } from 'lucide-react';
import Link from 'next/link';
import { ROUTES, BLOG_POSTS } from '@/lib/constants';

export default function FinancialInsights() {
  const blogs = BLOG_POSTS.slice(0, 3);

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal/10 text-teal text-xs font-bold uppercase tracking-wider mb-3">
            <BookOpen size={14} /> Knowledge Hub
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">Financial Insights &amp; Guides</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Stay informed with verified financial education, loan planning strategies, and vehicle buying tips.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogs.map((blog) => (
            <article
              key={blog.id}
              className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all border border-gray-100 flex flex-col justify-between group"
            >
              <div>
                {/* Blog Card Image */}
                <div className="h-48 w-full relative overflow-hidden bg-slate-900">
                  <Image
                    src={blog.image}
                    alt={`${blog.title} - Financial Guide`}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
                  <span className="absolute top-3 left-3 px-3 py-1 bg-teal text-white text-xs font-bold rounded-full shadow-md">
                    {blog.category}
                  </span>
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-1.5 text-xs text-teal font-semibold mb-2">
                    <Calendar size={13} />
                    <span>{blog.date}</span>
                  </div>
                  <h3 className="text-lg font-bold text-navy mb-3 line-clamp-2 group-hover:text-teal transition-colors">
                    {blog.title}
                  </h3>
                  <p className="text-sm text-gray-600 line-clamp-2 mb-4 leading-relaxed">
                    {blog.excerpt}
                  </p>
                </div>
              </div>

              <div className="px-6 pb-6">
                <Link
                  href={`/blog/${blog.slug}`}
                  className="inline-flex items-center gap-2 text-sm text-teal hover:text-cyan font-bold transition-colors"
                >
                  <span>Read Full Guide</span>
                  <ChevronRight size={16} />
                </Link>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href={ROUTES.BLOG}
            className="inline-flex items-center justify-center px-8 py-3 bg-gradient-to-r from-teal to-cyan text-white font-semibold rounded-xl hover:shadow-lg transition-all"
          >
            View All Articles
          </Link>
        </div>
      </div>
    </section>
  );
}
