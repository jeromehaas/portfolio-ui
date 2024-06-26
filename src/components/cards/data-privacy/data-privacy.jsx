// IMPORTS
import './data-privacy.scss';
import Card from '@/components/layouts/card/card';
import {H2, H3} from '@/components/partials/heading/heading';
import {P} from '@/components/partials/paragraph/paragraph';
import {getLanguage} from '@/actions/lang';
import {Button} from '@/components/partials/button/button';
import {RichText} from '@/components/partials/rich-text/rich-text';

// IMPRINT
const DataPrivacy = async() => {
	
	// GET LANGUAGE
	const language = await getLanguage();
	
	// GET DATA
	const response = await fetch(`http://localhost:1337/api/data-privacy?locale=${language}&populate=*`);
	const {data} = await response.json();
	
	// RENDER
	return (
	<Card className='data-privacy'>
		<H2 className='data-privacy__title'>{data?.attributes?.title}</H2>
		{data?.attributes?.articles?.map((article, index) => (
		<div className='data-privacy__article article'>
			<P className='article__title paragraph--big paragraph--bold'>{article?.title}</P>
			<RichText className='article__content'>{article?.content}</RichText>
		</div>
		))}
		<Button className='data-privacy__button' href={data?.attributes.button?.href}>{data?.attributes?.button?.label}</Button>
	</Card>
	);
	
};

// EXPORTS
export default DataPrivacy;