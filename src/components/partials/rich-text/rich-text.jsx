// IMPORTS
import './rich-text.scss';
import {Highlight} from '@/components/partials/highlight/highlight';
import {H1, H2, H3, H4} from '@/components/partials/heading/heading';
import {P} from '@/components/partials/paragraph/paragraph';
import {Li} from '@/components/partials/list-item/list-item';

// PARAGRAPH
const RichText = ({className = '', children = null}) => {
	
	// RENDER
	return (
	<div className={`${className} rich-text`}>
		{children?.map((row, rowIndex) => (
		<div className='rich-text__row' key={rowIndex}>
			{row.children.map((group, groupIndex) => (
			<span className='rich-text__group' key={groupIndex}>
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
				{row.type === 'list' && row?.children?.map((list, listIndex) => (
				<ul className='rich-text__list list' key={`${rowIndex}-${listIndex}`}>
					{list?.children.map((child, listItemIndex) => (
					<Li className='rich-text__list-item' key={`${rowIndex}-${listIndex}-${listItemIndex}`}>{child.text}</Li>
					))}
				</ul>
				))}
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