const portfolioData = {
  name: 'Prabavathi S',
  title: 'Aspiring Software Developer',
  summary: 'I am a developing software professional with a strong interest in programming, web development, and building polished digital experiences. My focus is on turning ideas into practical, user-friendly solutions with clear structure and thoughtful design.',
  about: [
    'I am building a foundation in software development through hands-on practice, modern web technologies, and continuous learning.',
    'My work is shaped by curiosity, problem-solving, and a growing interest in creating meaningful interfaces and reliable applications.',
    'The portfolio reflects my current focus on programming, web technologies, and professional growth in the software development space.'
  ],
  highlights: [
    'Programming practice',
    'Web development learning',
    'Portfolio projects',
    'Continuous growth'
  ],
  skills: [
    { group: 'Languages', items: ['C', 'Java', 'Python', 'JavaScript'] },
    { group: 'Web Technologies', items: ['HTML5', 'CSS3'] },
    { group: 'Backend', items: ['Django'] },
    { group: 'Database', items: ['SQL', 'MySQL'] },
    { group: 'Tools', items: ['Git', 'GitHub', 'VS Code', 'Figma'] }
  ],
  certifications: [
    {
      title: 'Monetize Your Mind Workshop',
      organization: 'AIC RAISE',
      status: 'Completed',
      description: 'Completed a focused workshop on personal growth, mindset, and professional development.'
    },
    {
      title: 'AWS Certified Cloud Practitioner (CLF-C02)',
      organization: 'LinkedIn Learning',
      status: 'Completed',
      description: 'Built a foundational understanding of AWS cloud concepts and services.'
    },
    {
      title: 'Artificial Intelligence Foundations: Machine Learning',
      organization: 'LinkedIn Learning',
      status: 'Completed',
      description: 'Explored core machine learning principles and practical AI foundations.'
    },
    {
      title: 'Cloud Computing',
      organization: 'NPTEL (SWAYAM)',
      status: 'Completed',
      description: 'Completed a structured course covering cloud concepts and related technologies.'
    },
    {
      title: 'The Joy of Computing using Python (Elite – 65%)',
      organization: 'NPTEL (SWAYAM)',
      status: 'Completed',
      description: 'Completed an acclaimed Python course with strong academic performance.'
    }
  ],
  focusAreas: [
    {
      title: 'Web Development',
      icon: 'fa-solid fa-laptop-code',
      text: 'Learning modern front-end practices and increasingly building polished, responsive interfaces.'
    },
    {
      title: 'Programming Practice',
      icon: 'fa-solid fa-code',
      text: 'Strengthening problem-solving skills through hands-on coding and structured practice.'
    },
    {
      title: 'Professional Growth',
      icon: 'fa-solid fa-folder-open',
      text: 'Building a portfolio that reflects technical progress, attention to detail, and commitment to learning.'
    }
  ],
  socialLinks: [
    { href: 'https://github.com/Prabavathisaba13', icon: 'fa-brands fa-github', label: 'GitHub' },
    { href: 'https://www.linkedin.com/in/prabavathi-s-a1653533b/', icon: 'fa-brands fa-linkedin-in', label: 'LinkedIn' },
    { href: 'mailto:prabavathikayal305@gmail.com', icon: 'fa-solid fa-envelope', label: 'Email' }
  ],
  contact: {
    email: 'prabavathikayal305@gmail.com',
    github: 'https://github.com/Prabavathisaba13',
    linkedin: 'https://www.linkedin.com/in/prabavathi-s-a1653533b/'
  }
};

const app = document.getElementById('app');

// EmailJS configuration
const EMAILJS_PUBLIC_KEY = '851CSSz1ltCKMO9nu';
const EMAILJS_SERVICE_ID = 'service_7b5f4eq';
const EMAILJS_TEMPLATE_ID = 'template_a9ugerp';
const RECIPIENT_EMAIL = 'prabavathikayal305@gmail.com';
const EMAILJS_CONFIGURED = Boolean(
  EMAILJS_SERVICE_ID &&
  EMAILJS_TEMPLATE_ID &&
  EMAILJS_PUBLIC_KEY
);

function initEmailJS() {
  if (!window.emailjs) {
    console.error('EmailJS SDK not loaded. Ensure the EmailJS CDN script is present in index.html.');
    return;
  }

  if (!EMAILJS_CONFIGURED) {
    console.warn('EmailJS credentials are missing.');
    return;
  }

  window.emailjs.init(EMAILJS_PUBLIC_KEY);
}

