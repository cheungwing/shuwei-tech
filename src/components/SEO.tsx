import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonical?: string;
  ogImage?: string;
  ogType?: string;
  noIndex?: boolean;
}

export default function SEO({
  title,
  description,
  keywords,
  canonical,
  ogImage,
  ogType = 'website',
  noIndex = false,
}: SEOProps) {
  const { t, i18n } = useTranslation('seo');

  const siteName = t('siteName');
  const suffix = t('suffix');

  const resolvedTitle = title ?? t('defaultTitle');
  const resolvedDescription = description ?? t('defaultDesc');
  const resolvedCanonical = canonical ?? 'https://www.shuweitech.com/';
  const resolvedOgImage = ogImage ?? 'https://www.shuweitech.com/og-image.jpg';

  const fullTitle = resolvedTitle === t('defaultTitle') ? resolvedTitle : `${resolvedTitle}${suffix}`;

  const localeMap: Record<string, string> = {
    'zh-CN': 'zh_CN',
    'zh-TW': 'zh_TW',
    'en': 'en_US',
  };
  const ogLocale = localeMap[i18n.language] || 'zh_CN';

  return (
    <Helmet>
      <html lang={i18n.language} />
      <title>{fullTitle}</title>
      <meta name="description" content={resolvedDescription} />
      {keywords && <meta name="keywords" content={keywords} />}
      <link rel="canonical" href={resolvedCanonical} />
      {noIndex ? (
        <meta name="robots" content="noindex, nofollow" />
      ) : (
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      )}
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={resolvedCanonical} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={resolvedDescription} />
      <meta property="og:image" content={resolvedOgImage} />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:locale" content={ogLocale} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={resolvedDescription} />
      <meta name="twitter:image" content={resolvedOgImage} />
    </Helmet>
  );
}

// 页面SEO预设 - 现在通过i18n key自动获取对应语言的标题和描述
export const pageSEO = {
  home: {},
  products: {},
  solutions: {},
  about: {},
  contact: {},
  productDetail: (_productName: string) => ({}),
};
