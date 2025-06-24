<script>
  import Navbar from './Navbar.svelte';
  import { onMount } from 'svelte';
  import { animate, svg, stagger } from 'animejs';

  onMount(() => {
    const drawable = svg.createDrawable('.line');
    animate(drawable, {
      draw: ['0 0', '0 1', '1 1'],
      easing: 'easeInOutQuad',
      duration: 2000,
      delay: stagger(200),
      loop: true
    });
  });
</script>

<style>
  /* Full screen white landing page */
  .landing {
    height: 100vh;
    width: 100vw;
    background: #ffffff;
    position: relative;
    overflow: hidden;
  }

  /* Animated "Kanak" in top-left corner */
  .logo {
    position: absolute;
    top: 1rem;
    left: 1rem;
    width: 300px;
    height: auto;
  }

  svg {
    stroke: #0d0d0d; /* Dark stroke on white background */
    stroke-width: 2;
    fill: none;
    width: 100%;
    height: auto;
  }

  /* Responsive Navbar placeholder */
  @media (max-width: 768px) {
    .logo {
      width: 80px;
    }
  }
  .background-video {
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100vw;
    object-fit: cover;
    z-index: -1;
  }

</style>

<div class="landing">
  <video autoplay muted loop playsinline class="background-video">
    <source src="../../static/landing_video.mp4" type="video/mp4" />
  </video>

  <div class="logo">
    <svg viewBox="0 0 600 120" xmlns="http://www.w3.org/2000/svg">
      <path class="line" d="M10 100 L10 20 M10 60 L50 20 M10 60 L50 100"/>
      <path class="line" d="M70 70 C70 40, 100 40, 100 70 C100 100, 70 100, 70 70 Z M100 70 L100 105"/>
      <path class="line" d="M120 100 L120 60 C120 40, 150 40, 150 60 L150 100"/>
      <path class="line" d="M170 70 C170 40, 200 40, 200 70 C200 100, 170 100, 170 70 Z M200 70 L200 105"/>
      <path class="line" d="M220 100 L220 20 M220 60 L260 20 M220 60 L260 100"/>
    </svg>
  </div>
</div>

<Navbar />
