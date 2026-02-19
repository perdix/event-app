<script>
    let { data } = $props();
</script>

<h1>Edit event</h1>

<form action="?/edit" method="POST">

      <div>
        <label for="name">Event name</label>
        <input type="text" id="name" name="name" required value={data.event.name}>
    </div>
    <div>
        <label for="description" >Event description</label>
        <textarea name="description" id="description" value={data.event.description}></textarea>
    </div>
    <div>
        <label for="startdate">Event start date</label>
        {data.event.startdate}
        <input type="date" id="startdate" name="startdate" value={data.event.startdate.toISOString().substring(0,10)}>
    </div>
    <div>
        <label for="starttime">Event start time</label>
        <input type="time" id="starttime" name="starttime" value={data.event.starttime}>
    </div>
    <div>
        <button type="submit">Update event</button>
    </div>


</form>