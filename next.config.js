module.exports = {
  // Ensure images from other domains can be optimized
  images: {
    domains: ['personal-3.vercel.app'],
  },
  // Make sure all files in the public directory are treated as assets
  assetPrefix: undefined,
  // Optionally enable detailed tracing for debugging
  tracing: {
    ignoreRootSpans: false,
  },
}; 