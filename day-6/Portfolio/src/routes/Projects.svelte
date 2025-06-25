<script>

  const projects = [
    {
      title: 'Professor Recommendation Website',
      description: `An AI-powered website recommending professors based on specialization areas, improving course selection satisfaction by 25%.`,
      tech: 'Flask, JavaScript, HTML, CSS, Python',
      link: 'https://github.com/kanaksharma9/professor-recommendation',
      image: '/prof.JPG'
    },
    {
      title: 'Subtitle Generator',
      description: `Flask tool to extract audio and generate subtitles with 98% accuracy using ML speech-to-text.`,
      tech: 'Python, Flask, OpenAI API',
      link: 'https://github.com/kanaksharma9/subtitle-generator',
      image: '/sub.JPG'
    },
    {
      title: 'Lunchie - Food Ordering App',
      description: `Built a food ordering app with Stripe integration. Improved payment speed and UX.`,
      tech: 'React.js, Firebase, Stripe API',
      link: 'https://github.com/kanaksharma9/lunchie-app',
      image: '/lunchie.JPG'
    },
    {
      title: 'Emotion Detection Model',
      description: `AI model using TensorFlow to detect emotions from facial images. UI built in Tkinter.`,
      tech: 'Python, TensorFlow, Tkinter',
      link: 'https://github.com/kanaksharma9/emotion-detector',
      image: '/emotion.JPG'
    },
    {
      title: 'CodeVox: Voice-to-Website',
      description: `Voice-to-code app using Gemini 1.5 & Flask to convert spoken input into live website code.`,
      tech: 'Flask, SQLite, Web Speech API, Gemini 1.5',
      link: 'https://codevox-prip.onrender.com/',
      image: '/codevox.JPG'
    },
    {
      title: 'AI Customer Support Chatbot',
      description: `Built a responsive AI chatbot using OpenAI’s GPT to handle real-time customer queries with context-aware responses.`,
      tech: 'Flask, OpenAI GPT, HTML/CSS, JavaScript',
      link: 'https://github.com/kanaksharma9/AI_Customer_Support',
      image: '/chatbot.JPG'
    }
  ];
</script>

<style>
  section#projects-section {
    padding: 6rem 2rem 8rem; 
    font-family: 'Times New Roman', serif;
    color: #fff;
    min-height: 100vh;
    text-align: center;
  }

  .projects-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
    gap: 0;
    width: 100%;
  }

  .flip-card {
    width: 100%;
    height: 500px;
    perspective: 1200px;
  }

  .flip-card-inner {
    position: relative;
    width: 100%;
    height: 100%;
    text-align: center;
    transition: transform 0.8s;
    transform-style: preserve-3d;
  }

  .flip-card:hover .flip-card-inner {
    transform: rotateY(180deg);
  }

  .flip-card-front, .flip-card-back {
    position: absolute;
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 1rem;
    box-sizing: border-box;
  }

  .flip-card-front img {
    width: 90%;
    height: 300px;
    object-fit: cover;
    border-radius: 0.5rem;
  }

  .flip-card-back {
    background-color: #331302;
    color: white;
    transform: rotateY(180deg);
    border-radius: 40%;
  }

  .flip-card-back p {
    font-size: 1.5rem;
    padding: 0.5rem 1rem;
  }

  .project-link {
    margin-top: 1rem;
    padding: 0.5rem 1.2rem;
    color: #f9f9f9;
    border-radius: 6px;
    text-decoration: none;
    font-weight: bold;
    transition: background 0.3s;
  }

  .project-link:hover {
    background: #ffac28;
  }

  .projects-title {
    font-size: 2.5rem;
    margin-bottom: 4rem;
    font-weight: 900;
  }

  .highlight {
    color: #ffb84d;
  }
</style>

<section id="projects-section">
  <h2 class="projects-title">
    <span class="highlight">Projects</span>
  </h2>

  <div class="projects-grid">
    {#each projects as project}
      <div class="flip-card">
        <div class="flip-card-inner">
          <div class="flip-card-front">
            <img src={project.image} alt={project.title} />
          </div>
          <div class="flip-card-back">
            <p>{project.description}</p>
            <small>{project.tech}</small>
            <a href={project.link} target="_blank" class="project-link">View Project</a>
          </div>
        </div>
      </div>
    {/each}
  </div>
</section>

