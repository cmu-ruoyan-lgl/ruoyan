const withNextIntl = require('next-intl/plugin')()

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable static export for deployment to static hosts (e.g., GitHub Pages)
  output: "export",
  // Optional but recommended for static hosting with folder-based routing
  trailingSlash: true,
  images: {
    // Disable on-the-fly image optimization for static export
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        port: "",
      },
    ],
  },
}

module.exports = withNextIntl(nextConfig)
