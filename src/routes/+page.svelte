<script lang="ts">
  import { fade, fly, scale } from "svelte/transition";
</script>

<div
  class="flex flex-col items-center justify-center max-w-2xl mx-auto px-4 py-8"
  in:fade={{ duration: 300 }}
>
  <div
    class="text-center space-y-6"
    in:fly={{ y: 20, duration: 500, delay: 200 }}
  >
    <h1 class="text-4xl font-bold mb-4">Yana's Version!</h1>

    <p class="text-lg text-gray-600 leading-relaxed max-w-xl mx-auto">
      Filled with questions related to cats, Sabrina Carpenter, witches and Belarus, Enjoy!
    </p>

    <a
      href="/game"
      class="button"
      in:scale={{ duration: 400, delay: 500, start: 0.8 }}
    >
      Start Game
    </a>
  </div>
</div>
