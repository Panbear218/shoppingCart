<script>
    import {itemStore} from '$lib/js/shoppingitem-store.js';
    import {page} from "$app/stores";

    $: item = $itemStore.find((a) => a.dexNumber == $page.params.dexNumber);

</script>

<svelte:head>
    <title>{item.name}</title>
</svelte:head>

{#if item}
    <img src={item.imageUrl} alt={item.name}/>
    <h2>{item.name}</h2>
    <p>{item.price}</p>
{:else}
<p>No item found with id = {$page.params.dexNumber}!</p>
{/if}

