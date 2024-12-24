<script lang="ts">
	import { fade, fly, scale } from 'svelte/transition';
</script>

<div
	class="mx-auto flex max-w-2xl flex-col items-center justify-center px-4 py-8"
	in:fade={{ duration: 300 }}
>
<<<<<<< HEAD
  <div
    class="text-center space-y-6"
    in:fly={{ y: 20, duration: 500, delay: 200 }}
  >
    <h1 class="text-4xl font-bold mb-4">Yana's Version!</h1>

    <p class="text-lg text-gray-600 leading-relaxed max-w-xl mx-auto">
      Filled with questions related to cats, Sabrina Carpenter, witches and Belarus, Enjoy!
    </p>
=======
	<div class="space-y-6 text-center" in:fly={{ y: 20, duration: 500, delay: 200 }}>
		<h1 class="mb-4 text-4xl font-bold">Welcome to the Xmas Quiz!</h1>

		<p class="mx-auto max-w-xl text-lg leading-relaxed text-gray-600">
			To save the time we spend every year searching through all the different sites and packs of
			cards, I have created a quiz app that has a great selection of questions for everyone to
			enjoy!
		</p>
>>>>>>> 9cdb566ad5b4c5a348638d3be144a18b44c802fc

		<a href="/game" class="button" in:scale={{ duration: 400, delay: 500, start: 0.8 }}>
			Start Game
		</a>
	</div>
</div>
