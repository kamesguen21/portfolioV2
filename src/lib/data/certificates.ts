import Assets from './assets';
import { getSkills } from './skills';
import type { Certificate } from '../types';
import { base } from '$app/paths';

export const ocpLink = `${base}/uploads/OCPJSE11.jpg`;
export const toeicLink = `${base}/uploads/toiec.jpeg`;
export const ecoDeseinLink = `${base}/uploads/toiec.jpeg`;

export const items: Array<Certificate> = [{
	slug: 'ocp',
	color: '#0045f5',
	description: 'Official certification by Oracle that validates advanced skills and expertise in Java SE 11 programming, including core APIs, object-oriented principles, and advanced features.',
	link: {
		to: 'https://catalog-education.oracle.com/ords/certview/sharebadge?id=76AE60FAE6ABB2260246217FB836526D12B6E50CE943BD5FF7F0000CB25B0BE6',
		label: '',
		newTab: true
	},
	download: {
		to: ocpLink, label: ''
	},
	logo: Assets.Java,
	name: 'Oracle Certified Professional: Java SE 11 Developer',
	skills: getSkills('java')
}, {
	slug: 'toeic',
	color: '#f50000',
	description: 'Internationally recognized certification demonstrating a high level of English proficiency, particularly in listening and reading comprehension for professional environments.',
	link: {
		to: 'https://www.ets.org/toeic.html', label: '', newTab: true
	},
	download: {
		to: toeicLink, label: '',
	},
	logo: Assets.Toeic,
	name: 'TOEIC Certificate of Achievement (Score: 920)'
}, {
	slug: 'eco-design',
	color: '#c800f5',
	description: 'Certification focusing on eco-design principles, emphasizing sustainable development practices and environmentally friendly product lifecycle management.',
	logo: Assets.Eco,
	name: 'Eco-design Certificate'
}];


export const title = 'Certificates';
