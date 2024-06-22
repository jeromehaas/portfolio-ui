'use client';

// IMPORTS
import './insights.scss';
import {H3} from '@/components/partials/heading/heading';
import {P} from '@/components/partials/paragraph/paragraph';

// INSIGHTS
const Insights = ({className = '', insights = []}) => {
	
	// RENDER
	return (
	<div className={`${className} insights`}>
		{insights.map((item, index) => (
		<div className='insights__item item' key={index}>
			<H3 className='item__title'>{item.title}</H3>
			<figure className='item__line'/>
			<P className='item__value paragraph--big paragraph--bold'>{item.value}</P>
		</div>
		))}
	</div>
	);
	
};

// EXPORTS
export default Insights;