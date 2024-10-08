import Assets from './assets';
import { getSkills } from './skills';
import type { Project } from '../types';

export const items: Array<Project> = [
	{
		slug: 'ipcei',
		color: '#5e95e3',
		description: 'Developed an Order To Bill Open Source component using Spring Boot and React. The project focused on creating a scalable and efficient billing system.',
		shortDescription: 'Order To Bill Open Source component using Spring Boot and React.',
		links: [],
		logo: Assets.Unknown,
		name: 'IPCEI',
		period: {
			from: new Date(2021, 0, 1),
			to: new Date(2021, 11, 31)
		},
		skills: getSkills('springboot', 'reactjs', 'microservices', 'keycloak'),
		type: 'Open Source'
	},
	{
		slug: 'planet-tax-free-uae',
		color: '#5e95e3',
		description: 'Led the development of a tax registration and refund system for Planet Tax Free UAE. The project involved creating a robust and secure platform using Spring Boot, Angular, and Microfrontends.',
		shortDescription: 'Tax registration and refund system for Planet Tax Free UAE.',
		links: [],
		logo: Assets.Unknown,
		name: 'Planet Tax Free UAE',
		period: {
			from: new Date(2020, 6, 1),
			to: new Date(2021, 11, 31)
		},
		skills: getSkills('springboot', 'angular', 'microfrontends', 'keycloak'),
		type: 'Enterprise Application'
	},
	{
		slug: 'carrefour-tunisie',
		color: '#5e95e3',
		description: 'Developed an e-commerce website and order management system for Carrefour Tunisia. The project utilized Spring Boot, Angular, and Magento 2 to create a seamless shopping experience.',
		shortDescription: 'E-commerce website and order management system for Carrefour Tunisia.',
		links: [],
		logo: Assets.Unknown,
		name: 'Carrefour Tunisie',
		period: {
			from: new Date(2021, 0, 1),
			to: new Date(2022, 11, 31)
		},
		skills: getSkills('springboot', 'angular', 'magento2'),
		type: 'E-commerce'
	},
	{
		slug: 'ami-assurance-tunisie',
		color: '#5e95e3',
		description: 'Constructed an insurance subscription platform for AMI Assurance TN. The project involved developing a comprehensive system using Spring Boot, Angular, and Microservices.',
		shortDescription: 'Insurance subscription platform for AMI Assurance TN.',
		links: [],
		logo: Assets.Unknown,
		name: 'AMI Assurance Tunisie',
		period: {
			from: new Date(2020, 6, 1),
			to: new Date(2021, 11, 31)
		},
		skills: getSkills('springboot', 'angular', 'microservices'),
		type: 'Insurance Platform'
	},
	{
		slug: 'bridge-global-funding',
		color: '#5e95e3',
		description: 'Developed a fund-raising platform for Bridge Global Funding. The project focused on creating a secure and efficient platform using Spring Boot, Angular, and Microservices.',
		shortDescription: 'Fund-raising platform for Bridge Global Funding.',
		links: [],
		logo: Assets.Unknown,
		name: 'Bridge Global Funding',
		period: {
			from: new Date(2021, 0, 1),
			to: new Date(2022, 11, 31)
		},
		skills: getSkills('springboot', 'angular', 'microservices', 'keycloak'),
		type: 'Fund Raising'
	},
	{
		slug: 'veamly',
		color: '#5e95e3',
		description: 'Developed a digital wellbeing application called Veamly. The project aimed to improve digital wellbeing through a user-friendly platform built with Spring Boot and Microservices.',
		shortDescription: 'Digital wellbeing application called Veamly.',
		links: [],
		logo: Assets.Unknown,
		name: 'Veamly',
		period: {
			from: new Date(2020, 6, 1),
			to: new Date(2021, 11, 31)
		},
		skills: getSkills('springboot', 'microservices', 'keycloak'),
		type: 'Wellbeing Application'
	}
];


export const title = 'Projects';
