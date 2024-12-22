import Assets from './assets';
import { getSkills } from './skills';
import type { BlogPost } from '../types';

export const items: Array<BlogPost> = [{
	slug: 'eda',
	color: '#f50000',
	description: 'Discover how Event-Driven Architecture (EDA) can transform your system into a responsive, scalable, and maintainable powerhouse.',
	link: {
		to: 'https://medium.com/@medkhamesguen/embracing-event-driven-architecture-building-responsive-and-scalable-applications-96d7f4dabbbf',
		label: '',
		newTab: true
	},
	logo: Assets.Unknown,
	name: 'Embracing Event-Driven Architecture: Building Responsive and Scalable Applications',
	skills: getSkills('kafka')
}];


export const title = 'Blog';
