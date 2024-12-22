<script lang="ts">
  import {
      questions as initialQuestions,
      shuffleArray,
  } from "$lib/questions.js";
  import { IconCalendarQuestion, IconTrophy } from "@tabler/icons-svelte";

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
  >
    <h1 class="text-7xl font-bold">Game Complete</h1>
    <p class="text-2xl font-semibold">Your final score is: {score}</p>
    <a href="/" class="button">Play Again</a>
  </div>
{:else}
  <div class="p-4 h-full">
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
      <div class="w-full text-sm flex items-center justify-between pt-10">
        <span class="font-bold">
          {currentQuestion.category}
        </span>
        <span class="font-bold">
          {currentQuestion.difficulty}
        </span>
      </div>

      <div class="flex flex-col text-center">
        <h2 class="text-3xl font-bold">{currentQuestion.question}?</h2>
      </div>

      <div class="mt-4 min-h-[272px] flex flex-col justify-end">
        {#each answers as answer}
          <button
            class={selectedAnswer === answer
              ? answer === currentQuestion.correctAnswer
                ? "bg-green-500"
                : "bg-red-500"
              : "border-gray-300"}
            onclick={() => handleAnswer(answer)}
            disabled={selectedAnswer !== null}
          >
            {answer.toString().charAt(0).toUpperCase() +
              answer.toString().slice(1)}
          </button>
        {/each}
      </div>
    </div>
  </div>
{/if}
