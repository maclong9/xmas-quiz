<script lang="ts">
  import {
      questions as initialQuestions,
      shuffleArray,
  } from "$lib/questions.js";
  import { IconCalendarQuestion, IconTrophy } from "@tabler/icons-svelte";
  import { flip } from "svelte/animate";
  import { fade, fly, scale } from "svelte/transition";

  // State
  let questions = $state(shuffleArray(initialQuestions));
  let currentQuestionIndex = $state(0);
  let score = $state(0);
  let gameOver = $state(false);
  let selectedAnswer = $state(null);

  // Computed values
  let currentQuestion = $derived(questions[currentQuestionIndex]);
  let answers = $derived(
    [
      currentQuestion?.correctAnswer,
      ...currentQuestion?.incorrectAnswers,
    ].sort(),
  );

  // Methods
  function handleAnswer(answer: null): void {
    selectedAnswer = answer;
    const isCorrect = answer === currentQuestion.correctAnswer;

    if (isCorrect) {
      let points = 0;
      switch (currentQuestion.difficulty) {
        case "Easy":
          points = 1;
          break;
        case "Medium":
          points = 2;
          break;
        case "Hard":
          points = 3;
          break;
      }
      score += points;
    }

    setTimeout(() => {
      const nextQuestionIndex = currentQuestionIndex + 1;
      if (nextQuestionIndex < questions.length) {
        currentQuestionIndex = nextQuestionIndex;
        selectedAnswer = null;
      } else {
        gameOver = true;
      }
    }, 1000);
  }
</script>

{#if gameOver}
  <div
    class="p-4 space-y-16 flex text-center flex-col justify-center items-center"
    in:fly={{ y: 50, duration: 500 }}
    out:fade
  >
    <h1 class="text-7xl font-bold" in:scale={{ delay: 300, duration: 500 }}>
      Game Complete
    </h1>
    <p class="text-2xl font-semibold" in:scale={{ delay: 600, duration: 500 }}>
      Your final score is: {score}
    </p>
    <a
      href="/"
      class="button"
      in:scale={{ delay: 900, duration: 500 }}
      >Play Again</a
    >
  </div>
{:else}
  <div class="p-4 h-full" in:fade>
    <div class="flex justify-between">
      <div class="flex items-center font-bold text-lg">
        <IconCalendarQuestion class="mr-0.5" />
        {currentQuestionIndex + 1}/{questions.length}
      </div>
      <div class="flex items-center font-bold text-lg">
        <IconTrophy class="mr-0.5" />
        {score}
      </div>
    </div>

    <div class="flex flex-col h-full justify-between">
      <div
        class="w-full text-sm flex items-center justify-between pt-10"
        in:fly={{ x: -50, duration: 500 }}
      >
        <span class="font-bold">
          {currentQuestion.category}
        </span>
        <span class="font-bold">
          {currentQuestion.difficulty}
        </span>
      </div>

      <div class="flex flex-col text-center">
        <h2
          class="text-3xl font-bold"
          in:fly={{ y: 20, duration: 500, delay: 200 }}
        >
          {currentQuestion.question}?
        </h2>
      </div>

      <div class="mt-4 min-h-[272px] flex flex-col justify-end">
        {#each answers as answer, i (answer)}
          <button
            class={`${
              selectedAnswer === answer
                ? answer === currentQuestion.correctAnswer
                  ? "bg-green-500"
                  : "bg-red-500"
                : "border-gray-300"
            } ${
              answer === currentQuestion.correctAnswer ? "border-green-500" : ""
            }`}
            onclick={() => handleAnswer(answer)}
            disabled={selectedAnswer !== null}
            in:fly={{ y: 20, duration: 500, delay: 300 + i * 100 }}
            animate:flip
          >
            {answer.toString().charAt(0).toUpperCase() +
              answer.toString().slice(1)}
          </button>
        {/each}
      </div>
    </div>
  </div>
{/if}