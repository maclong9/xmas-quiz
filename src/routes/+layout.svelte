<script>
  import { page } from "$app/stores";
  import { IconChristmasTree } from "@tabler/icons-svelte";
  import "../app.css";
  let { children } = $props();
</script>

<div class="h-screen max-h-screen max-w-screen overflow-hidden flex flex-col">
  <header class={`flex flex-col justify-center items-center p-4 ${$page.url.pathname === "/" ? "pt-36" : ""}`}>
    <IconChristmasTree class="w-16 h-16" />
    <h1 class="text-2xl font-bold">Xmas Quiz</h1>
  </header>
  <main class="flex-1 p-4">
    {@render children()}
  </main>
  <footer class="flex flex-col justify-center items-center p-4">
    <span class="text-xs text-neutral-400">
      © 2024 <a href="https://github.com/maclong9/xmas-quiz">Mac Long</a>
    </span>
  </footer>
</div>
