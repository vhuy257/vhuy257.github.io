/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export",
    ignoreBuildErrors: true,
    eslint: {
        ignoreDuringBuilds: true,
    },
    typescript: {
        ignoreBuildErrors: true,
    },
};

export default nextConfig;
