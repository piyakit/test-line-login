/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        lineClientID: process.env.LINE_CLIENT_ID,
        lineClientSecret: process.env.LINE_CLIENT_SECRET,
    }
};

export default nextConfig;
