import type * as Preset from '@docusaurus/preset-classic';
import type { Config } from '@docusaurus/types';
import { convertNpmToPackageManagers } from '@sapphire/docusaurus-plugin-npm2yarn2pnpm';
import { ts2esm2cjs } from '@sapphire/docusaurus-plugin-ts2esm2cjs';
import { themes as prismThemes } from 'prism-react-renderer';

const baseTypedocOptions = {
	/* typedoc */
	includeVersion: true,

	/* typedoc-plugin-markdown */
	fileExtension: '.md',
	excludeExternals: true,
	expandParameters: true,
	parametersFormat: 'table',
	enumMembersFormat: 'table',
	indexFormat: 'table',
};

const config: Config = {
	title: 'Jova.js',
	tagline: 'Jova.js Documentation',
	favicon: 'img/JovaIcon.ico',

	// Set the production url of your site here
	url: 'https://jova.js.org', //'https://jova.js.org',
	// Set the /<baseUrl>/ pathname under which your site is served
	// For GitHub pages deployment, it is often '/<projectName>/'
	baseUrl: '/',
	trailingSlash: false,
	themes: [
		[
			require.resolve('@easyops-cn/docusaurus-search-local'),
			{
				hashed: true,
				language: ['en'],
				docsDir: 'docs',
			},
		],
	],
	markdown: {
		format: 'detect',
	},
	future: {
		experimental_faster: true,
	},

	// GitHub pages deployment config.
	// If you aren't using GitHub pages, you don't need these.
	organizationName: 'bracketed', // Usually your GitHub org/user name.
	projectName: 'jova.js', // Usually your repo name.

	onBrokenLinks: 'throw',
	onBrokenMarkdownLinks: 'warn',

	// Even if you don't use internationalization, you can use this field to set
	// useful metadata like html lang. For example, if your site is Chinese, you
	// may want to replace "en" with "zh-Hans".
	i18n: {
		defaultLocale: 'en',
		locales: ['en'],
	},
	plugins: [
		[
			'@docusaurus/plugin-pwa',
			{
				offlineModeActivationStrategies: ['appInstalled', 'standalone', 'queryString'],
				pwaHead: [
					{
						tagName: 'meta',
						name: 'theme-color',
						content: '#25c2a0',
					},
				],
			},
		],
		[
			'docusaurus-plugin-typedoc',
			{
				...baseTypedocOptions,
				id: 'jova',
				entryPoints: [
					'./package/src/index.ts',
					'./package/src/types/index.ts',
					'./package/src/decorators/index.ts',
				],
				categorizeByGroup: true,
				tsconfig: './package/tsconfig.json',
				readme: './package/README.md',
				out: 'docs/Documentation',
				plugin: ['typedoc-plugin-mdn-links'],
			},
		],
	],

	presets: [
		[
			'classic',
			{
				docs: {
					sidebarPath: './sidebars.ts',
					remarkPlugins: [convertNpmToPackageManagers, ts2esm2cjs],
				},
				theme: {
					customCss: './src/css/custom.css',
				},
				blog: false,
			} satisfies Preset.Options,
		],
	],

	themeConfig: {
		colorMode: {
			defaultMode: 'dark', // Default to dark mode
			disableSwitch: true, // Disable the switch for light/dark mode
			respectPrefersColorScheme: false, // Do not follow system preferences
		},
		navbar: {
			title: 'Jova.js Documentation',
			logo: {
				src: 'img/JovaLogoFill.svg',
			},
			items: [
				{ to: '/', label: 'Home', position: 'left' },
				{ to: '/docs/Documentation', label: 'Documentation', position: 'left' },
				{ to: '/docs/Guide', label: 'Guide', position: 'left' },
				{
					href: 'https://github.com/bracketed/jova.js/wiki',
					label: 'GitHub Wiki',
					position: 'left',
				},
				{
					href: 'https://github.com/bracketed/jova.js',
					label: 'GitHub',
					position: 'right',
				},
				{
					href: 'https://www.npmjs.com/package/@bracketed/jova.js',
					label: 'NPM',
					position: 'right',
				},
				{
					href: 'https://x.com/teambracketed',
					label: 'Twitter [X]',
					position: 'right',
				},
				{
					href: 'https://discord.com/invite/JZ4939cvMT',
					label: 'Discord',
					position: 'right',
				},
			],
		},
		footer: {
			style: 'dark',
			links: [
				{
					title: 'Quick Links',
					items: [
						{
							label: 'Home',
							href: '/',
						},
						{
							label: 'Documentation',
							href: '/docs',
						},
						{
							label: 'Package',
							href: 'https://npmjs.com/package/@bracketed/jova.js',
							target: '_blank',
						},
					],
				},
				{
					title: 'Relevant Links',
					items: [
						{
							label: 'Bracketed',
							href: 'https://www.bracketed.co.uk',
							target: '_blank',
						},
						{
							label: 'Status Page',
							href: 'https://status.bracketed.co.uk',
							target: '_blank',
						},
						{
							label: 'Vrfy',
							href: 'https://vrfy.bracketed.co.uk',
							target: '_blank',
						},
					],
				},
				{
					title: 'Social Links',
					items: [
						{
							label: 'Twitter [X]',
							href: 'https://x.com/teambracketed',
							target: '_blank',
						},
						{
							label: 'Github',
							href: 'https://bracketed.co.uk/redirects/github',
							target: '_blank',
						},
						{
							label: 'Discord',
							href: 'https://bracketed.co.uk/redirects/discord',
							target: '_blank',
						},
					],
				},
			],
			copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
		},
		prism: {
			defaultLanguage: 'javascript',
			additionalLanguages: ['powershell', 'batch'],
			theme: prismThemes.github,
			darkTheme: prismThemes.vsDark,
		},
	} satisfies Preset.ThemeConfig,
};

export default config;
