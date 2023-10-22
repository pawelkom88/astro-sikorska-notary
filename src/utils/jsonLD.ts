import siteData from "../seo/siteData.json";
import {slugify} from "./utils";

export default function jsonLDGenerator({
  type = 'website',
  post,
  url,
}: {
  type: string;
  post?: any;
  url?: string;
}) {
  if (type === "post") {
    return `<script type="application/ld+json">
      {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": "${url}"
        },
        "headline": "${post.title}",
        "description": "${post.description}",
        "image": "${post.image?.src || "https://www.sikorskanotary.co.uk/social-media-card.png"}",
        "author": {
          "@type": "Person",
          "name": "${post.author}",
          "url": "${slugify(post.author || "")}"
        },
        "datePublished": "${post.date}"
      }
    </script>`;
  }
  if (type === "website")
    return `<script type="application/ld+json">
      {
      "@context": "https://schema.org/",
      "@type": "WebSite",
      "name": "${siteData.title}",
        "url": "${siteData.url}",
        "logo": "${siteData.url}/logo-png.2553576f.png",
        "image": "${siteData.url}/social-media-card.png",
        "description": "${siteData.description}",  
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Bristol",
          "addressRegion": "Avon",
          "addressCountry": "United Kingdom",
          "postalCode": "${siteData.postalCode}",
          "addressCountryCode": "GB",
          "city": "${siteData.city}",
          "region": "${siteData.region}",
          "streetAddress": "${siteData.streetAddress}"
        },
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": "${siteData.telephone}",
          "contactType": "customer support",
          "areaServed": "GB",
          "availableLanguage": "en-GB, pl-PL",
        }
      }
    </script>`;
}
