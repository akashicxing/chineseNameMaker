"use client";

interface SEOStructuredDataProps {
  type: 'WebPage' | 'Article' | 'FAQPage' | 'BlogPosting';
  data: any;
}

export default function SEOStructuredData({ type, data }: SEOStructuredDataProps) {
  const generateStructuredData = () => {
    const baseData = {
      "@context": "https://schema.org",
      "@type": type,
      ...data
    };

    switch (type) {
      case 'Article':
      case 'BlogPosting':
        return {
          ...baseData,
          publisher: {
            "@type": "Organization",
            name: "Chinese Name Generator Online",
            url: "https://chinesenamegenerator.online"
          },
          mainEntityOfPage: {
            "@type": "WebPage",
            "@id": data.url
          }
        };
      
      case 'FAQPage':
        return {
          ...baseData,
          mainEntity: data.questions?.map((q: any) => ({
            "@type": "Question",
            name: q.question,
            acceptedAnswer: {
              "@type": "Answer",
              text: q.answer
            }
          }))
        };
      
      default:
        return baseData;
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(generateStructuredData())
      }}
    />
  );
}
