<script>
   let { children } = $props();
</script>

<header>
    <h1>Admin Dashboard</h1>
</header>

<main>
{@render children()}
</main>

<style>
    main {
        padding:30px;
    }
    header {
        background-color: lightslategray;
        padding: 50px;
        text-align: center;
    }

</style>