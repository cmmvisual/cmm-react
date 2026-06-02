import { useEffect } from 'react';

function upsertMeta(attr, key, value) {
  let el = document.querySelector(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute('content', value);
}

function upsertCanonical(href) {
  let el = document.querySelector('link[rel="canonical"]');
  if (!el) {
    el = document.createElement('link');
    el.setAttribute('rel', 'canonical');
    document.head.appendChild(el);
  }
  el.setAttribute('href', href);
}

function SEO({ title, description, keywords, ogImage }) {
  useEffect(() => {
    document.title = title;

    upsertMeta('name', 'description', description);
    if (keywords) upsertMeta('name', 'keywords', keywords);

    // Open Graph
    upsertMeta('property', 'og:title', title);
    upsertMeta('property', 'og:description', description);
    upsertMeta('property', 'og:url', window.location.href);
    if (ogImage) upsertMeta('property', 'og:image', ogImage);

    // Twitter Card
    upsertMeta('name', 'twitter:title', title);
    upsertMeta('name', 'twitter:description', description);
    if (ogImage) upsertMeta('name', 'twitter:image', ogImage);

    // Canonical
    upsertCanonical(window.location.href);
  }, [title, description, keywords, ogImage]);

  return null;
}

export default SEO;
