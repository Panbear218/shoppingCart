<script>
    import ShoppingList from "$lib/components/ShoppingList.svelte";
    

let data = null;
	
	function handleItemAdded(e) {
		data = e.detail;
		console.log(data);
	}

</script>

<div class="container">

	<ShoppingList on:itemAdded={handleItemAdded} />
	
	<p>Shopping: {data}</p>
</div>