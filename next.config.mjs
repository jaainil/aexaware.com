/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "images.unsplash.com",
            },
            {
                protocol: "https",
                hostname: "assets.aceternity.com",
            },
            {
                protocol: "https",
                hostname: "pbs.twimg.com",
            },
            {
                protocol: "https",
                hostname: "private-user-images.githubusercontent.com",
            },
            {
                protocol: "https",
                hostname: "public-files.gumroad.com",
            },
            {
                protocol: "https",
                hostname: "avatars.githubusercontent.com",
            },
        ],
    },
};

export default nextConfig;
