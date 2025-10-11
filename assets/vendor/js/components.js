// Portfolio Components System
class PortfolioComponents {
  constructor() {
    this.data = portfolioData;
  }

  // Project Card Component
  createProjectCard(project) {
    const imageContent = project.image 
      ? `<img src="${project.image}" alt="${project.imageAlt}" class="project-screenshot" />`
      : `<span>${project.placeholder}</span>`;

    const linkWrapper = project.link 
      ? `<a href="${project.link}" target="_blank" rel="noopener noreferrer">`
      : '';
    const linkClose = project.link ? '</a>' : '';

    return `
      <div class="project-card-enhanced">
        <div class="project-image">
          ${linkWrapper}
          ${imageContent}
          <div class="project-overlay">
            <div class="project-stats">
              ${project.stats.map(stat => `<span class="stat">${stat}</span>`).join('')}
            </div>
          </div>
          ${linkClose}
        </div>
        <div class="project-content">
          <div class="project-header">
            <h3>${project.title}</h3>
            <div class="project-status">
              <span class="status-badge ${project.statusClass}">${project.status}</span>
            </div>
          </div>
          <p class="project-description">${project.description}</p>
          <div class="tech-stack">
            ${project.techStack.map(tech => `<span>${tech}</span>`).join('')}
          </div>
        </div>
      </div>
    `;
  }

  // Skill Category Component
  createSkillCategory(category) {
    return `
      <div class="skill-category">
        <h3>${category.title}</h3>
        <ul>
          ${category.items.map(item => `<li>${item}</li>`).join('')}
        </ul>
      </div>
    `;
  }

  // Skill Progress Component
  createSkillProgress(skillGroup) {
    return `
      <div class="skill-category">
        <h3>${skillGroup.category}</h3>
        ${skillGroup.skills.map(skill => `
          <div class="skill-item">
            <div class="skill-name">${skill.name}</div>
            <div class="skill-progress">
              <div class="skill-progress-bar" data-percentage="${skill.percentage}"></div>
            </div>
          </div>
        `).join('')}
      </div>
    `;
  }

  // Timeline Item Component
  createTimelineItem(timelineItem) {
    return `
      <div class="timeline-item">
        <span class="year">${timelineItem.year}</span>
        <p>${timelineItem.content}</p>
      </div>
    `;
  }

  // Testimonial Card Component
  createTestimonialCard(testimonial) {
    return `
      <div class="testimonial-card">
        <div class="testimonial-content">
          "${testimonial.content}"
        </div>
        <div class="testimonial-author">
          <div class="author-info">
            <h4 class="author-name">${testimonial.author.name}</h4>
            <p class="author-title">${testimonial.author.title}</p>
          </div>
        </div>
      </div>
    `;
  }

  // Render Methods
  renderProjects() {
    const container = document.querySelector('#projects .card-grid');
    if (container) {
      container.innerHTML = this.data.projects.map(project => this.createProjectCard(project)).join('');
    }
  }

  renderSkills() {
    const categoriesContainer = document.querySelector('.skills-wrapper');
    if (categoriesContainer) {
      // Render basic skill categories
      const basicCategories = this.data.skills.categories
        .map(category => this.createSkillCategory(category))
        .join('');
      
      // Render progress bar categories
      const progressCategories = this.data.skills.progressBars
        .map(skillGroup => this.createSkillProgress(skillGroup))
        .join('');

      categoriesContainer.innerHTML = basicCategories + progressCategories;
    }
  }

  renderTimeline() {
    const timelineContainer = document.querySelector('.timeline');
    if (timelineContainer) {
      // Render timeline from data
      const timelineItems = this.data.timeline
        .map(item => this.createTimelineItem(item))
        .join('');
      
      timelineContainer.innerHTML = `
        <h3>My Journey</h3>
        ${timelineItems}
      `;
    }
  }

  renderTestimonials() {
    const track = document.querySelector('.testimonial-track');
    if (track) {
      const testimonials = this.data.testimonials
        .map(testimonial => this.createTestimonialCard(testimonial))
        .join('');
      
      track.innerHTML = testimonials;
    }
  }

  // Initialize all components
  init() {
    document.addEventListener('DOMContentLoaded', () => {
      this.renderProjects();
      this.renderSkills();
      this.renderTimeline();
      this.renderTestimonials();
      
      // Re-initialize skill progress bars after rendering
      this.initializeSkillBars();
      
      // Re-initialize carousel after rendering testimonials
      this.initializeCarousel();
    });
  }

  // Initialize skill progress bars
  initializeSkillBars() {
    const progressBars = document.querySelectorAll('.skill-progress-bar');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const progressBar = entry.target;
          const percentage = progressBar.getAttribute('data-percentage');
          progressBar.style.width = percentage + '%';
          observer.unobserve(progressBar);
        }
      });
    }, { threshold: 0.5 });

    progressBars.forEach(bar => {
      bar.style.width = '0%';
      observer.observe(bar);
    });
  }

  // Initialize carousel functionality
  initializeCarousel() {
    const track = document.querySelector('.testimonial-track');
    if (track && track.children.length > 0) {
      // Clone testimonial cards for smooth infinite scroll
      const testimonials = [...track.children];
      testimonials.forEach(testimonial => {
        const clone = testimonial.cloneNode(true);
        track.appendChild(clone);
      });

      // Adjust animation duration based on screen size
      function adjustAnimationDuration() {
        const duration = window.innerWidth <= 768 ? '25s' : '35s';
        track.style.animation = `slideTestimonials ${duration} linear infinite`;
      }

      adjustAnimationDuration();
      window.addEventListener('resize', adjustAnimationDuration);

      // Pause/resume animation on hover/touch
      track.addEventListener('mouseenter', () => {
        track.style.animationPlayState = 'paused';
      });

      track.addEventListener('mouseleave', () => {
        track.style.animationPlayState = 'running';
      });

      track.addEventListener('touchstart', () => {
        track.style.animationPlayState = 'paused';
      });

      track.addEventListener('touchend', () => {
        track.style.animationPlayState = 'running';
      });
    }
  }
}

// Initialize the component system
const portfolioComponents = new PortfolioComponents();
portfolioComponents.init();