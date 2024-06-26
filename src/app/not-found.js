// IMPORTS
import Site from '@/components/layouts/site/site';
import Error from '@/components/cards/error/error';

// META DATA
const metadata = {
	title: 'Jérôme Haas | 404',
};

// COMPONENT
const Component = () => {
	
	// RENDER
	return (
	<Site>
		<Error/>
	</Site>
	);
	
};

// EXPORTS
export {metadata};
export default Component;