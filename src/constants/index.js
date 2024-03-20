import {
	javascript,
	typescript,
	html,
	css,
	reactjs,
	tailwind,
	git,
	python,
	auxvivres,
	ikea,
	goodchange,
	starbucks,
	helmet,
	gandalf,
	cineverse_d,
	cineverse_l,
	cineverse,
	luckyshrub,
	threejs,
	chakra,
	github,
	github_nav,
	linkedin_white,
	linkedin,
	vite,
	nextjs,
	netlify,
} from '../assets'

export const NavLinks = [
	{
		id: 'work',
		title: 'Work',
	},
	{
		id: 'about',
		title: 'About',
	},
	{
		id: 'contact',
		title: 'Contact',
	},
]

const technologies = [
	{
		name: 'TypeScript',
		icon: typescript,
	},
	{
		name: 'JavaScript',
		icon: javascript,
	},
	{
		name: 'next js',
		icon: nextjs,
	},
	{
		name: 'React JS',
		icon: reactjs,
	},
	{
		name: 'HTML 5',
		icon: html,
	},
	{
		name: 'CSS 3',
		icon: css,
	},

	// {
	// 	name: 'python',
	// 	icon: python,
	// },

	{
		name: 'netlify',
		icon: netlify,
	},
	{
		name: 'Tailwind CSS',
		icon: tailwind,
	},
	{
		name: 'Three JS',
		icon: threejs,
	},
	{
		name: 'Chakra UI',
		icon: chakra,
	},
	{
		name: 'git',
		icon: git,
	},
	{
		name: 'vite',
		icon: vite,
	},
]

const socials = [
	{
		icon: linkedin,
		hover: linkedin_white,
		company: 'Linkedin',
		url: `${import.meta.env.VITE_LINKEDIN_URL}`,
	},
	{
		icon: github_nav,
		hover: github,
		company: 'Github',
		url: `${import.meta.env.VITE_GITHUB_URL}`,
	},
]

const experiences = [
	{
		title: 'Full stack software engineer (contract)',
		company_name: 'GoodChange | Fintech',
		mainStack:
			'Next.js 14, TypesScript, Netlify, Plaid, Moov.io, Tailwind CSS, React Query, Bubble.io.',
		icon: goodchange,
		iconBg: '#ffffff',
		date: 'Nov 2023 - Present',
		points: [
			'Developed complex TypeScript backend endpoints on Netlify, leveraging AWS infrastructure for large-scale data processing and report generation.',
			'Implemented custom features and filtering options for optimised performance and user experience.',
			'Designed the front-end architecture, implementing extensive routing and iframe integration.',
			'Recognised for problem-solving abilities and contributions to issue resolution.',
			'Promoted to Full Stack Software Engineer within two months for dedication and contributions.',
		],
	},
	{
		title: 'Front-end developer Internship',
		company_name: 'GoodChange | Fintech',
		mainStack:
			'Next.js 14, TypesScript, Tailwind CSS, Netlify, React Query, Bubble.io.',
		icon: goodchange,
		iconBg: '#ffffff',
		date: 'Oct 2023 - Nov 2023',
		points: [
			'Architected and implemented a scalable project structure, ensuring optimal performance and security.',
			'Collaborated closely with cross-functional teams, aiding in task organisation on Asana and conducting research to support decision-making processes.',
			'Actively participated in virtual meetings and Slack discussions, seeking guidance from senior team members to address technical challenges and refine implementation strategies.',
			'Played a supportive role in the implementation of a new system for backend request organisation, assisting with style duplication efforts while prioritising scalability and minimising technical debt.',
		],
	},
	{
		title: 'Logistics Operations Specialist',
		company_name: 'IKEA',
		icon: ikea,
		iconBg: '#005AA9',
		date: 'Sept 2022 - March 2023',
		points: [
			'Ensured safe and efficient movement of goods within a high-volume warehouse.',
			'Recorded and tracked shipments using warehouse database systems.',
			'Collaborated with team members to unload lorries and optimise storage space.',
			'Resolved inventory discrepancies and maintained accurate stock levels.',
			'Maintained a zero-accident record, prioritising safety at all times.',
		],
	},
	{
		title: 'Skateboard Instructor',
		company_name: 'Self-employed',
		icon: helmet,
		iconBg: '#00817B',
		date: 'Jan 2021 - Feb 2022',
		points: [
			'Managed classes up to 20 students, providing instruction and guidance in skateboarding techniques.',
			"Developed individualised course plans tailored to each student's skill level and goals.",
			'Worked with high-school students in alternative learning streams, fostering a supportive and inclusive learning environment.',
			'Ensured the safety and well-being of students by creating a safe and welcoming environment.',
			'Handled administrative tasks such as accurately booking and following up with client appointments and producing receipts.',
		],
	},
	{
		title: 'Shift Supervisor',
		company_name: 'Starbucks',
		icon: starbucks,
		iconBg: '#326E36',
		date: 'Dec 2019 - Jul 2022',
		points: [
			'Fostered a positive work environment by enhancing employee performance and satisfaction through coaching, encouragement, and recognition.',
			'Proactively problem-solved and resolved issues during shifts, ensuring a smooth and enjoyable customer experience.',
			'Managed inventory efficiently, ensuring optimal stock levels and minimising shortages or excesses.',
			'Demonstrated exceptional customer service skills, resolving a wide range of issues promptly and thoughtfully to ensure customer satisfaction.',
			'Organised inventory and utilised various technologies to streamline operations and maintain accurate records.',
		],
	},
	{
		title: 'Shift Supervisor',
		company_name: 'Aux Vivres',
		icon: auxvivres,
		iconBg: '#EC3D38',
		date: 'Sept 2018 - Aug 2019',
		points: [
			'Proactively addressed and resolved challenges during shifts to maintain a smooth operation.',
			'Implemented effective inventory strategies to optimise stock levels and ensure timely product availability.',
			'Utilised Excel for accurate data entry and maintenance of inventory records.',
			'Created streamlined procedures to enhance operational efficiency and productivity.',
			'Effectively resolved customer service issues, ensuring customer satisfaction and loyalty.',
		],
	},
]

