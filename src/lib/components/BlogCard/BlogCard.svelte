<script lang="ts">
	import Card from '../Card/Card.svelte';
	import CardTitle from '../Card/CardTitle.svelte';
	import CardLink from '../Card/CardLink.svelte';
	import CardDivider from '../Card/CardDivider.svelte';
	import ChipIcon from '../Chip/ChipIcon.svelte';
	import CardLogo from '../Card/CardLogo.svelte';
	import type { BlogPost } from '$lib/types';
	import { getAssetURL } from '$lib/data/assets';
	import { base } from '$app/paths';

	export let blogPost: BlogPost;
</script>

<Card color={blogPost.color} href={blogPost.link.to}>
	<CardLogo alt={blogPost.name} radius={'0'} size={40} src={getAssetURL(blogPost.logo)} />
	<div class="m-t-20px row justify-between items-center">
		<CardTitle title={blogPost.name} />
		<div class="row">
			<CardLink label={blogPost.link.label ?? ''} to={blogPost.link.to} />
		</div>
	</div>
	<CardDivider />
	<div class="col sm:h-100px md:h-160px">
		<p class="text-[0.9em] text-[var(--secondary-text)] m-t-20px m-b-40px flex-1 line-clamp-3">
			{blogPost.description}
		</p>
	</div>
	<CardDivider />
	<div class="row flex-wrap">
		{#each blogPost.skills as tech}
			<ChipIcon
				logo={getAssetURL(tech.logo)}
				name={tech.name}
				href={`${base}/skills/${tech.slug}`}
			/>
		{/each}
	</div>
</Card>
