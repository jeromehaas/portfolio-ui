// IMPORTS
import Site from '@/components/layouts/site/site';
import {getLanguage} from '@/actions/lang';

// GENERATE METADATA
const generateMetadata = async() => {
	
	// GET LANGUAGE
	const language = await getLanguage();
	
	// GET BASE-URL
	const baseUrl = new URL(process.env.NEXT_PUBLIC_APP_UI_URI);
	
	// GET DATA
	const response = await fetch(`${process.env.NEXT_PUBLIC_APP_CMS_URI}/api/metadata?locale=${language}&populate=*`);
	const {data} = await response.json();
	
	// RETURN
	return {
		metadataBase: baseUrl,
		title: data?.attributes?.title,
		description: data?.attributes?.description,
		alternates: {
			canonical: '/',
			languages: {
				'en': '/en',
				'de': '/de',
			},
		},
		openGraph: {
			title: data?.attributes?.title,
			description: data?.attributes?.description,
			url: 'https://jeromehaas.ch',
			siteName: data?.attributes?.siteName,
			images: [{url: data?.attributes?.image?.data?.attributes?.url, width: 600, height: 800}],
			locale: language,
			type: 'website',
		},
	};
	
};

// SET VIEWPORT SETTINGS
const viewport = {
	width: 'device-width',
	initialScale: 1,
	maximumScale: 1,
	userScalable: false,
};

// LAYOUT
const Layout = ({children}) => {
	
	// RENDER
	return (
	<Site>
		{children}
	</Site>
	);
	
};

// EXPORTS
export {generateMetadata, viewport};
export default Layout;