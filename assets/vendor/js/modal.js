const modal = document.getElementById('modal');
const modalTitle = document.getElementById('modal-title');
const modalIframe = document.getElementById('modal-iframe');
const visitSiteButton = document.getElementById('visit-site');
let currentUrl = '';
let isComingSoon = false;

// Support both function names for backward compatibility
function openModal(title, url, comingSoon = false) {
  showModal(title, url, comingSoon);
}

function showModal(title, url, comingSoon = false) {
  isComingSoon = comingSoon;
  modal.style.display = 'block';
  modalTitle.textContent = title;

  if (isComingSoon) {
    modalIframe.style.display = 'none';
    // Calculate launch date (3 months from now)
    const launchDate = new Date();
    launchDate.setMonth(launchDate.getMonth() + 3);
    
    modalTitle.innerHTML = `
      <div class="coming-soon-content">
        <div class="coming-soon-icon">🚀</div>
        <h3 class="coming-soon-title">${title}</h3>

        <p class="coming-soon-description">
          Your ultimate fitness companion is almost here! Our app is in its final stages of development,
          bringing you a revolutionary fitness experience powered by cutting-edge technology.
        </p>
        
        <div class="coming-soon-features">
          <div class="feature-item">
            <span class="feature-icon">💪</span>
            <span class="feature-tag">AI-Powered Workout Plans</span>
          </div>
          <div class="feature-item">
            <span class="feature-icon">📊</span>
            <span class="feature-tag">Real-time Progress Tracking</span>
          </div>
          <div class="feature-item">
            <span class="feature-icon">🥗</span>
            <span class="feature-tag">Personalized Nutrition Guide</span>
          </div>
        </div>
      </div>
    `;

    visitSiteButton.style.display = 'none';
    
    // Start countdown timer
    startCountdown(launchDate);
  } else {
    modalIframe.style.display = 'block';
    modalIframe.src = url;
    visitSiteButton.style.display = 'inline-block';
    currentUrl = url;
  }
}

function startCountdown(launchDate) {
  function updateCountdown() {
    const now = new Date().getTime();
    const distance = launchDate.getTime() - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById('countdown-days').textContent = String(days).padStart(2, '0');
    document.getElementById('countdown-hours').textContent = String(hours).padStart(2, '0');
    document.getElementById('countdown-minutes').textContent = String(minutes).padStart(2, '0');
    document.getElementById('countdown-seconds').textContent = String(seconds).padStart(2, '0');

    if (distance < 0) {
      clearInterval(countdownTimer);
      document.querySelector('.countdown-timer').innerHTML = '<p>Launch coming very soon!</p>';
    }
  }

  const countdownTimer = setInterval(updateCountdown, 1000);
  updateCountdown(); // Initial call
}

function handleEarlyAccessSubmit(event) {
  event.preventDefault();
  const email = document.getElementById('early-access-email').value;
  
  // Pre-fill contact form
  const messageArea = document.getElementById('message');
  messageArea.value = `Hi Nelson!

I'd like to sign up for early access to the fitness app. 
My email: ${email}

I'm excited to try out the following features:
- AI-Powered Workout Plans
- Real-time Progress Tracking
- Integration with Wearables

Please keep me updated on the development progress!`;

  // Close modal and scroll to contact form
  closeModal();
  document.getElementById('contact-form').scrollIntoView({ behavior: 'smooth' });
}

// Add animation class when modal opens
modal.addEventListener('animationend', () => {
  modal.classList.remove('fade-in');
});

// Smooth close animation
function closeModal() {
  modal.classList.add('fade-out');
  setTimeout(() => {
    modal.style.display = 'none';
    modal.classList.remove('fade-out');
    modalIframe.src = '';
    visitSiteButton.style.display = 'inline-block';
    modalTitle.innerHTML = '';
  }, 300);
}

visitSiteButton.addEventListener('click', () => {
  if (!isComingSoon && currentUrl) {
    window.open(currentUrl, '_blank');
  }
  closeModal();
});

window.onclick = function(event) {
  if (event.target === modal) {
    closeModal();
  }
};

// Countdown Timer Logic
function initCountdown() {
    const launchDate = new Date('2024-03-01T00:00:00').getTime();
    
    function updateCountdown() {
        const now = new Date().getTime();
        const distance = launchDate - now;
        
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
        
        document.getElementById('days').textContent = days.toString().padStart(2, '0');
        document.getElementById('hours').textContent = hours.toString().padStart(2, '0');
        document.getElementById('minutes').textContent = minutes.toString().padStart(2, '0');
        document.getElementById('seconds').textContent = seconds.toString().padStart(2, '0');
        
        if (distance < 0) {
            clearInterval(countdownInterval);
            document.querySelector('.countdown-timer').innerHTML = '<h3>We\'re Live!</h3>';
        }
    }
    
    updateCountdown();
    const countdownInterval = setInterval(updateCountdown, 1000);
}

// Early Access Form Handling
function handleEarlyAccessForm(event) {
    event.preventDefault();
    const emailInput = document.getElementById('early-access-email');
    const email = emailInput.value.trim();
    
    if (!email || !isValidEmail(email)) {
        showNotification('Please enter a valid email address', 'error');
        return;
    }
    
    // Here you would typically send this to your backend
    // For now, we'll just show a success message
    showNotification('Thank you! We\'ll notify you when we launch.', 'success');
    emailInput.value = '';
}

function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function showNotification(message, type = 'success') {
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.textContent = message;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.classList.add('show');
        setTimeout(() => {
            notification.classList.remove('show');
            setTimeout(() => notification.remove(), 300);
        }, 3000);
    }, 100);
}

// Initialize everything when the modal is shown
document.addEventListener('DOMContentLoaded', () => {
    const modal = document.querySelector('.coming-soon-modal');
    if (modal) {
        initCountdown();
        
        const form = document.querySelector('.early-access-form');
        if (form) {
            form.addEventListener('submit', handleEarlyAccessForm);
        }
    }
});
