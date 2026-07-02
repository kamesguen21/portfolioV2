<script lang="ts">
	import Carrousel from '$lib/components/Carrousel/Carrousel.svelte';
	import Icon from '$lib/components/Icon/Icon.svelte';
	import MainTitle from '$lib/components/MainTitle/MainTitle.svelte';
	import { titleSuffix } from '@data/app';
	import { description, lastName, links, name, skills, title } from '@data/home';
	import { items as skillsItems } from '@data/skills';
	import { useTitle } from '$lib/utils/helpers';
	import { isBlank } from '@riadh-adrani/utils';
	import { getPlatfromIcon } from '$lib/utils';
	import MediumIcon from '@components/Icon/MediumIcon.svelte';
	import { resumeLink } from '@data/resume';
	import Chip from '@components/Chip/Chip.svelte';

	// Calculate the number of years since 2019
	const currentYear = new Date().getFullYear();
	const yearsOfExperience = Math.round(currentYear - 2019);

	// Replace {yearsOfExperience} in the description
	const updatedDescription = description.replace('{yearsOfExperience}', yearsOfExperience.toString());

	const isEmail = (email: string): boolean => {
		const reg =
			/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

		return !isBlank(email) && reg.test(email);
	};
</script>

<svelte:head>
	<title>{useTitle(title, titleSuffix)}</title>
</svelte:head>

<div
	class="col self-center flex-1 md:flex-row md:slef-stretch justify-center lg:justify-between items-center p-y-0px p-x-10px"
>
	<div class="md:flex-1 gap-10px">
		<MainTitle classes="md:text-left">{name} {lastName},</MainTitle>
		<p class="text-[var(--tertiary-text)] text-center md:text-left text-[1.2em] font-extralight">
			<b>Senior Software Engineer</b> with proven experience spanning more than&nbsp;{yearsOfExperience.toString()}
			&nbsp;
			years in the fintech and telecommunications
			sectors, building and supporting high performance microservice
			architectures for insurance, financial and telecommunications
			companies. With proven success in <b>Tech Lead</b> and <b>Team Lead</b> roles, with a passion for leveraging
			technology and continuous learning to
			deliver scalable, effective solutions.
			<a href={resumeLink} download target="_blank" rel="noopener noreferrer">
				<Chip size={'0.5em'}>Download Resume</Chip>
			</a>

		</p>
		<div class="row justify-center md:justify-start p-y-15px p-x-0px gap-2">
			{#each links as link}
				<a
					class="decoration-none"
					href={`${isEmail(link.link) ? 'mailto:' : ''}${link.link}`}
					target="_blank"
					rel="noreferrer"
				>
					<Icon icon={getPlatfromIcon(link.platform)} color={'var(--accent-text)'} size={'20px'} />
				</a>
			{/each}
			<MediumIcon></MediumIcon>
		</div>
	</div>
	<Carrousel items={skills ?? skillsItems} />
</div>
