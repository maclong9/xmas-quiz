<script lang="ts">
	import { fade, fly, scale } from 'svelte/transition';
</script>

<div
	class="mx-auto flex max-w-2xl flex-col items-center justify-center px-4 py-8"
	in:fade={{ duration: 300 }}
>
	<div class="space-y-6 text-center" in:fly={{ y: 20, duration: 500, delay: 200 }}>
		<h1 class="mb-4 text-4xl font-bold">Welcome to the Xmas Quiz!</h1>

		<p class="mx-auto max-w-xl text-lg leading-relaxed text-gray-600">
			To save the time we spend every year searching through all the different sites and packs of
			cards, I have created a quiz app that has a great selection of questions for everyone to
			enjoy!
		</p>

		<a href="/game" class="button" in:scale={{ duration: 400, delay: 500, start: 0.8 }}>
			Start Game
		</a>
	</div>
</div>
