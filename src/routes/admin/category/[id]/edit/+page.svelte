<script>
    let { data } = $props();
</script>

<h1>Edit category</h1>

<form action="?/edit" method="POST">

      <div>
        <label for="name">Category name</label>
        <input type="text" id="name" name="name" required value={data.category.name}>
    </div>
    <div>
        <button type="submit">Update category</button>
    </div>


</form>