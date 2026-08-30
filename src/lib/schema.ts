// Schema.org structured data generation utilities

export const generateArticleSchema = (article: {
  title: string;
  description: string;
  date: string;
  slug: string;
  category: string;
}) => {
  const baseUrl = 'https://smassociate.com';

  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: article.title,
    description: article.description,
    image: `${baseUrl}/og-blog-default.jpg`,
    datePublished: article.date,
    dateModified: article.date,
    author: {
      '@type': 'Organization',
      name: 'SM Associate',
      url: baseUrl,
      logo: `${baseUrl}/og-image.jpg`,
    },
    publisher: {
      '@type': 'Organization',
      name: 'SM Associate',
      logo: {
        '@type': 'ImageObject',
        url: `${baseUrl}/og-image.jpg`,
        width: 250,
        height: 60,
      },
    },
    articleSection: article.category,
    url: `${baseUrl}/blog/${article.slug}`,
  };
};

export const generateProductSchema = (vehicle: {
  id: string;
  brand: string;
  model: string;
  year: number;
  price: string;
  description: string;
}) => {
  const baseUrl = 'https://smassociate.com';
  // Extract numeric price for schema
  const priceValue = vehicle.price.replace(/[₹,]/g, '');

  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: `${vehicle.year} ${vehicle.brand} ${vehicle.model}`,
    description: vehicle.description,
    image: `${baseUrl}/og-vehicle-default.jpg`,
    brand: {
      '@type': 'Brand',
      name: vehicle.brand,
    },
    offers: {
      '@type': 'Offer',
      url: `${baseUrl}/vehicles/${vehicle.id}`,
      priceCurrency: 'INR',
      price: priceValue,
      availability: 'https://schema.org/InStock',
      seller: {
        '@type': 'Organization',
        name: 'SM Associate',
      },
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.5',
      reviewCount: '25',
    },
  };
};

export const generateFAQSchema = (faqs: Array<{ question: string; answer: string }>) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
};

export const generateBreadcrumbSchema = (breadcrumbs: Array<{ name: string; url: string }>) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: breadcrumbs.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
};

const schemaExports = {
  generateArticleSchema,
  generateProductSchema,
  generateFAQSchema,
  generateBreadcrumbSchema,
};

export default schemaExports;
