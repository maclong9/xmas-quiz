<script lang="ts">
	import type { Question } from '$lib/questions';
	import { questions as initialQuestions } from '$lib/questions';
	import { cn, shuffleArray } from '$lib/utils';
	import { flip } from 'svelte/animate';
	import { fade, fly, scale } from 'svelte/transition';

	// State
	let { questions, currentQuestionIndex, score, gameOver, selectedAnswer, questionAnswered } =
		$state({
			questions: shuffleArray(initialQuestions),
			currentQuestionIndex: 0,
			score: 0,
			gameOver: false,
			selectedAnswer: '',
			questionAnswered: false
		});

	// Derived
	let currentQuestion = $derived(questions[currentQuestionIndex]);
	let answers = $derived(
		[currentQuestion?.correctAnswer, ...currentQuestion?.incorrectAnswers].sort()
	);

	// Methods
	function handleAnswer(answer: string): void {
		questionAnswered = true;
		selectedAnswer = answer;
		const isCorrect = answer === currentQuestion.correctAnswer;

		if (isCorrect) {
			score +=
				{ Easy: 1, Medium: 2, Hard: 3 }[currentQuestion.difficulty as Question['difficulty']] || 0;
		}

		setTimeout(() => {
			if (currentQuestionIndex + 1 < questions.length) {
				currentQuestionIndex += 1;
				questionAnswered = false;
				selectedAnswer = '';
			} else {
				gameOver = true;
			}
		}, 2000);
	}
</script>

{#if gameOver}
	<div
		class="flex flex-col items-center justify-center space-y-16 bg-red-700 p-4 text-center"
		in:fly={{ y: 50, duration: 500 }}
		out:fade
	>
		<h1 class="text-7xl font-bold" in:scale={{ delay: 300, duration: 500 }}>Game Complete</h1>
		<p class="text-2xl font-semibold" in:scale={{ delay: 600, duration: 500 }}>
			Your final score is: {score}
		</p>
		<a href="/" class="button bg-green-500 text-white" in:scale={{ delay: 900, duration: 500 }}
			>Play Again</a
		>
	</div>
{:else}
	<!-- Game User Interface -->
	<div class="p-4">
		<div class="flex justify-between">
			<div class="flex items-center text-lg font-bold">
				<span class="mr-0.5 text-xl">🗓️</span>
				{currentQuestionIndex + 1}/{questions.length}
			</div>
			<div class="flex items-center text-lg font-bold">
				<span class="mr-0.5 text-xl">🏆</span>
				{score}
			</div>
		</div>

		<!-- Question Details -->
		<div class="flex w-full items-center justify-between pt-10 text-sm">
			<span class="font-bold">
				{currentQuestion.category}
			</span>
			<span class="font-bold">
				{currentQuestion.difficulty}
			</span>
		</div>

		<!-- Question Text -->
		<div class="flex flex-col text-center">
			<h2 class="mt-5 text-2xl font-bold">
				{currentQuestion.question}?
			</h2>
		</div>

		<!-- Answer Buttons -->
		<div class="mt-4 flex min-h-[272px] flex-col justify-end">
			{#each answers as answer, i (answer)}
				<button
					class={cn(
						'border-4 border-transparent',
						selectedAnswer === answer && answer === currentQuestion.correctAnswer && 'bg-green-500',
						selectedAnswer === answer && answer !== currentQuestion.correctAnswer && 'bg-red-500',
						questionAnswered && answer === currentQuestion.correctAnswer && '!border-green-500',
						questionAnswered && answer !== selectedAnswer && 'hover:scale-100',
						questionAnswered && answer === selectedAnswer && 'scale-105'
					)}
					onclick={() => handleAnswer(answer)}
					disabled={questionAnswered}
					in:fly={{ y: 20, duration: 500, delay: 300 + i * 100 }}
					animate:flip
				>
					{answer.toString().charAt(0).toUpperCase() + answer.toString().slice(1)}
				</button>
			{/each}
		</div>
	</div>
{/if}
