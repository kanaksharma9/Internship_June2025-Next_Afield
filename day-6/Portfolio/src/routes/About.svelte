<script>
  const email = "mailto:kanak@example.com";
  const github = "https://github.com/kanaksharma9";
  const linkedin = "https://www.linkedin.com/in/kanak--sharma/";
</script>

<style>
  section#about-page {
    max-height: 60vh;
    padding: 1rem 2rem 4rem;
    font-family: "Times New Roman", serif;
    color: #ffffff;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
  }

  h1 {
    font-size: 2.8rem;
    margin-bottom: 1rem;
    color: #ffb84d;
  }

  p {
    font-size: 1.2rem;
    max-width: 700px;
    line-height: 1.7;
    margin-bottom: 2rem;
    color: #ddd;
  }

  .button-group {
    display: flex;
    gap: 1rem;
    margin-bottom: 2rem;
    flex-wrap: wrap;
    justify-content: center;
  }

  .button-group a {
    padding: 0.75rem 1.5rem;
    border: 2px solid #ffb84d;
    color: #1e0e02;
    font-weight: bold;
    background: #ffb84d;
    border-radius: 6px;
    text-decoration: none;
    transition: all 0.3s ease;
  }

  .button-group a:hover {
    background: transparent;
    color: #ffb84d;
  }

  .social-links {
    display: flex;
    gap: 2rem;
    font-size: 1.8rem;
    margin-top: 2rem;
    margin-bottom: 2rem;

  }

  .social-links a {
    color: #fff;
    transition: color 0.3s;
  }

  .social-links a:hover {
    color: #ffb84d;
  }

  @media (max-width: 768px) {
    h1 {
      font-size: 2rem;
    }
    p {
      font-size: 1rem;
    }
    .social-links {
      gap: 1.2rem;
    }
  }
</style>

<svelte:head>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css" />
</svelte:head>

<section id="about-page">
  <h1>Interested in Collaborating?</h1>
  <p>
    I’m always excited to work on impactful, meaningful projects — especially in AI, full-stack development, or educational tech. If you have something in mind or just want to connect, feel free to reach out.
  </p>

  <div class="button-group">
    <a href={email}>MAIL</a>
    <a href="https://drive.google.com/file/d/17FQQgVy-c0WUXXGuw0i09fO7Ud0Yl8hm/view?usp=sharing">LEARN MORE</a>
  </div>
<div class="social-links">
  <a href={github} target="_blank" aria-label="GitHub Profile"><i class="fab fa-github"></i></a>
  <a href={linkedin} target="_blank" aria-label="LinkedIn Profile"><i class="fab fa-linkedin"></i></a>
  <a href={email} aria-label="Send Email"><i class="fas fa-envelope"></i></a>
</div>

</section>
