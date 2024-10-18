/** @type {import('next').NextConfig} */
const nextConfig = {

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.goswirl.live",
        port: "",
        pathname: "/wp-content/**",
      },
      {
        protocol: "https",
        hostname: "cdn.jsdelivr.net",
        port: "",
        pathname: "/gh/SwirlAdmin/swirl-cdn/assets/**",
      },
      {
        protocol: "https",
        hostname: "apigoswirl.com",
        port: "",
        pathname: "/short_video/",
      },
    ],
    domains: ["cdn0.iconfinder.com"],
  },
 
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
};

module.exports = nextConfig;