/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      'res.cloudinary.com', // Add Cloudinary domain
      // Add other image host domains if needed
    ],
  },
};

module.exports = nextConfig;