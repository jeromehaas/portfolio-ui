// IMPORTS
import "@/styles/configs/reset.scss";

// METADATA
const metadata = {
  title: "Jerome Haas",
  description: "",
};

// LAYOUT
const RootLayout = ({ children }) => {

	// RENDER
  return (
    <html lang="en">
      <body>
				{ children }
			</body>
    </html>
  );

};

// EXPORTS
export { metadata };
export default RootLayout;

