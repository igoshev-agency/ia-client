/** @type {import('next').NextConfig} */
const nextConfig = {
	experimental: {
		appDir: true,
		serverActions: true
	},
	webpack(config) {
		config.experiments = {
			...config.experiments,
			topLevelAwait: true
		}
		return config
	},
	i18n: {
		locales: ['default', 'en', 'de', 'ru'],
		defaultLocale: 'default'
	},
	trailingSlash: true
}

module.exports = nextConfig
