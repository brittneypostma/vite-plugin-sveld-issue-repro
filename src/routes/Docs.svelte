<script lang="ts">
	export let component;
</script>

<h2 class="fizz-heading-2">Props Table</h2>
<table class="fizz-table">
	<thead>
		<tr>
			<th>Name</th>
			<th>Type</th>
			<th>Default</th>
			<th>Description</th>
		</tr>
	</thead>
	<tbody>
		{#each component.props as prop}
			<tr>
				<td>{prop.name}</td>
				<td><code>{prop.type?.replace(/'/g, '"')}</code></td>
				{#if prop.value}
					<td><code>{prop.value?.replace(/'/g, '"') ?? ''}</code></td>
				{/if}
				{#if prop.description}
					<td>{@html prop.description ? prop.description : ''}</td>
				{/if}
			</tr>
		{/each}
	</tbody>
</table>
