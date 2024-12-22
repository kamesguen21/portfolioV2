import { Platform } from '$lib/types';
import { getSkills } from './skills';

export const title = 'Home';

export const name = 'Med khames';

export const lastName = 'Guen';

export const description = 'Senior Software Engineer with proven experience spanning more than {yearsOfExperience} years of experience in the IT industry, including work on fintech projects for insurance and financial institutions. I have a strong background in developing high-performing microservice systems and have served as both a tech lead and team lead. My passion for the IT industry drives my commitment to continuous learning and innovation';

export const links: Array<{ platform: Platform; link: string }> = [{
	platform: Platform.GitHub, link: 'https://github.com/kamesguen21'
}, {
	platform: Platform.Linkedin, link: 'https://www.linkedin.com/in/med-khames-guen/'
}, {
	platform: Platform.StackOverflow, link: 'https://stackoverflow.com/users/8879397/med-kg'
}, {
	platform: Platform.Email, link: 'medkhamesguen@gmail.com'
}];

export const skills = getSkills('java', 'javascript', 'typescript', 'php', 'springboot', 'magento2', 'angular', 'expressjs', 'reactjs', 'astrojs', 'jquery', 'aws', 'azure', 'kubernetes', 'serverless', 'docker', 'git', 'kafka', 'sql', 'nosql', 'camunda', 'jhipster', 'keycloak');
