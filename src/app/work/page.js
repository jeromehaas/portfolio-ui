// IMPORTS
import Section from "@/components/layouts/section/section";
import WorkIntroduction from "@/components/cards/work-introduction/work-introduction";
import WorkReferences from "@/components/cards/work-references/work-references";

// WORK
const Work = () => {

	// RENDER
  return (
		<Section>
			<WorkIntroduction />
			<WorkReferences />
		</Section>
  );

};

// EXPORTS
export default Work;