(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))s(t);new MutationObserver(t=>{for(const a of t)if(a.type==="childList")for(const c of a.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&s(c)}).observe(document,{childList:!0,subtree:!0});function l(t){const a={};return t.integrity&&(a.integrity=t.integrity),t.referrerPolicy&&(a.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?a.credentials="include":t.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function s(t){if(t.ep)return;t.ep=!0;const a=l(t);fetch(t.href,a)}})();const i={name:"Prabavathi S",summary:"I am a developing software professional with a strong interest in programming, web development, and building polished digital experiences. My focus is on turning ideas into practical, user-friendly solutions with clear structure and thoughtful design.",about:["I am building a foundation in software development through hands-on practice, modern web technologies, and continuous learning.","My work is shaped by curiosity, problem-solving, and a growing interest in creating meaningful interfaces and reliable applications.","The portfolio reflects my current focus on programming, web technologies, and professional growth in the software development space."],highlights:["Programming practice","Web development learning","Portfolio projects","Continuous growth"],skills:[{group:"Languages",items:["C","Java","Python","JavaScript"]},{group:"Web Technologies",items:["HTML5","CSS3"]},{group:"Backend",items:["Django"]},{group:"Database",items:["SQL","MySQL"]},{group:"Tools",items:["Git","GitHub","VS Code","Figma"]}],certifications:[{title:"Monetize Your Mind Workshop",organization:"AIC RAISE",status:"Completed",description:"Completed a focused workshop on personal growth, mindset, and professional development."},{title:"AWS Certified Cloud Practitioner (CLF-C02)",organization:"LinkedIn Learning",status:"Completed",description:"Built a foundational understanding of AWS cloud concepts and services."},{title:"Artificial Intelligence Foundations: Machine Learning",organization:"LinkedIn Learning",status:"Completed",description:"Explored core machine learning principles and practical AI foundations."},{title:"Cloud Computing",organization:"NPTEL (SWAYAM)",status:"Completed",description:"Completed a structured course covering cloud concepts and related technologies."},{title:"The Joy of Computing using Python (Elite – 65%)",organization:"NPTEL (SWAYAM)",status:"Completed",description:"Completed an acclaimed Python course with strong academic performance."}],focusAreas:[{title:"Web Development",icon:"fa-solid fa-laptop-code",text:"Learning modern front-end practices and increasingly building polished, responsive interfaces."},{title:"Programming Practice",icon:"fa-solid fa-code",text:"Strengthening problem-solving skills through hands-on coding and structured practice."},{title:"Professional Growth",icon:"fa-solid fa-folder-open",text:"Building a portfolio that reflects technical progress, attention to detail, and commitment to learning."}],socialLinks:[{href:"https://github.com/Prabavathisaba13",icon:"fa-brands fa-github",label:"GitHub"},{href:"https://www.linkedin.com/in/prabavathi-s-a1653533b/",icon:"fa-brands fa-linkedin-in",label:"LinkedIn"},{href:"mailto:prabavathikayal305@gmail.com",icon:"fa-solid fa-envelope",label:"Email"}],contact:{email:"prabavathikayal305@gmail.com",github:"https://github.com/Prabavathisaba13",linkedin:"https://www.linkedin.com/in/prabavathi-s-a1653533b/"}},S=document.getElementById("app"),h="851CSSz1ltCKMO9nu",E="service_7b5f4eq",k="template_a9ugerp",C="prabavathikayal305@gmail.com",v=!!h;function I(){if(!window.emailjs){console.error("EmailJS SDK not loaded. Ensure the EmailJS CDN script is present in index.html.");return}if(!v){console.warn("EmailJS credentials are missing.");return}window.emailjs.init(h)}function T(){S.innerHTML=`
    <section id="home" class="hero container reveal">
      <div class="hero-grid">
        <div class="hero-copy">
          <span class="eyebrow">Professional Portfolio</span>
          <h1>Hi, I am <span class="accent">${i.name}</span></h1>
          <h2 class="typed" id="typedText"></h2>
          <p>${i.summary}</p>
          <div class="hero-actions">
            <a class="btn btn-primary" href="#contact"><i class="fa-solid fa-paper-plane"></i> Hire Me</a>
            <a class="btn btn-secondary" href="resume/praba_resume.pdf" download><i class="fa-solid fa-download"></i> Download Resume</a>
          </div>
          <div class="hero-socials">
            ${i.socialLinks.map(e=>`<a href="${e.href}" target="_blank" rel="noreferrer" aria-label="${e.label}"><i class="${e.icon}"></i></a>`).join("")}
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
          <p>${i.about[0]}</p>
          <p>${i.about[1]}</p>
          <p>${i.about[2]}</p>
        </div>
        <div class="card">
          <div class="about-highlights">
            ${i.highlights.map(e=>`<div class="highlight-pill"><i class="fa-solid fa-angles-right"></i>${e}</div>`).join("")}
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
        ${i.skills.map(e=>`
          <div class="card skill-group">
            <h3>${e.group}</h3>
            <div class="skill-list">
              ${e.items.map(n=>`<span class="skill-item"><i class="fa-solid fa-check"></i>${n}</span>`).join("")}
            </div>
          </div>
        `).join("")}
      </div>
    </section>

    <section id="certifications" class="section container reveal">
      <div class="section-heading">
        <h2>Certifications <span class="accent">& Learning</span></h2>
        <p>Professional courses and certifications completed or underway through NPTEL and related learning paths.</p>
      </div>
      <div class="cert-grid">
        ${i.certifications.map(e=>`
          <article class="card cert-card">
            <div class="cert-badge"><i class="fa-solid fa-award"></i>${e.status}</div>
            <h3>${e.title}</h3>
            <div class="cert-meta">${e.organization}</div>
            <p>${e.description}</p>
          </article>
        `).join("")}
      </div>
    </section>

    <section class="section container reveal">
      <div class="section-heading">
        <h2>Current <span class="accent">Focus</span></h2>
        <p>My work remains centered on building practical experience and presenting it clearly through real projects and thoughtful development habits.</p>
      </div>
      <div class="focus-grid">
        ${i.focusAreas.map(e=>`
          <article class="card focus-card">
            <div class="icon"><i class="${e.icon}"></i></div>
            <h3>${e.title}</h3>
            <p>${e.text}</p>
          </article>
        `).join("")}
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
            <div class="contact-item"><i class="fa-solid fa-envelope"></i><a href="mailto:${i.contact.email}">${i.contact.email}</a></div>
            <div class="contact-item"><i class="fa-brands fa-github"></i><a href="${i.contact.github}" target="_blank" rel="noreferrer">GitHub</a></div>
            <div class="contact-item"><i class="fa-brands fa-linkedin-in"></i><a href="${i.contact.linkedin}" target="_blank" rel="noreferrer">LinkedIn</a></div>
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
  `,document.querySelectorAll(".reveal").forEach((e,n)=>{e.style.transitionDelay=`${n*70}ms`})}function P(){const e=document.getElementById("loader");window.addEventListener("load",()=>{setTimeout(()=>e.classList.add("hidden"),700)});const n=document.querySelector(".site-header"),l=document.getElementById("backToTop");window.addEventListener("scroll",()=>{n.classList.toggle("scrolled",window.scrollY>14),l.classList.toggle("visible",window.scrollY>700)}),l.addEventListener("click",()=>window.scrollTo({top:0,behavior:"smooth"}));const s=document.querySelector(".menu-toggle"),t=document.querySelector(".site-nav");s.addEventListener("click",()=>{t.classList.toggle("open");const o=t.classList.contains("open");s.setAttribute("aria-expanded",o),s.innerHTML=o?'<i class="fa-solid fa-xmark"></i>':'<i class="fa-solid fa-bars"></i>'}),document.querySelectorAll(".site-nav a").forEach(o=>{o.addEventListener("click",()=>t.classList.remove("open"))});const a=document.querySelector(".theme-toggle");localStorage.getItem("portfolio-theme")==="dark"&&(document.body.classList.add("dark-theme"),a.innerHTML='<i class="fa-solid fa-sun"></i>'),a.addEventListener("click",()=>{document.body.classList.toggle("dark-theme");const o=document.body.classList.contains("dark-theme");localStorage.setItem("portfolio-theme",o?"dark":"light"),a.innerHTML=o?'<i class="fa-solid fa-sun"></i>':'<i class="fa-solid fa-moon"></i>'}),document.querySelectorAll("section[id]");const b=document.querySelectorAll(".site-nav a"),y=new IntersectionObserver(o=>{o.forEach(d=>{if(d.isIntersecting){d.target.classList.add("active");const f=d.target.getAttribute("id");b.forEach(m=>{m.classList.toggle("active",m.getAttribute("href")===`#${f}`)})}})},{threshold:.2});document.querySelectorAll(".reveal").forEach(o=>y.observe(o)),I();const u=document.getElementById("contactForm"),r=u.querySelector(".form-status");u.addEventListener("submit",async o=>{o.preventDefault();const d=new FormData(u),f=String(d.get("name")||"").trim(),m=String(d.get("email")||"").trim(),g=String(d.get("message")||"").trim();if(!f||!m||!g){r.textContent="Please fill in all fields before sending your message.",r.className="form-status error";return}if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(m)){r.textContent="Please enter a valid email address.",r.className="form-status error";return}if(!v){r.textContent="EmailJS is not configured yet. Replace the placeholder values in script.js with your real EmailJS credentials.",r.className="form-status error";return}const p=u.querySelector("button"),w=p.innerHTML;p.disabled=!0,p.innerHTML='<i class="fa-solid fa-spinner fa-spin"></i> Sending...',r.textContent="Sending your message...",r.className="form-status";try{await window.emailjs.send(E,k,{from_name:f,from_email:m,message:g,to_email:C}),r.textContent="Message sent successfully. Thanks for reaching out!",r.className="form-status success",u.reset()}catch(L){console.error("EmailJS submission failed:",L),r.textContent="Message could not be sent. Please try again later.",r.className="form-status error"}finally{p.disabled=!1,p.innerHTML=w}})}function M(){const e=document.getElementById("typedText");if(!e)return;const n=["Aspiring Software Developer","Web Development Learner","Problem Solver"];let l=0,s=0,t=!1;const a=()=>{const c=n[l];if(t)e.textContent=c.slice(0,s-1),s-=1,s===0&&(t=!1,l=(l+1)%n.length);else if(e.textContent=c.slice(0,s+1),s+=1,s===c.length){t=!0,setTimeout(a,1200);return}setTimeout(a,t?70:100)};a()}T();P();M();
