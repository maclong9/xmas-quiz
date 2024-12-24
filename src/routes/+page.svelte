<script lang="ts">
	import { fade, fly, scale } from 'svelte/transition';
</script>

<div
	class="mx-auto flex max-w-2xl flex-col items-center justify-center px-4 py-8"
	in:fade={{ duration: 300 }}
>
	<div class="space-y-6 text-center" in:fly={{ y: 20, duration: 500, delay: 200 }}>
		<h1 class="mb-4 text-4xl font-bold">Welcome to the Xmas Quiz!</h1>

		<p class="mx-auto max-w-xl text-lg leading-relaxed">
			Filled with questions related to cats, Sabrina Carpenter (her music only), witches (actual
			witch stuff not film related ones) and Belarus, Enjoy!
		</p>

		<a href="/game" class="button" in:scale={{ duration: 400, delay: 500, start: 0.8 }}>
			Start Game
		</a>
	</div>
</div>
