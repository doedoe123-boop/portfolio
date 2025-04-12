particlesJS("particles-js", {
  particles: {
    number: {
      value: 80,
      density: { enable: true, value_area: 800 },
    },
    color: { value: "#ffffff" },
    shape: {
      type: "circle",
      stroke: { width: 0, color: "#000000" },
    },
    opacity: {
      value: 0.5,
      random: false,
    },
    size: {
      value: 3,
      random: true,
    },
    move: {
      enable: true,
      speed: 2,
      direction: "none",
    },
  },
});

// intro

const text = "Hi! I’m Nelson";
const speed = 300;
let i = 0;

function typeWriter() {
  if (i < text.length) {
    document.getElementById("intro").innerHTML += text.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

window.onload = typeWriter;

// Scroll animation observer
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target); // Stop observing once animation is triggered
        }
    });
}, observerOptions);

// Add scroll-animate class to elements you want to animate
document.addEventListener('DOMContentLoaded', () => {
    const elements = [
        ...document.querySelectorAll('.skill-category'),
        ...document.querySelectorAll('.card'),
        ...document.querySelectorAll('.testimonial-card'),
        ...document.querySelectorAll('.timeline-item'),
        document.querySelector('.testimonials h2')  // Add testimonials heading
    ].filter(Boolean);  // Filter out any null elements

    elements.forEach(element => {
        element.classList.add('scroll-animate');
        observer.observe(element);
    });

    // Initialize skill progress bars with percentage values
    const skillItems = document.querySelectorAll('.skill-item');
    skillItems.forEach(item => {
        const progressBar = item.querySelector('.skill-progress-bar');
        const percentage = progressBar.getAttribute('data-percentage');
        const skillName = item.querySelector('.skill-name');
        skillName.setAttribute('data-percentage', percentage);
        
        setTimeout(() => {
            progressBar.style.width = `${percentage}%`;
        }, 500);
    });

    // Timeline progress animation
    const timeline = document.querySelector('.timeline');
    const timelineItems = document.querySelectorAll('.timeline-item');
    
    function updateTimeline() {
        if (!timeline) return;

        const timelineRect = timeline.getBoundingClientRect();
        const timelineStart = timelineRect.top + window.scrollY;
        const timelineEnd = timelineStart + timelineRect.height - 150; // Adjust for top padding
        const currentScroll = window.scrollY;
        
        // Calculate scroll percentage
        const scrollPercent = Math.max(0, Math.min(100,
            ((currentScroll - timelineStart) / (timelineEnd - timelineStart)) * 100
        ));
        
        timeline.style.setProperty('--scroll-percent', `${scrollPercent}%`);

        // Update active states of timeline items
        timelineItems.forEach(item => {
            const rect = item.getBoundingClientRect();
            const isVisible = rect.top < window.innerHeight * 0.8 && rect.bottom > window.innerHeight * 0.2;
            item.classList.toggle('active', isVisible);
        });
    }

    window.addEventListener('scroll', updateTimeline);
    updateTimeline(); // Initial call
});

