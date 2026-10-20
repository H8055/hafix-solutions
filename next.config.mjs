/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: { unoptimized: true },
  // allows `NEXT_DIST_DIR=.next-build npm run build` without clobbering a running dev server
  distDir: process.env.NEXT_DIST_DIR || '.next',
  allowedDevOrigins: ['*.e2b.app', '*.arena.ai', 'localhost'],
};

export default nextConfig;
