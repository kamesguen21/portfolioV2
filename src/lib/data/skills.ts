import Assets from './assets';
import type { Skill, SkillCategory } from '../types';
import { omit, type StringWithAutoComplete } from '@riadh-adrani/utils';

const defineSkillCategory = <S extends string>(data: SkillCategory<S>): SkillCategory<S> => data;

const categories = [defineSkillCategory({
	name: 'Programming Languages',
	slug: 'pro-lang'
}), defineSkillCategory({ name: 'Frameworks', slug: 'framework' }), defineSkillCategory({
	name: 'Libraries',
	slug: 'library'
}), defineSkillCategory({ name: 'Langauges', slug: 'lang' }), defineSkillCategory({
	name: 'Databases',
	slug: 'db'
}), defineSkillCategory({ name: 'ORMs', slug: 'orm' }), defineSkillCategory({
	name: 'DevOps',
	slug: 'devops'
}), defineSkillCategory({ name: 'Testing', slug: 'test' }), defineSkillCategory({
	name: 'Dev Tools',
	slug: 'devtools'
}), defineSkillCategory({ name: 'Markup & Style', slug: 'markup-style' }), defineSkillCategory({
	name: 'Design',
	slug: 'design'
}), defineSkillCategory({ name: 'Soft Skills', slug: 'soft' })] as const;

const defineSkill = <S extends string>(skill: Omit<Skill<S>, 'category'> & {
	category?: StringWithAutoComplete<(typeof categories)[number]['slug']>;
}): Skill<S> => {
	const out: Skill<S> = omit(skill, 'category');

	if (skill.category) {
		out.category = categories.find((it) => it.slug === skill.category);
	}

	return out;
};

