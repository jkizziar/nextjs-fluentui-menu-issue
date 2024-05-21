/** @type {import('next').NextConfig} */
const nextConfig = {
	experimental: {
		swcPlugins: [['fluentui-next-appdir-directive', { paths: ['@griffel', '@fluentui'] }]],
	},
};

module.exports = nextConfig;
