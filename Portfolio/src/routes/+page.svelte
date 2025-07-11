<script>
  import Skills from './Skills.svelte';
  import Projects from './Projects.svelte';
  import About from './About.svelte';
  import { onMount } from 'svelte';

  let typedText = '';
  const fullText = 'Kanak Sharma';

  onMount(() => {
    let i = 0;
    const interval = setInterval(() => {
      if (i < fullText.length) {
        typedText = typedText + fullText[i]; // Reactively update
        i++;
      } else {
        clearInterval(interval);
      }
    }, 150);
  });
</script>

<style>
  .landing {
    height: 100vh;
    width: 100vw;
    position: relative;
    overflow: hidden;
    font-family: "Times New Roman", Times, serif;
    color: white;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 3rem;
    box-sizing: border-box;
  }

  .background-video {
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    object-fit: cover;
    z-index: -1;
  }

  .typed-name {
    font-size: 8.5rem;
    font-weight: bold;
    white-space: nowrap;
    font-family: "Times New Roman", Times, serif;
    z-index: 10;
  }

  .cursor {
    display: inline-block;
    margin-left: 2px;
    animation: blink 1s infinite;
  }

  @keyframes blink {
    0%, 100% { opacity: 1; }
    50% { opacity: 0; }
  }

  .intro {
    max-width: 500px;
    font-size: 1.6rem;
    line-height: 2rem;
    z-index: 10;
    text-align: left;
  }

  @media (max-width: 768px) {
    .landing {
      flex-direction: column;
      justify-content: center;
      padding: 2rem;
      text-align: center;
    }

    .typed-name {
      font-size: 2.5rem;
      margin-bottom: 1rem;
    }

    .intro {
      font-size: 1.2rem;
      line-height: 1.8rem;
    }
  }
</style>

<div class="landing">
  <video autoplay muted loop playsinline class="background-video">
    <source src="/video.mp4" type="video/mp4" />
    Your browser does not support the video tag.
  </video>

  <h1 class="typed-name" aria-label="Kanak Sharma">
    {typedText}<span class="cursor">|</span>
  </h1>

  <div class="intro">
    <p>
      Welcome to my portfolio!<br /><br />
      I’m a full-stack and AI developer with a passion for creating efficient, scalable, and intelligent solutions.<br /><br />
      With strong foundations in Python, JavaScript, and cloud-native tools, I design systems that are both powerful and practical.
    </p>
  </div>
</div>

<Skills />
<Projects />
<About />
