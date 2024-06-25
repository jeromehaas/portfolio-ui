// IMPORTS
import Section from '@/components/layouts/section/section.jsx';
import Introduction from '@/components/cards/introduction/introduction.jsx';
import Avatar from '@/components/cards/avatar/avatar.jsx';
import Quote from '@/components/cards/quote/quote.jsx';
import Activity from '@/components/cards/activity/activity';
import Location from '@/components/cards/location/location.jsx';
import Language from '@/components/cards/language/language.jsx';
import Theme from '@/components/cards/theme/theme.jsx';
import Calendar from '@/components/cards/calendar/calendar.jsx';
import Time from '@/components/cards/time/time.jsx';
import Address from '@/components/cards/address/address';
import SayHello from '@/components/cards/say-hello/say-hello';
import Experiences from '@/components/cards/experiences/experiences';
import TechStack from '@/components/cards/tech-stack/tech-stack';
import SocialPhone from '@/components/cards/social-phone/social-phone';
import SocialEmail from '@/components/cards/social-email/social-email';
import Statistics from '@/components/cards/statistics/statistics';
import FeaturedProjects from '@/components/cards/featured-projects/featured-projects';
import SocialLinkedin from '@/components/cards/social-linkedin/social-linkedin';
import SocialGithub from '@/components/cards/social-github/social-github';
import OnRepeat from '@/components/cards/on-repeat/on-repeat';
import CurriculumVitae from '@/components/cards/curriculum-vitae/curriculum-vitae';
import Plausible from '@/components/elements/plausible/plausible';

// PAGE
const Page = () => {
	
	// RENDER
	return (
	<Section>
		<Introduction/>
		<Quote/>
		<Language/>
		<Theme/>
		<Avatar/>
		<Activity/>
		<CurriculumVitae/>
		<Calendar/>
		<Time/>
		<SocialPhone/>
		<SocialEmail/>
		<TechStack/>
		<Location/>
		<FeaturedProjects/>
		<Address/>
		<OnRepeat/>
		<Experiences/>
		<SayHello/>
		<Statistics/>
		<SocialLinkedin/>
		<SocialGithub/>
		<Plausible />
	</Section>
	);
	
};

// EXPORTS
export default Page;
