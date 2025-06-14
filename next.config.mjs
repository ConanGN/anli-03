/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'test.zhihur.com',
                port: '',
                pathname: '/img/**',
            },
            {
                protocol: 'https',
                hostname: 'tailwindcss.com',
                port: '',
                pathname: '/plus-assets/img/ecommerce-images/**',
            }
        ]
    }
};

export default nextConfig;
