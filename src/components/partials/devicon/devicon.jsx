'use client';

// IMPORTS
import './devicon.scss';
import {useSearchParams} from 'next/navigation';
import Image from 'next/image';

// DEVICON
const Devicon = ({className = '', type = ''}) => {
	
	// BRING IN PARAMS
	const params = useSearchParams();
	
	// GET THEME
	const theme = params.get('theme');
	
	// RENDER
	return (
	<div className={`${className} devicon`}>
		{type === 'javascript' ? <Image className='devicon__icon' src={`/devicons/${theme === 'light' ? 'light' : 'dark'}/js.png`} width={80} height={80} alt='JavaScript'/> : null}
		{type === 'react' ? <Image className='devicon__icon' src={`/devicons/${theme === 'light' ? 'light' : 'dark'}/react.png`} width={80} height={80} alt='React'/> : null}
		{type === 'nextjs' ? <Image className='devicon__icon' src={`/devicons/${theme === 'light' ? 'light' : 'dark'}/nextjs.png`} width={80} height={80} alt='NextJS'/> : null}
		{type === 'html' ? <Image className='devicon__icon' src={`/devicons/${theme === 'light' ? 'light' : 'dark'}/html.png`} width={80} height={80} alt='HTML'/> : null}
		{type === 'css' ? <Image className='devicon__icon' src={`/devicons/${theme === 'light' ? 'light' : 'dark'}/css.png`} width={80} height={80} alt='CSS'/> : null}
		{type === 'git' ? <Image className='devicon__icon' src={`/devicons/${theme === 'light' ? 'light' : 'dark'}/git.png`} width={80} height={80} alt='Git'/> : null}
		{type === 'digitalocean' ? <Image className='devicon__icon' src={`/devicons/${theme === 'light' ? 'light' : 'dark'}/digitalocean.png`} width={80} height={80} alt='Digital Ocean'/> : null}
		{type === 'jasmine' ? <Image className='devicon__icon' src={`/devicons/${theme === 'light' ? 'light' : 'dark'}/jasmine.png`} width={80} height={80} alt='Jasmine'/> : null}
		{type === 'figma' ? <Image className='devicon__icon' src={`/devicons/${theme === 'light' ? 'light' : 'dark'}/figma.png`} width={80} height={80} alt='Figma'/> : null}
		{type === 'github' ? <Image className='devicon__icon' src={`/devicons/${theme === 'light' ? 'light' : 'dark'}/github.png`} width={80} height={80} alt='GitHub'/> : null}
		{type === 'bash' ? <Image className='devicon__icon' src={`/devicons/${theme === 'light' ? 'light' : 'dark'}/bash.png`} width={80} height={80} alt='Bash'/> : null}
		{type === 'postgresql' ? <Image className='devicon__icon' src={`/devicons/${theme === 'light' ? 'light' : 'dark'}/postgres.png`} width={80} height={80} alt='PostgreSQL'/> : null}
		{type === 'astro' ? <Image className='devicon__icon' src={`/devicons/${theme === 'light' ? 'light' : 'dark'}/astro.png`} width={80} height={80} alt='Astro'/> : null}
		{type === 'expressjs' ? <Image className='devicon__icon' src={`/devicons/${theme === 'light' ? 'light' : 'dark'}/express.png`} width={80} height={80} alt='ExpressJS'/> : null}
		{type === 'grunt' ? <Image className='devicon__icon' src={`/devicons/${theme === 'light' ? 'light' : 'dark'}/grunt.png`} width={80} height={80} alt='Grunt'/> : null}
		{type === 'mongodb' ? <Image className='devicon__icon' src={`/devicons/${theme === 'light' ? 'light' : 'dark'}/mongodb.png`} width={80} height={80} alt='Mongo DB'/> : null}
		{type === 'graphql' ? <Image className='devicon__icon' src={`/devicons/${theme === 'light' ? 'light' : 'dark'}/graphql.png`} width={80} height={80} alt='GraphQL'/> : null}
		{type === 'gulp' ? <Image className='devicon__icon' src={`/devicons/${theme === 'light' ? 'light' : 'dark'}/gulp.png`} width={80} height={80} alt='Gulp'/> : null}
		{type === 'npm' ? <Image className='devicon__icon' src={`/devicons/${theme === 'light' ? 'light' : 'dark'}/npm.png`} width={80} height={80} alt='NPM'/> : null}
		{type === 'markdown' ? <Image className='devicon__icon' src={`/devicons/${theme === 'light' ? 'light' : 'dark'}/markdown.png`} width={80} height={80} alt='Mardown'/> : null}
		{type === 'linux' ? <Image className='devicon__icon' src={`/devicons/${theme === 'light' ? 'light' : 'dark'}/linux.png`} width={80} height={80} alt='Linux'/> : null}
		{type === 'filezilla' ? <Image className='devicon__icon' src={`/devicons/${theme === 'light' ? 'light' : 'dark'}/filezilla.png`} width={80} height={80} alt='Filezilla'/> : null}
		{type === 'illustrator' ? <Image className='devicon__icon' src={`/devicons/${theme === 'light' ? 'light' : 'dark'}/illustrator.png`} width={80} height={80} alt='Illustrator'/> : null}
		{type === 'threejs' ? <Image className='devicon__icon' src={`/devicons/${theme === 'light' ? 'light' : 'dark'}/three.png`} width={80} height={80} alt='ThreeJS'/> : null}
		{type === 'sass' ? <Image className='devicon__icon' src={`/devicons/${theme === 'light' ? 'light' : 'dark'}/sass.png`} width={80} height={80} alt='Sass'/> : null}
		{type === 'insomnia' ? <Image className='devicon__icon' src={`/devicons/${theme === 'light' ? 'light' : 'dark'}/insomnia.png`} width={80} height={80} alt='Insomnia'/> : null}
		{type === 'rxjs' ? <Image className='devicon__icon' src={`/devicons/${theme === 'light' ? 'light' : 'dark'}/rxjs.png`} width={80} height={80} alt='RxJS'/> : null}
		{type === 'vim' ? <Image className='devicon__icon' src={`/devicons/${theme === 'light' ? 'light' : 'dark'}/vim.png`} width={80} height={80} alt='Vim'/> : null}
		{type === 'typescript' ? <Image className='devicon__icon' src={`/devicons/${theme === 'light' ? 'light' : 'dark'}/typescript.png`} width={80} height={80} alt='TypeScript'/> : null}
		{type === 'vscode' ? <Image className='devicon__icon' src={`/devicons/${theme === 'light' ? 'light' : 'dark'}/vscode.png`} width={80} height={80} alt='VS Code'/> : null}
		{type === 'jamstack' ? <Image className='devicon__icon' src={`/devicons/${theme === 'light' ? 'light' : 'dark'}/jamstack.png`} width={80} height={80} alt='JAM Stack'/> : null}
	</div>
	);
	
};

// EXPORTS
export {
	Devicon,
};