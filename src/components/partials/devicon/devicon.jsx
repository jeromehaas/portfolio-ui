'use client';

// IMPORTS
import './devicon.scss';
import {useSearchParams} from 'next/navigation';

// DEVICON
const Devicon = ({className, type}) => {
	
	// BRING IN PARAMS
	const params = useSearchParams();
	
	// GET THEME
	const theme = params.get('theme');
	
	// RENDER
	return (
	<div className={`${className} devicon`}>
		{type === 'javascript' ? (
		<img className='devicon__icon' src={`/devicons/${theme === 'light' ? 'light' : 'dark'}/js.png`} alt=''/>
		) : null}
		{type === 'react' ? (
		<img className='devicon__icon' src={`/devicons/${theme === 'light' ? 'light' : 'dark'}/react.png`} alt=''/>
		) : null}
		{type === 'nextjs' ? (
		<img className='devicon__icon' src={`/devicons/${theme === 'light' ? 'light' : 'dark'}/nextjs.png`} alt=''/>
		) : null}
		{type === 'html' ? (
		<img className='devicon__icon' src={`/devicons/${theme === 'light' ? 'light' : 'dark'}/html.png`} alt=''/>
		) : null}
		{type === 'css' ? (
		<img className='devicon__icon' src={`/devicons/${theme === 'light' ? 'light' : 'dark'}/css.png`} alt=''/>
		) : null}
		{type === 'git' ? (
		<img className='devicon__icon' src={`/devicons/${theme === 'light' ? 'light' : 'dark'}/git.png`} alt=''/>
		) : null}
		{type === 'digitalocean' ? (
		<img className='devicon__icon' src={`/devicons/${theme === 'light' ? 'light' : 'dark'}/digitalocean.png`} alt=''/>
		) : null}
		{type === 'jasmine' ? (
		<img className='devicon__icon' src={`/devicons/${theme === 'light' ? 'light' : 'dark'}/jasmine.png`} alt=''/>
		
		) : null}
		{type === 'figma' ? (
		<img className='devicon__icon' src={`/devicons/${theme === 'light' ? 'light' : 'dark'}/figma.png`} alt=''/>
		
		) : null}
		{type === 'github' ? (
		<img className='devicon__icon' src={`/devicons/${theme === 'light' ? 'light' : 'dark'}/github.png`} alt=''/>
		
		) : null}
		{type === 'bash' ? (
		<img className='devicon__icon' src={`/devicons/${theme === 'light' ? 'light' : 'dark'}/bash.png`} alt=''/>
		
		) : null}
		{type === 'postgresql' ? (
		<img className='devicon__icon' src={`/devicons/${theme === 'light' ? 'light' : 'dark'}/postgres.png`} alt=''/>
		
		) : null}
		{type === 'astro' ? (
		<img className='devicon__icon' src={`/devicons/${theme === 'light' ? 'light' : 'dark'}/astro.png`} alt=''/>
		
		) : null}
		{type === 'expressjs' ? (
		<img className='devicon__icon' src={`/devicons/${theme === 'light' ? 'light' : 'dark'}/express.png`} alt=''/>
		
		) : null}
		{type === 'grunt' ? (
		<img className='devicon__icon' src={`/devicons/${theme === 'light' ? 'light' : 'dark'}/grunt.png`} alt=''/>
		
		) : null}
		{type === 'mongodb' ? (
		<img className='devicon__icon' src={`/devicons/${theme === 'light' ? 'light' : 'dark'}/mongodb.png`} alt=''/>
		
		) : null}
		{type === 'graphql' ? (
		<img className='devicon__icon' src={`/devicons/${theme === 'light' ? 'light' : 'dark'}/graphql.png`} alt=''/>
		
		) : null}
		{type === 'gulp' ? (
		<img className='devicon__icon' src={`/devicons/${theme === 'light' ? 'light' : 'dark'}/gulp.png`} alt=''/>
		
		) : null}
		{type === 'npm' ? (
		<img className='devicon__icon' src={`/devicons/${theme === 'light' ? 'light' : 'dark'}/npm.png`} alt=''/>
		
		) : null}
		{type === 'markdown' ? (
		<img className='devicon__icon' src={`/devicons/${theme === 'light' ? 'light' : 'dark'}/markdown.png`} alt=''/>
		
		) : null}
		{type === 'linux' ? (
		<img className='devicon__icon' src={`/devicons/${theme === 'light' ? 'light' : 'dark'}/linux.png`} alt=''/>
		
		) : null}
		{type === 'filezilla' ? (
		<img className='devicon__icon' src={`/devicons/${theme === 'light' ? 'light' : 'dark'}/filezilla.png`} alt=''/>
		
		) : null}
		{type === 'illustrator' ? (
		<img className='devicon__icon' src={`/devicons/${theme === 'light' ? 'light' : 'dark'}/illustrator.png`} alt=''/>
		
		) : null}
		{type === 'threejs' ? (
		<img className='devicon__icon' src={`/devicons/${theme === 'light' ? 'light' : 'dark'}/three.png`} alt=''/>
		
		) : null}
		{type === 'sass' ? (
		<img className='devicon__icon' src={`/devicons/${theme === 'light' ? 'light' : 'dark'}/sass.png`} alt=''/>
		
		) : null}
		{type === 'insomnia' ? (
		<img className='devicon__icon' src={`/devicons/${theme === 'light' ? 'light' : 'dark'}/insomnia.png`} alt=''/>
		
		) : null}
		{type === 'rxjs' ? (
		<img className='devicon__icon' src={`/devicons/${theme === 'light' ? 'light' : 'dark'}/rxjs.png`} alt=''/>
		
		) : null}
		{type === 'vim' ? (
		<img className='devicon__icon' src={`/devicons/${theme === 'light' ? 'light' : 'dark'}/vim.png`} alt=''/>
		
		) : null}
		{type === 'typescript' ? (
		<img className='devicon__icon' src={`/devicons/${theme === 'light' ? 'light' : 'dark'}/typescript.png`} alt=''/>
		
		) : null}
		{type === 'vscode' ? (
		<img className='devicon__icon' src={`/devicons/${theme === 'light' ? 'light' : 'dark'}/vscode.png`} alt=''/>
		
		) : null}
		{type === 'jamstack' ? (
		<img className='devicon__icon' src={`/devicons/${theme === 'light' ? 'light' : 'dark'}/jamstack.png`} alt=''/>
		
		) : null}
	</div>
	);
	
};

export {
	Devicon,
};