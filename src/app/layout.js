// IMPORTS
import '@/styles/main.scss';

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
//export {metadata};
export default RootLayout;

