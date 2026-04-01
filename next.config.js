/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable React Strict Mode for development
  reactStrictMode: true,

  // Export the site as fully static HTML
  output: 'export',

  // Add trailing slashes to URLs (useful for static hosting)
  trailingSlash: true,

  // Allow images to be used without Next.js optimization (static export compatible)
  images: {
    unoptimized: true,
  },

  // Optional: Enable cleaner URLs for static export
  // i.e., /about/ instead of /about.html
  // (trailingSlash already ensures this)
};

module.exports = nextConfig;