export const items = [defineSkill({
	slug: 'java',
	color: 'blue',
	description: 'Java is a versatile and powerful programming language used for building high-performance applications. It is known for its portability across platforms and is widely used in enterprise environments.',
	logo: Assets.Java,
	name: 'Java',
	category: 'pro-lang'
}), defineSkill({
	slug: 'javascript',
	color: 'yellow',
	description: 'JavaScript is a dynamic programming language that is essential for creating interactive web applications. It is widely used for both client-side and server-side development.',
	logo: Assets.JavaScript,
	name: 'JavaScript',
	category: 'pro-lang'
}), defineSkill({
	slug: 'typescript',
	color: 'blue',
	description: 'TypeScript is a statically typed superset of JavaScript that adds optional static typing to the language. It is designed for the development of large applications and transcompiles to JavaScript.',
	logo: Assets.TypeScript,
	name: 'TypeScript',
	category: 'pro-lang'
}), defineSkill({
	slug: 'php',
	color: 'purple',
	description: 'PHP is a popular server-side scripting language designed for web development. It is known for its ease of use and ability to integrate with various databases.',
	logo: Assets.PHP,
	name: 'PHP',
	category: 'pro-lang'
}), defineSkill({
	slug: 'springboot',
	color: 'green',
	description: 'Spring Boot is an open-source Java-based framework used to create stand-alone, production-grade Spring-based applications. It simplifies the development process by providing a comprehensive infrastructure.',
	logo: Assets.SpringBoot,
	name: 'Spring Boot',
	category: 'framework'
}), defineSkill({
	slug: 'magento2',
	color: 'orange',
	description: 'Magento 2 is an open-source e-commerce platform written in PHP. It provides a flexible shopping cart system and control over the look, content, and functionality of an online store.',
	logo: Assets.Magento2,
	name: 'Magento 2',
	category: 'platform'
}), defineSkill({
	slug: 'angular',
	color: 'red',
	description: 'Angular is a platform and framework for building single-page client applications using HTML and TypeScript. It is maintained by Google and offers a robust set of tools for web development.',
	logo: Assets.Angular,
	name: 'Angular',
	category: 'framework'
}), defineSkill({
	slug: 'expressjs',
	color: 'black',
	description: 'Express.js is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications. It is known for its simplicity and performance.',
	logo: Assets.ExpressJs,
	name: 'Express.js',
	category: 'framework'
}), defineSkill({
	slug: 'reactjs',
	color: 'blue',
	description: 'React.js is a JavaScript library for building user interfaces. It allows developers to create large web applications that can update and render efficiently in response to data changes.',
	logo: Assets.ReactJs,
	name: 'React.js',
	category: 'library'
}), defineSkill({
	slug: 'astrojs',
	color: 'purple',
	description: 'Astro.js is a modern static site builder that allows developers to build fast, optimized websites with a focus on performance and simplicity. It supports multiple front-end frameworks.',
	logo: Assets.AstroJs,
	name: 'Astro.js',
	category: 'framework'
}), defineSkill({
	slug: 'jquery',
	color: 'blue',
	description: 'jQuery is a fast, small, and feature-rich JavaScript library. It makes things like HTML document traversal and manipulation, event handling, and animation much simpler with an easy-to-use API.',
	logo: Assets.JQuery,
	name: 'jQuery',
	category: 'library'
}), defineSkill({
	slug: 'aws',
	color: 'orange',
	description: 'Amazon Web Services (AWS) is a comprehensive and widely adopted cloud platform, offering over 200 fully-featured services from data centers globally. It is used for computing power, storage, and other functionalities.',
	logo: Assets.AWS,
	name: 'AWS',
	category: 'cloud'
}), defineSkill({
	slug: 'azure',
	color: 'blue',
	description: 'Microsoft Azure is a cloud computing service created by Microsoft for building, testing, deploying, and managing applications and services through Microsoft-managed data centers.',
	logo: Assets.Azure,
	name: 'Azure',
	category: 'cloud'
}), defineSkill({
	slug: 'kubernetes',
	color: 'blue',
	description: 'Kubernetes is an open-source container orchestration platform that automates the deployment, scaling, and management of containerized applications. It is known for its robustness and scalability.',
	logo: Assets.Kubernetes,
	name: 'Kubernetes',
	category: 'container'
}), defineSkill({
	slug: 'serverless',
	color: 'purple',
	description: 'Serverless is a cloud computing execution model where the cloud provider dynamically manages the allocation and provisioning of servers. It allows developers to build and run applications without managing infrastructure.',
	logo: Assets.Serverless,
	name: 'Serverless',
	category: 'cloud'
}), defineSkill({
	slug: 'docker',
	color: 'blue',
	description: 'Docker is a set of platform-as-a-service products that use OS-level virtualization to deliver software in packages called containers. It simplifies the development and deployment of applications.',
	logo: Assets.Docker,
	name: 'Docker',
	category: 'container'
}), defineSkill({
	slug: 'git',
	color: 'red',
	description: 'Git is a distributed version control system designed to handle everything from small to very large projects with speed and efficiency. It is widely used for source code management in software development.',
	logo: Assets.Git,
	name: 'Git',
	category: 'tool'
}), defineSkill({
	slug: 'kafka',
	color: 'black',
	description: 'Apache Kafka is a distributed event streaming platform capable of handling trillions of events a day. It is used for building real-time data pipelines and streaming applications.',
	logo: Assets.Kafka,
	name: 'Kafka',
	category: 'tool'
}), defineSkill({
	slug: 'sql',
	color: 'blue',
	description: 'SQL (Structured Query Language) is a standard programming language for managing and manipulating relational databases. It is used for querying and editing information stored in a database.',
	logo: Assets.SQL,
	name: 'SQL',
	category: 'database'
}), defineSkill({
	slug: 'nosql',
	color: 'green',
	description: 'NoSQL databases provide a mechanism for storage and retrieval of data that is modeled in means other than the tabular relations used in relational databases. They are used for large-scale data storage and real-time web applications.',
	logo: Assets.NOSQL,
	name: 'NoSQL',
	category: 'database'
}), defineSkill({
	slug: 'camunda',
	color: 'blue',
	description: 'Camunda is an open-source platform for workflow and business process automation. It provides tools for modeling, executing, and monitoring business processes.',
	logo: Assets.Camunda,
	name: 'Camunda',
	category: 'tool'
}), defineSkill({
	slug: 'jhipster',
	color: 'blue',
	description: 'JHipster is a development platform to generate, develop, and deploy Spring Boot + Angular/React/Vue web applications and Spring microservices. It simplifies the development of modern web applications.',
	logo: Assets.Jhipster,
	name: 'JHipster',
	category: 'tool'
}), defineSkill({
	slug: 'keycloak',
	color: 'red',
	description: 'Keycloak is an open-source identity and access management solution aimed at modern applications and services. It provides single sign-on, identity brokering, and user federation.',
	logo: Assets.Keycloak,
	name: 'Keycloak',
	category: 'tool'
})] as const;

export const title = 'Skills';

export const getSkills = (...slugs: Array<StringWithAutoComplete<(typeof items)[number]['slug']>>): Array<Skill> => items.filter((it) => slugs.includes(it.slug));

export const groupByCategory = (query: string): Array<{ category: SkillCategory; items: Array<Skill> }> => {
	const out: ReturnType<typeof groupByCategory> = [];

	const others: Array<Skill> = [];

	items.forEach((item) => {
		if (query.trim() && !item.name.toLowerCase().includes(query.trim().toLowerCase())) return;

		// push to others if item does not have a category
		if (!item.category) {
			others.push(item);
			return;
		}

		// check if category exists
		let category = out.find((it) => it.category.slug === item.category?.slug);

		if (!category) {
			category = { items: [], category: item.category };

			out.push(category);
		}

		category.items.push(item);
	});

	if (others.length !== 0) {
		out.push({ category: { name: 'Others', slug: 'others' }, items: others });
	}

	return out;
};
