<script>
  import { page } from "$app/stores";
  import { IconChristmasTree } from "@tabler/icons-svelte";
  import "../app.css";
  let { children } = $props();
</script>

<svelte:head>
  <title>Xmas Quiz</title>
  <meta name="description" content="A quiz app for Christmas" />
</svelte:head>

<div class="h-screen max-h-screen max-w-screen overflow-hidden flex flex-col">
  <header
    class={`flex flex-col justify-center items-center p-4 ${$page.url.pathname === "/" ? "" : ""}`}
  >
    <IconChristmasTree class="w-16 h-16" />
    <h1 class="text-2xl font-bold">Xmas Quiz</h1>
  </header>
  <main class="flex-1 p-4">
    {@render children()}
  </main>
  <footer class="flex justify-between items-center p-4">
    <a
      href="https://github.com/maclong9/xmas-quiz"
      target="_blank"
      rel="noopener noreferrer"
      class="text-xs text-neutral-500 flex items-center space-x-0.5"
    >
      <span> Source Code </span>
    </a>
    <span class="text-xs text-neutral-500">
      <a
        href="https://github.com/maclong9"
        target="_blank"
        rel="noopener noreferrer"
      >
        Mac Long
      </a>
    </span>
  </footer>
</div>
