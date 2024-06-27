// IMPORTS
import './data-privacy.scss';
import Card from '@/components/layouts/card/card';
import {H2} from '@/components/partials/heading/heading';
import {P} from '@/components/partials/paragraph/paragraph';
import {Button} from '@/components/partials/button/button';
import {RichText} from '@/components/partials/rich-text/rich-text';
import {getDataPrivacyData} from '@/services/get-data-privacy-data';

// IMPRINT
const DataPrivacy = async() => {
	
	// GET DATA
	const {data} = await getDataPrivacyData();
	
	// RENDER
	return (
	<Card className='data-privacy'>
		<H2 className='data-privacy__title'>{data?.attributes?.title}</H2>
		{data?.attributes?.articles?.map((article) => (
		<div className='data-privacy__article article' key={article?.id}>
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