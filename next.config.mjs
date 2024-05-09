/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        liffId: process.env.LIFF_ID
    },
    images: {
        domains: ['https://profile.line-scdn.net'],
        remotePatterns: [
            {
              protocol: 'https',
              hostname: 'profile.line-scdn.net',
              port: '',
              pathname: '/**',
            },
          ],
      },
};

export default nextConfig;
