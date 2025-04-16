/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    // Tell Turbopack to transpile @supabase/node-fetch
    transpilePackages: ["@supabase/node-fetch"],
  },
};

module.exports = nextConfig;
