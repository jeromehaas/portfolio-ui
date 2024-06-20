// IMPORTS
import './social-github.scss';
import Card from '@/components/layouts/card/card';
import GithubConnector from '@/components/elements/github-connector/github-connector';

// SOCIAL GITHUB
const SocialGithub = () => {
	
	// RENDER
	return (
	<Card className='social-github'>
		<GithubConnector className='social-github__github-connector'/>
	</Card>
	);
	
};

// EXPORTS
export default SocialGithub;