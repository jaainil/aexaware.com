import { Helmet } from "react-helmet-async";

interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
  type?: string;
  name?: string;
  image?: string;
  keywords?: string[];
  noindex?: boolean;
  author?: string;
  twitterCreator?: string;
  structuredData?: Record<string, unknown>;
}

export const SEO = ({
  title,
  description,
  canonical,
  type = "website",
  name = "Aexaware Infotech",
  image = "/og-image.png",
  keywords = [],
  noindex = false,
  author = "Aexaware Infotech",
  twitterCreator = "@Aexaware",
  structuredData,
}: SEOProps) => {
  const siteUrl = "https://aexaware.com";
  
  // Ensure canonical URL is absolute
  const fullUrl = canonical 
    ? (canonical.startsWith("http") ? canonical : `${siteUrl}${canonical}`) 
    : (typeof window !== "undefined" ? window.location.href : siteUrl);

  // Ensure image path is absolute
  const cleanImage = image.startsWith("/") ? image : `/${image}`;
  const fullImage = image.startsWith("http") ? image : `${siteUrl}${cleanImage}`;

  return (
    <Helmet>
      {/* Standard metadata */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="author" content={author} />
      {keywords.length > 0 && <meta name="keywords" content={keywords.join(", ")} />}
      {noindex && <meta name="robots" content="noindex, nofollow" />}
      <link rel="canonical" href={fullUrl} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={fullImage} />
      <meta property="og:site_name" content={name} />
      <meta property="og:locale" content="en_US" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content={twitterCreator} />
      <meta name="twitter:creator" content={twitterCreator} />
      <meta name="twitter:url" content={fullUrl} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullImage} />

      {/* JSON-LD Structured Data */}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
    </Helmet>
  );
};

