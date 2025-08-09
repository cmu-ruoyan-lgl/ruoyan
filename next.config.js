const withNextIntl = require('next-intl/plugin')()

// For project sites on GitHub Pages, we need to serve the app under `/<repo-name>`.
// Use env var to inject the base path during CI while keeping local dev unaffected.
const repoBasePath = process.env.NEXT_PUBLIC_BASE_PATH || ""

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        port: "",
      },
    ],
  },
  ...(repoBasePath
    ? { basePath: repoBasePath, assetPrefix: repoBasePath + "/" }
    : {}),
}

module.exports = withNextIntl(nextConfig)
