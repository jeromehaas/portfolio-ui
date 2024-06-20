// IMPORTS
import '@/styles/main.scss';

// METADATA
const metadata = {
	title: 'Jerome Haas',
	description: 'Curious and passionate web developer from Switzerland',
};

// ROOT-LAYOUT
const RootLayout = async({children}) => {
	
	// RENDER
	return (
	<html>
		<body>
			{children}
		</body>
	</html>
	);
	
};

// EXPORTS
export {metadata};
export default RootLayout;

