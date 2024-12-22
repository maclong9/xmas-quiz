<script lang="ts">
  import { IconBrain } from "@tabler/icons-svelte";
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
    <div class="flex justify-center">
      <IconBrain size={56} class="text-primary" />
    </div>

    <h1 class="text-4xl font-bold mb-4">Welcome to the Xmas Quiz!</h1>

    <p class="text-lg text-gray-600 leading-relaxed max-w-xl mx-auto">
      To save the time we spend every year searching through all the different
      sites and packs of cards, I have created a quiz app that has a great
      selection of questions for everyone to enjoy!
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
