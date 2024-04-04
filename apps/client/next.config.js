const { createVanillaExtractPlugin } = require('@vanilla-extract/next-plugin');
const withVanillaExtract = createVanillaExtractPlugin();

/** @type {import('next').NextConfig} */

const nextConfig = {
	transpilePackages: ['@with/ui', '@with/foundation'],
};

module.exports = nextConfig;
module.exports = withVanillaExtract(nextConfig);
