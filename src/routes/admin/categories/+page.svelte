<script>
    let {data} = $props();
</script>

<div class="wrapper">
<h1>Manage my categories</h1>

<a href="/admin/category/new">
    <button>Add new category</button>
</a>

<main>

    {#each data.categories as category}

        <div class="event">
            <p>{category.name}</p>

            <div>
                <a href="/admin/category/{category.id}/edit">
                    <button>Edit</button>
                </a>
                <form action="?/delete" method="POST">
                    <input type="hidden" value={category.id} name="id">
                    <button type="submit">Delete</button>
                </form>
            </div>

        

        </div>

    {/each}

</main>

</div>
<style>
        .wrapper {
        display: flex;
        flex-direction: column;
        gap: 20px;
    }
    main {
        display: flex;
        flex-direction: column;
        gap: 10px;
    }
    .event {
        border: 1px solid black;
        padding: 5px;
        display: flex;
        justify-content: space-between;
    }
</style>