<script>
    let { data } = $props();
</script>


<main>



<h1>{data.event.name}</h1>

<h2>{data.event.description}</h2>

<h2>📅 {new Date(data.event.startdate).toLocaleDateString()} ⏱️ {data.event.starttime}</h2>

</main>


<style>
    h1 {
        font-size: 40px; 
       
    }
    main {
         text-align: center;
        padding: 150px;
        display: flex;
        flex-direction: column;
        gap: 30px;
        background-color: lightskyblue
    }
</style>