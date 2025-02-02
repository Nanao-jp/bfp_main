export default function JsonLd() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Big Fighter Project',
    description: '芸能プロダクション ビッグファイタープロジェクト',
    url: 'https://bigfighterproject.com',
    logo: 'https://bigfighterproject.com/logo.png',
    sameAs: [
      'https://www.youtube.com/@bigfighterproject',
      'https://twitter.com/bigfighterproject',
      'https://www.instagram.com/bigfighterproject'
    ],
    address: {
      '@type': 'PostalAddress',
      streetAddress: '池袋3-36-3 MICCビル1F',
      addressLocality: '豊島区',
      addressRegion: '東京都',
      postalCode: '171-0014',
      addressCountry: 'JP'
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '03-6912-5467',
      contactType: 'customer service',
      areaServed: 'JP',
      availableLanguage: ['ja']
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
} 