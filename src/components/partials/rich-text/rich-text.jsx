// IMPORTS
import './rich-text.scss';
import {Highlight} from '@/components/partials/highlight/highlight';
import {H1, H2, H3, H4} from '@/components/partials/heading/heading';
import {P} from '@/components/partials/paragraph/paragraph';

// PARAGRAPH
const RichText = ({className = '', type = 'paragraph', children = null}) => {
	
	// RENDER
	return (
	<div className={`${className} rich-text`}>
		{children?.map((row, index) => (
		<div className='rich-text__row' key={index}>
			{row.children.map((group, index) => (
			<span className='rich-text__group' key={index}>
				{row.type === 'heading' && row.level === 1 && (
				<H1 className='rich-text__heading heading heading--h1'>
					{group.bold ? <Highlight className='heading__highlight'>{group.text}</Highlight> : group.text}
				</H1>
				)}
				{row.type === 'heading' && row.level === 2 && (
				<H2 className='rich-text__heading'>
					{group.bold ? <Highlight className='heading__highlight'>{group.text}</Highlight> : group.text}
				</H2>
				)}
				{row.type === 'heading' && row.level === 3 && (
				<H3 className='rich-text__heading'>
					{group.bold ? <Highlight className='heading__highlight'>{group.text}</Highlight> : group.text}
				</H3>
				)}
				{row.type === 'heading' && row.level === 4 && (
				<H4 className='rich-text__heading'>
					{group.bold ? <Highlight className='heading__highlight'>{group.text}</Highlight> : group.text}
				</H4>
				)}
				{row.type === 'paragraph' && (
				<P className='rich-text__paragraph paragraph'>
					{group.bold ? <Highlight className='paragraph__highlight'>{group.text}</Highlight> : group.text}
				</P>
				)}
			</span>
			))}
		</div>
		))}
	</div>
	);
	
};

// EXPORTS
export {
	RichText,
};