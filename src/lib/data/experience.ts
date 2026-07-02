import Assets from './assets';
import { getSkills } from './skills';
import { ContractType, type Experience } from '../types';

export const items: Array<Experience> = [
	{
		slug: 'ctw',
		company: 'Critical TechWorks',
		description: 'Developing and maintaining cloud-native automotive applications for BMW manufacturing plants, contributing to scalable microservices and modern web applications that support plant management and digital manufacturing initiatives. Collaborating in Scrum teams to design, develop, test, and deploy high-quality software using modern Java and cloud technologies.',
		contract: ContractType.Contract,
		type: 'Software Development',
		location: 'Lisbon, Portugal',
		period: { from: new Date(2026, 1, 1) },
		skills: getSkills(
			'java',
			'quarkus',
			'angular',
			'typescript',
			'microservices',
			'azure',
			'kubernetes',
			'docker',
			'git',
			'rest'
		),
		name: 'Senior Software Engineer',
		color: 'blue',
		links: [],
		logo: Assets.CriticalTechWorks,
		shortDescription: 'Developing cloud-native automotive applications for BMW manufacturing plants using Quarkus, Angular, Azure, and Kubernetes.'
	},
	{
		slug: 'sofrecom',
		company: 'Sofrecom Tunisia',
		description: 'Collaborated on a multi-team high-performing microservice project using the latest web technologies, ensuring scalability, reliability, and optimal performance while adhering to best practices and Agile methodologies.',
		contract: ContractType.FullTime,
		type: 'Software Development',
		location: 'Tunis, Tunisia',
		period: { from: new Date(2024, 0, 1) },
		skills: getSkills('java', 'springboot', 'microservices', 'angular', 'reactjs', 'typescript', 'docker', 'kubernetes', 'git', 'aws', 'azure'),
		name: 'Senior Software Engineer',
		color: 'red',
		links: [],
		logo: Assets.Sofrecom,
		shortDescription: 'Collaborated on a multi-team high-performing microservice project using the latest web technologies.'
	},
	{
		slug: 'satoripop',
		company: 'Satoripop Tunisia',
		description: 'Led the development of various projects including a sophisticated tax registration system, an insurance subscription application, and an e-commerce solution for Carrefour Tunisia. Engaged in every stage of the software development life cycle and mentored junior developers.',
		contract: ContractType.FullTime,
		type: 'Software Development',
		location: 'Sousse, Tunisia',
		period: { from: new Date(2020, 6, 1), to: new Date(2023, 11, 31) },
		skills: getSkills('java', 'springboot', 'angular', 'typescript', 'microservices', 'docker', 'kubernetes', 'git', 'aws', 'azure', 'magento2', 'sql', 'nosql'),
		name: 'Full Stack Web Developer',
		color: 'yellow',
		links: [],
		logo: Assets.Satoripop,
		shortDescription: 'Led the development of various projects and engaged in every stage of the software development life cycle.'
	},
	{
		slug: 'apeiron',
		company: 'Apeiron Technologies',
		description: 'Crafted high-performing and user-focused websites, precisely tailored to meet the organization\'s business objectives.',
		contract: ContractType.FullTime,
		type: 'Software Development',
		location: 'Sousse Governorate, Tunisia',
		period: { from: new Date(2019, 6, 1), to: new Date(2020, 5, 30) },
		skills: getSkills('javascript', 'php', 'html', 'css', 'jquery', 'reactjs', 'angular', 'typescript'),
		name: 'Web Developer',
		color: 'purple',
		links: [],
		logo: Assets.Apeiron,
		shortDescription: 'Crafted high-performing and user-focused websites tailored to meet business objectives.'
	},
];


export const title = 'Experience';
