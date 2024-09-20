<script>
    import {itemStore} from '$lib/js/shoppingitem-store.js';
    import {page} from '$app/stores';
    
    import {createEventDispatcher} from "svelte";

    const dispatch = createEventDispatcher();


    function handleClick(shoppingItem) {
        dispatch("itemAdded", (shoppingItem.name));
    }

</script>

<div>
    <ul>
        {#each $itemStore as shoppingItem (shoppingItem.dexNumber)}
            <li class:active={$page.url.pathname === `/products/${shoppingItem.dexNumber}`}>
                <a href={`/products/${shoppingItem.dexNumber}`}>{shoppingItem.name}</a> 
                
                    <button on:click={() => handleClick(shoppingItem)}>Add to shoppingcart</button>
          
            </li>
        {/each}
    </ul>
</div>

