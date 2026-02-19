<script>
	import favicon from '$lib/assets/favicon.svg';
	import '../app.css';
	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

{@render children()}

<footer>
	<div>
		<h2>Home</h2>
		<a href="/">Startpage</a>
	</div>

	<div>
		<h2>Contact</h2>
		<a href="mailto:paulopitz@htl-shkoder.com">Write a mail!</a>
	</div>
	<div>
		<h2>Admin</h2>
		<a href="/admin">Go to admin area</a>
	</div>
</footer>


<style>
	footer {
		display: flex;
		justify-content: space-evenly;
		padding: 50px;
		background-color: lightslategrey;
		font-size: 20px;
	}
	a {
		color: lightskyblue;
	}
	h2, a {
        text-align: center;
    }
</style>