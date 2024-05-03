// IMPORTS
import Section from "@/components/layouts/section/section";
import ExperiencesIntroduction from "@/components/cards/experiences-introduction/experiences-introduction";
import ExperiencesPastRoles from "@/components/cards/experiences-past-roles/experiences-past-roles";
import ExperiencesCurrentRole from "@/components/cards/experiences-current-role/experiences-current-role";

// EXPERIENCES
const Experiences = () => {

	// RENDER
  return (
		<Section>
			<ExperiencesIntroduction />
			<ExperiencesCurrentRole />
			<ExperiencesPastRoles />
		</Section>
  );

};

// EXPORTS
export default Experiences;
