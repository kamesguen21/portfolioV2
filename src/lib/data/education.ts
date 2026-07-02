import Assets from './assets';
import type { Education } from '../types';

export const items: Array<Education> = [
	{
		degree: 'Bachelor of Computer Science',
		description: 'The Bachelor of Computer Science program at ISITCOM provided a comprehensive foundation in computer science principles, including programming, algorithms, and data structures. The curriculum was designed to equip students with the skills needed to excel in the IT industry.',
		location: 'Tunisia',
		logo: Assets.Isiticom,
		name: 'Bachelor of Computer Science',
		organization: 'ISITCOM - Higher Institute of Computer Science and Communication Technologies',
		period: { from: new Date(2016, 9, 1), to: new Date(2019, 6, 1) },
		shortDescription: 'A comprehensive program covering fundamental and advanced topics in computer science.',
		slug: 'bachelor-computer-science',
		subjects: ['C', 'Algorithm', 'Algebra', 'Python', 'C++', 'Java', 'English']
	},
	{
		degree: 'Computer Engineering Degree',
		description: 'The Computer Engineering Degree at EPI - International Multidisciplinary School focused on advanced topics in computer engineering, including software development, system architecture, and network security. The program emphasized practical experience and real-world applications.',
		location: 'Tunisia',
		logo: Assets.EPI,
		name: 'Computer Engineering Degree',
		organization: 'EPI - International Multidisciplinary School',
		period: { from: new Date(2019, 9, 1), to: new Date(2022, 6, 1) },
		shortDescription: 'An advanced program focusing on software development, system architecture, and network security.',
		slug: 'computer-engineering-degree',
		subjects: ['Software Development', 'System Architecture', 'Network Security', 'Java', 'SQL', 'NoSQL']
	}
];



export const title = 'Education';
