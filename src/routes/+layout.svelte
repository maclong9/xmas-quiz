<script>
	import Snowfall from '$lib/components/Snowfall.svelte';
	import '../app.css';
	let { children } = $props();
</script>

<div class="bg-christmas flex h-screen max-w-full flex-col overflow-x-hidden text-white">
	<!-- Header -->
	<header class="flex max-h-[12rem] flex-col items-center justify-center p-4 pb-0">
		<span class="text-7xl"> 🎄 </span>
		<span class="text-2xl font-bold">Xmas Quiz</span>
		<img src="/lights.gif" alt="Christmas lights" class="-my-[3.6rem] w-1/3" />
	</header>

	<!-- Main Content -->
	<main class="flex-1 p-4">
		{@render children()}
	</main>

	<!-- Footer -->
	<footer class="flex items-center justify-between p-4 text-xs">
		<a href="https://github.com/maclong9/xmas-quiz" target="_blank" rel="noopener noreferrer">
			Source Code
		</a>
		<a href="https://github.com/maclong9" target="_blank" rel="noopener noreferrer">Mac Long</a>
	</footer>
	<Snowfall />
</div>
