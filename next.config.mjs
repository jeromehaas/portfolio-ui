// CONFIG
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: 'http',
				hostname: 'localhost',
				pathname: '**'
			},
			{
				protocol: 'https',
				hostname: 'picsum.photos',
				pathname: '**'
			},
			{
				protocol: 'https',
				hostname: 'portfolio-space-dev.fra1.digitaloceanspaces.com',
				pathname: '**'
			},
			{
				protocol: 'https',
				hostname: 'portfolio-space-pro.fra1.digitaloceanspaces.com',
				pathname: '**'
			},
		]
		
	},
	eslint: {
		ignoreDuringBuilds: true,
	},
};

// EXPORTS
export default nextConfig;
