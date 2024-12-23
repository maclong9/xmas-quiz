<script lang="ts">
	import { onMount } from 'svelte';

	const SNOWFLAKES_COUNT = 75;
	const SNOWFLAKE_MIN_SCALE = 0.2;
	const MELTING_SPEED = 1.12;
	const WIND_FORCE = 0.01;
	const FALL_SPEED = 0.15;
	const SNOW_ICONS = ['❆', '❅', '❄'];
	const TARGET_FPS = 60;

	const MS_BETWEEN_FRAMES = 1000 / TARGET_FPS;

	interface Snowflake {
		scale: number;
		x: number;
		y: number;
		rotation: number;
		snowIcon: string;
		opacity: number;
	}

	function randomSnowflakeConfig(i: number): Snowflake {
		return {
			scale: SNOWFLAKE_MIN_SCALE + Math.random() * (1 - SNOWFLAKE_MIN_SCALE),
			x: -20 + Math.random() * 120,
			y: -100 + Math.random() * 200,
			rotation: Math.floor(Math.random() * 360),
			snowIcon: SNOW_ICONS[i % SNOW_ICONS.length],
			opacity: 0.999
		};
	}

	let snowflakes: Snowflake[] = new Array(SNOWFLAKES_COUNT)
		.fill(undefined)
		.map((_, i) => randomSnowflakeConfig(i))
		.sort((a, b) => a.scale - b.scale);

	onMount(() => {
		let frame: number;
		let lastTime: number;

		function loop(timestamp: number) {
			frame = requestAnimationFrame(loop);

			const elapsed = timestamp - lastTime;
			lastTime = timestamp;

			let framesCompleted = elapsed / MS_BETWEEN_FRAMES;

			if (isNaN(framesCompleted)) {
				framesCompleted = 1;
			}

			snowflakes = snowflakes.map((flake) => {
				if (flake.y >= 100) {
					flake.opacity = Math.pow(flake.opacity, MELTING_SPEED);
				} else {
					flake.y += FALL_SPEED * flake.scale * framesCompleted;
					flake.x += WIND_FORCE * flake.scale * framesCompleted;
					flake.rotation += 1 * framesCompleted;
				}
				if (flake.opacity <= 0.02) {
					flake.y = -20;
					flake.x = -20 + Math.random() * 120;
					flake.opacity = 0.999;
				}
				return flake;
			});
		}

		loop(0);

		return () => cancelAnimationFrame(frame);
	});
</script>

<div class="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
	{#each snowflakes as flake}
		<div
			class="absolute z-[1000] overflow-hidden font-sans text-[1.2rem] leading-[1.2rem]"
			style={`opacity: ${flake.opacity}; transform: scale(${flake.scale}) rotate(${flake.rotation}deg); left: ${flake.x}%; top: calc(${flake.y}% - ${flake.scale}rem)`}
		>
			{flake.snowIcon}
		</div>
	{/each}
</div>