const projects = [
	{
		name: 'Entrepreneurial Hub',
		description:
			"Middle-earth's Entrepreneurial Hub, guided by Gandalf, inspires entrepreneurial success. Join us to unlock your business's potential in a world of magic and innovation.",
		tags: [
			{
				name: 'react',
				color: 'blue-text-gradient',
			},
			{
				name: 'jsx',
				color: 'green-text-gradient',
			},
		],
		image: gandalf,
		source_code_link: `${import.meta.env.VITE_GITHUB_ENTREPRENEURIAL_HUB_URL}`,
		gh_pages_link: `${import.meta.env.VITE_GH_PAGES_ENTREPRENEURIAL_HUB_URL}`,
	},
	{
		name: 'Cineverse',
		description:
			'Discover & Watch: Find movies, TV shows, and games, play trailers, and explore detailed info. Enjoy dark mode for the ultimate cinematic experience!',
		tags: [
			{
				name: 'react',
				color: 'blue-text-gradient',
			},
			{
				name: 'typescript',
				color: 'green-text-gradient',
			},
			{
				name: 'chakra ui',
				color: 'pink-text-gradient',
			},
		],
		image: cineverse,
		source_code_link: `${import.meta.env.VITE_GITHUB_CINEVERSE_URL}`,
		gh_pages_link: `${import.meta.env.VITE_GH_PAGES_CINEVERSE_URL}`,
	},
	// {
	//   name: "Lucky Shrub",
	//   description:
	//     "The Lucky Shrub website showcases a garden design firm based in Tucson, Arizona. It offers services in garden design, landscaping, and maintenance. The website presents their expertise in transforming spaces into beautiful and inviting gardens.",
	//   tags: [
	//     {
	//       name: "html",
	//       color: "blue-text-gradient",
	//     },
	//     {
	//       name: "css",
	//       color: "green-text-gradient",
	//     },
	//   ],
	//   image: luckyshrub,
	//   source_code_link: `${process.env.}`,
	// },
]

export { technologies, socials, experiences, projects }
