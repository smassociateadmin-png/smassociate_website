import type { Metadata } from 'next';
import { BLOG_POSTS } from '@/lib/constants';
import { generateArticleSchema } from '@/lib/schema';
import BlogDetailClient from './BlogDetailClient';

export function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = BLOG_POSTS.find(p => p.slug === params.slug);

  if (!post) {
    return {
      title: 'Article Not Found - SM Associate',
      description: 'The article you are looking for could not be found.',
    };
  }

  const baseUrl = 'https://smassociate.com';
  const url = `${baseUrl}/blog/${post.slug}`;
  
  // Create excerpt from title for description
  const description = `${post.title}. Read our expert insights on ${post.category.toLowerCase()} from SM Associate. Stay informed with quality financial and vehicle advice.`;

  return {
    title: `${post.title} | SM Associate Blog`,
    description: description,
    keywords: `${post.category}, finance blog, ${post.title.toLowerCase()}, SM Associate, Tirunelveli`,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: post.title,
      description: description,
      url: url,
      type: 'article',
      publishedTime: post.date,
      authors: ['SM Associate'],
      images: [
        {
          url: `${baseUrl}/og-blog-default.jpg`,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: description,
      images: [`${baseUrl}/og-blog-default.jpg`],
    },
  };
}

export default function BlogDetailPage({ params }: { params: { slug: string } }) {
  const post = BLOG_POSTS.find(p => p.slug === params.slug);
  
  // Generate Article schema for structured data
  const articleSchema = post ? generateArticleSchema({
    title: post.title,
    description: `${post.title}. Read our expert insights on ${post.category.toLowerCase()} from SM Associate. Stay informed with quality financial and vehicle advice.`,
    date: post.date,
    slug: post.slug,
    category: post.category,
  }) : null;

  return (
    <>
      {articleSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
        />
      )}
      <BlogDetailClient params={params} />
    </>
  );
}
