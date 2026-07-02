<script lang="ts">
	import Card from '../Card/Card.svelte';
	import CardTitle from '../Card/CardTitle.svelte';
	import CardLink from '../Card/CardLink.svelte';
	import CardDivider from '../Card/CardDivider.svelte';
	import ChipIcon from '../Chip/ChipIcon.svelte';
	import CardLogo from '../Card/CardLogo.svelte';
	import type { Certificate } from '$lib/types';
	import { getAssetURL } from '$lib/data/assets';
	import { base } from '$app/paths';
	import Chip from '@components/Chip/Chip.svelte';

	export let certificate: Certificate;
</script>

<Card color={certificate.color}>
	<CardLogo alt={certificate.name} radius={'0'} size={40} src={getAssetURL(certificate.logo)} />
	<div class="m-t-20px row justify-between items-center">
		<CardTitle title={certificate.name} />
		<div class="row">
			{#if certificate.link}
				<CardLink label={certificate.link?.label ?? ''} to={certificate.link.to} />
			{/if}

		</div>
	</div>
	<CardDivider />
	<div class="col sm:h-100px md:h-160px">
		<p class="text-[0.9em] text-[var(--secondary-text)] m-t-20px m-b-40px flex-1 line-clamp-3">
			{certificate.description}
		</p>
	</div>
	<CardDivider />
	<div class="row flex-wrap">
		{#if certificate.download}
			<a href={certificate.download.to} target="_blank" rel="noopener noreferrer">
				<Chip size={'1.25em'}>Download</Chip>
			</a>
		{/if}
	</div>
</Card>