function renderPortfolio() {
  app.innerHTML = `
    <section id="home" class="hero container reveal">
      <div class="hero-grid">
        <div class="hero-copy">
          <span class="eyebrow">Professional Portfolio</span>
          <h1>Hi, I am <span class="accent">${portfolioData.name}</span></h1>
          <h2 class="typed" id="typedText"></h2>
          <p>${portfolioData.summary}</p>
          <div class="hero-actions">
            <a class="btn btn-primary" href="#contact"><i class="fa-solid fa-paper-plane"></i> Hire Me</a>
            <a class="btn btn-secondary" href="resume/praba_resume.pdf" download><i class="fa-solid fa-download"></i> Download Resume</a>
          </div>
          <div class="hero-socials">
            ${portfolioData.socialLinks.map(link => `<a href="${link.href}" target="_blank" rel="noreferrer" aria-label="${link.label}"><i class="${link.icon}"></i></a>`).join('')}
          </div>
        </div>
        <div class="hero-visual">
          <div class="hero-card">
            <img src="profile.png" alt="Prabavathi S" />
            <div class="info-pill"><i class="fa-solid fa-shield-halved"></i> Available for opportunities</div>
          </div>
        </div>
      </div>
    </section>

    <section id="about" class="section container reveal">
      <div class="section-heading">
        <h2>About <span class="accent">Me</span></h2>
        <p>I am building a thoughtful foundation in software development through programming, design-minded web work, and a strong learning mindset.</p>
      </div>
      <div class="card-grid about-grid">
        <div class="card about-card">
          <p>${portfolioData.about[0]}</p>
          <p>${portfolioData.about[1]}</p>
          <p>${portfolioData.about[2]}</p>
        </div>
        <div class="card">
          <div class="about-highlights">
            ${portfolioData.highlights.map(item => `<div class="highlight-pill"><i class="fa-solid fa-angles-right"></i>${item}</div>`).join('')}
          </div>
        </div>
      </div>
    </section>

    <section id="skills" class="section container reveal">
      <div class="section-heading">
        <h2>Technical <span class="accent">Skills</span></h2>
        <p>My current skill set reflects a blend of programming practice, web development fundamentals, and modern developer tools.</p>
      </div>
      <div class="card-grid">
        ${portfolioData.skills.map(skillGroup => `
          <div class="card skill-group">
            <h3>${skillGroup.group}</h3>
            <div class="skill-list">
              ${skillGroup.items.map(item => `<span class="skill-item"><i class="fa-solid fa-check"></i>${item}</span>`).join('')}
            </div>
          </div>
        `).join('')}
      </div>
    </section>

    <section id="certifications" class="section container reveal">
      <div class="section-heading">
        <h2>Certifications <span class="accent">& Learning</span></h2>
        <p>Professional courses and certifications completed or underway through NPTEL and related learning paths.</p>
      </div>
      <div class="cert-grid">
        ${portfolioData.certifications.map(cert => `
          <article class="card cert-card">
            <div class="cert-badge"><i class="fa-solid fa-award"></i>${cert.status}</div>
            <h3>${cert.title}</h3>
            <div class="cert-meta">${cert.organization}</div>
            <p>${cert.description}</p>
          </article>
        `).join('')}
      </div>
    </section>

    <section class="section container reveal">
      <div class="section-heading">
        <h2>Current <span class="accent">Focus</span></h2>
        <p>My work remains centered on building practical experience and presenting it clearly through real projects and thoughtful development habits.</p>
      </div>
      <div class="focus-grid">
        ${portfolioData.focusAreas.map(area => `
          <article class="card focus-card">
            <div class="icon"><i class="${area.icon}"></i></div>
            <h3>${area.title}</h3>
            <p>${area.text}</p>
          </article>
        `).join('')}
      </div>
    </section>

    <section id="contact" class="section container reveal">
      <div class="section-heading">
        <h2>Contact <span class="accent">Me</span></h2>
        <p>Feel free to reach out for collaboration, opportunities, or a conversation about software development and growth.</p>
      </div>
      <div class="contact-grid">
        <div class="card contact-card">
          <div class="contact-list">
            <div class="contact-item"><i class="fa-solid fa-envelope"></i><a href="mailto:${portfolioData.contact.email}">${portfolioData.contact.email}</a></div>
            <div class="contact-item"><i class="fa-brands fa-github"></i><a href="${portfolioData.contact.github}" target="_blank" rel="noreferrer">GitHub</a></div>
            <div class="contact-item"><i class="fa-brands fa-linkedin-in"></i><a href="${portfolioData.contact.linkedin}" target="_blank" rel="noreferrer">LinkedIn</a></div>
          </div>
        </div>
        <div class="card">
          <form class="contact-form" id="contactForm">
            <div class="form-row">
              <input type="text" name="name" placeholder="Your name" required />
              <input type="email" name="email" placeholder="Your email" required />
            </div>
            <textarea name="message" placeholder="Write a message" required></textarea>
            <button type="submit" class="btn btn-primary">Send Message</button>
            <p class="form-status" role="status" aria-live="polite"></p>
            <p class="form-note">This form is prepared for a polished portfolio experience and will confirm your message locally.</p>
          </form>
        </div>
      </div>
    </section>

    <footer class="footer container reveal">
      <div class="footer-inner">
        <div>
          <strong>Prabavathi S</strong>
          <p>Crafted with care for a modern, professional online presence.</p>
        </div>
        <div class="footer-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
          <a href="/resume/praba_resume.pdf">Resume</a>
        </div>
      </div>
    </footer>
  `;

  document.querySelectorAll('.reveal').forEach((item, index) => {
    item.style.transitionDelay = `${index * 70}ms`;
  });
}

