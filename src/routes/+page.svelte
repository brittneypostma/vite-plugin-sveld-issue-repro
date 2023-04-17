<script>
	import Docs from './Docs.svelte';
	import { Breadcrumbs } from '@getprovi/fizz-components';
	import BreadCrumbsDocs from '../../node_modules/@getprovi/fizz-components/dist/components/Breadcrumbs/Breadcrumbs.svelte?raw&sveld';
	import { Text } from '@getprovi/fizz-components';
</script>

<Text as="h1" size="h1">Breadcrumbs</Text>

<Docs component={BreadCrumbsDocs} />

<Text as="h2" size="h2">Default</Text>
<Breadcrumbs
	links={[
		{ href: '#', label: 'Home' },
		{ href: '#', label: 'Beer & Hard Seltzer' },
		{ href: '#', label: 'Belgian-Style Ales' },
		{ href: '#', label: 'Belgian Pale Ale' },
		{ label: 'Location' }
	]}
/>
