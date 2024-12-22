<script>
  import "../app.css";
  let { children } = $props();
</script>

<svelte:head>
  <title>Xmas Quiz</title>
  <meta name="description" content="A quiz app for Christmas" />
</svelte:head>

<div class="h-screen max-w-screen overflow-x-hidden flex flex-col">
  <header
    class="flex flex-col justify-center items-center p-4 max-h-[12rem]"
  >
    <span class="text-7xl">
      🎄
    </span>
    <h1 class="text-2xl font-bold">Xmas Quiz</h1>
    <img src="/lights.gif" alt="Christmas lights" class="w-1/3 -mt-[3.6rem]" />
  </header>
  <main class="flex-1 p-4">
    {@render children()}
  </main>
  <footer class="flex justify-between items-center px-4">
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
