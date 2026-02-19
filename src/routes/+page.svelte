<script>
    let { data } = $props();
</script>

<header>
    <h1>Events in Shkodra</h1>
</header>


<main>
{#each data.events as event}
    <a href={"/event/" + event.id}>
        <h2>{event.name} </h2>
        <p>{event.description} </p>
        <p>{event.category_name} </p>
    </a>
{/each}
</main>


<style>
    main {
        display: flex;
        flex-direction: column;
        gap: 20px;
        padding: 50px;
    }
    a {
        text-decoration: none;
        color: black;
        padding: 30px;
        background-color: lightslategray;
        border-radius: 20px;
    }
    a:hover {
        background-color: lightskyblue;
    }

header {
    margin: 100px;
}
h1 {
    text-align: center;
    font-size: 70px;
}
p {
    margin:0;
}
h2 {
    margin:0;
}
</style>