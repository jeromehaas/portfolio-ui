// IMPORTS
import Site from '@/components/layouts/site/site';

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
export default Layout;