function setupInteractions() {
  const loader = document.getElementById('loader');
  window.addEventListener('load', () => {
    setTimeout(() => loader.classList.add('hidden'), 700);
  });

  const header = document.querySelector('.site-header');
  const backToTop = document.getElementById('backToTop');

  window.addEventListener('scroll', () => {
    header.classList.toggle('scrolled', window.scrollY > 14);
    backToTop.classList.toggle('visible', window.scrollY > 700);
  });

  backToTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

  const menuToggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.site-nav');
  menuToggle.addEventListener('click', () => {
    nav.classList.toggle('open');
    const expanded = nav.classList.contains('open');
    menuToggle.setAttribute('aria-expanded', expanded);
    menuToggle.innerHTML = expanded ? '<i class="fa-solid fa-xmark"></i>' : '<i class="fa-solid fa-bars"></i>';
  });

  document.querySelectorAll('.site-nav a').forEach(link => {
    link.addEventListener('click', () => nav.classList.remove('open'));
  });

  const themeToggle = document.querySelector('.theme-toggle');
  const savedTheme = localStorage.getItem('portfolio-theme');
  if (savedTheme === 'dark') {
    document.body.classList.add('dark-theme');
    themeToggle.innerHTML = '<i class="fa-solid fa-sun"></i>';
  }
  themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');
    const dark = document.body.classList.contains('dark-theme');
    localStorage.setItem('portfolio-theme', dark ? 'dark' : 'light');
    themeToggle.innerHTML = dark ? '<i class="fa-solid fa-sun"></i>' : '<i class="fa-solid fa-moon"></i>';
  });

  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.site-nav a');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        const id = entry.target.getAttribute('id');
        navLinks.forEach(link => {
          link.classList.toggle('active', link.getAttribute('href') === `#${id}`);
        });
      }
    });
  }, { threshold: 0.2 });

  document.querySelectorAll('.reveal').forEach(section => observer.observe(section));

  initEmailJS();

  const form = document.getElementById('contactForm');
  const statusMessage = form.querySelector('.form-status');

  form.addEventListener('submit', async event => {
    event.preventDefault();

    const formData = new FormData(form);
    const name = String(formData.get('name') || '').trim();
    const email = String(formData.get('email') || '').trim();
    const message = String(formData.get('message') || '').trim();

    if (!name || !email || !message) {
      statusMessage.textContent = 'Please fill in all fields before sending your message.';
      statusMessage.className = 'form-status error';
      return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      statusMessage.textContent = 'Please enter a valid email address.';
      statusMessage.className = 'form-status error';
      return;
    }

    if (!EMAILJS_CONFIGURED) {
      statusMessage.textContent = 'EmailJS is not configured yet. Replace the placeholder values in script.js with your real EmailJS credentials.';
      statusMessage.className = 'form-status error';
      return;
    }

    const button = form.querySelector('button');
    const buttonText = button.innerHTML;
    button.disabled = true;
    button.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Sending...';
    statusMessage.textContent = 'Sending your message...';
    statusMessage.className = 'form-status';

    try {
      await window.emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, {
        from_name: name,
        from_email: email,
        message,
        to_email: RECIPIENT_EMAIL
      });

      statusMessage.textContent = 'Message sent successfully. Thanks for reaching out!';
      statusMessage.className = 'form-status success';
      form.reset();
    } catch (error) {
      console.error('EmailJS submission failed:', error);
      statusMessage.textContent = 'Message could not be sent. Please try again later.';
      statusMessage.className = 'form-status error';
    } finally {
      button.disabled = false;
      button.innerHTML = buttonText;
    }
  });
}

function typeText() {
  const el = document.getElementById('typedText');
  if (!el) return;
  const phrases = ['Aspiring Software Developer', 'Web Development Learner', 'Problem Solver'];
  let phraseIndex = 0;
  let charIndex = 0;
  let deleting = false;

  const tick = () => {
    const current = phrases[phraseIndex];
    if (!deleting) {
      el.textContent = current.slice(0, charIndex + 1);
      charIndex += 1;
      if (charIndex === current.length) {
        deleting = true;
        setTimeout(tick, 1200);
        return;
      }
    } else {
      el.textContent = current.slice(0, charIndex - 1);
      charIndex -= 1;
      if (charIndex === 0) {
        deleting = false;
        phraseIndex = (phraseIndex + 1) % phrases.length;
      }
    }
    setTimeout(tick, deleting ? 70 : 100);
  };

  tick();
}

renderPortfolio();
setupInteractions();
typeText();
