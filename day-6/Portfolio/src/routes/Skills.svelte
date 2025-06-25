<script>
  import {
    Code2, Database, Github, FileCode,
    Cpu, Cloud, TerminalSquare, Languages
  } from 'lucide-svelte';

  const skills = [
    { name: 'Frontend (React, HTML & CSS)', icon: Code2 },
    { name: 'Backend (Node.js, Express & Flask)', icon: TerminalSquare },
    { name: 'Databases (MongoDB, MySQL & SQL)', icon: Database },
    { name: 'Python, JavaScript & C++', icon: Languages },
    { name: 'Cloud & DevOps', icon: Cloud },
    { name: 'Git & GitHub', icon: Github },
    { name: 'Problem Solving', icon: Cpu },
    { name: 'APIs & Integration', icon: FileCode }
  ];
</script>

<style>
  section#skills {
    min-height: 100vh;
    padding: 5rem 2rem 4rem;
    color: #fff;
    font-family: "Times New Roman", Times, serif;
    display: flex;
    flex-direction: column;
    justify-content: center;
    border-radius: 40%;
  }

  .skills-title {
    font-size: 2.5rem;
    margin-bottom: 5rem;
    text-align: center;
    font-weight: 900;
  }

  .highlight {
    color: #ffb84d;
  }

  .skills-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
    gap: 4rem;
    max-width: 1000px;
    margin: 0 auto;
  }

  .skill-card {
    background-color: #2c0e00;
    padding: 2.5rem;
    border-radius: 10%;
    box-shadow: 0 4px 12px rgba(255, 174, 84, 0.15);
    display: flex;
    flex-direction: column;
    align-items: center;
    transition: transform 0.2s ease;
  }

  .skill-card:hover {
    transform: scale(1.05);
    box-shadow: 0 4px 20px rgba(255, 174, 84, 0.3);
  }

  .skill-name {
    font-size: 1.1rem;
    margin-top: 0.75rem;
    text-align: center;
  }

  @media (max-width: 768px) {
    .skills-title {
      font-size: 2rem;
    }

    .skills-grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }
</style>

<section id="skills">
  <h2 class="skills-title">
    <span class="highlight">💻 Skills</span> & <span class="highlight">Abilities</span>
  </h2>

  <div class="skills-grid">
    {#each skills as { name, icon }}
      <div class="skill-card">
        <svelte:component this={icon} size="40" color="#ffb84d" />
        <div class="skill-name">{name}</div>
      </div>
    {/each}
  </div>
</section>
