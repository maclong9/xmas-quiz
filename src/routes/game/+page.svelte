<script lang="ts">
  import {
      questions as initialQuestions,
      shuffleArray,

      type Question
  } from "$lib/questions.js";
  import { flip } from "svelte/animate";
  import { fade, fly, scale } from "svelte/transition";

  let {
    questions,
    currentQuestionIndex,
    score,
    gameOver,
    selectedAnswer,
    questionAnswered,
  } = $state({
    questions: shuffleArray(initialQuestions),
    currentQuestionIndex: 0,
    score: 0,
    gameOver: false,
    selectedAnswer: "",
    questionAnswered: false,
  });

  let currentQuestion = $derived(questions[currentQuestionIndex]);
  let answers = $derived(
    [
      currentQuestion?.correctAnswer,
      ...currentQuestion?.incorrectAnswers,
    ].sort(),
  );

  const handleAnswer = (answer: string): void => {
    questionAnswered = true;
    selectedAnswer = answer;

    if (answer === currentQuestion.correctAnswer) {
      score += { Easy: 1, Medium: 2, Hard: 3 }[currentQuestion.difficulty as Question["difficulty"]] || 0;
    }

    setTimeout(() => {
      if (currentQuestionIndex + 1 < questions.length) {
        currentQuestionIndex++;
        questionAnswered = false;
        selectedAnswer = "";
      } else {
        gameOver = true;
      }
    }, 2000);
  };
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
    <a href="/" class="button" in:scale={{ delay: 900, duration: 500 }}>
      Play Again
    </a>
  </div>
{:else}
  <div class="p-4 h-full" in:fade>
    <div class="flex justify-between">
      <div class="flex items-center font-bold text-lg">
        <span class="text-xl mr-0.5">🗓️</span>
        {currentQuestionIndex + 1}/{questions.length}
      </div>
      <div class="flex items-center font-bold text-lg">
        <span class="text-xl mr-0.5">🏆</span>
        {score}
      </div>
    </div>

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
        class="text-2xl font-bold mt-5"
        in:fly={{ y: 20, duration: 500, delay: 200 }}
      >
        {currentQuestion.question}?
      </h2>
    </div>

    <div class="mt-4 min-h-[272px] flex flex-col justify-end">
      {#each answers as answer, i (answer)}
        <button
          class={`border-4 border-transparent
          ${
            selectedAnswer === answer
              ? answer === currentQuestion.correctAnswer
                ? "bg-green-500"
                : "bg-red-500"
              : ""
          }
          ${
            questionAnswered && answer === currentQuestion.correctAnswer
              ? "!border-green-500"
              : ""
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
{/if}
