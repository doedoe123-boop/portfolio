// Portfolio Utilities
class PortfolioUtils {
  // Debounce function for performance optimization
  static debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
      const later = () => {
        clearTimeout(timeout);
        func(...args);
      };
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  }

  // Lazy loading utility
  static lazyLoad(selector, callback) {
    const elements = document.querySelectorAll(selector);
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          callback(entry.target);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    elements.forEach(el => observer.observe(el));
  }

  // Animate on scroll utility
  static animateOnScroll() {
    const animateElements = document.querySelectorAll('.scroll-animate');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animated');
        }
      });
    }, { threshold: 0.2 });

    animateElements.forEach(el => observer.observe(el));
  }

  // Form validation utility
  static validateForm(formId) {
    const form = document.getElementById(formId);
    if (!form) return false;

    const inputs = form.querySelectorAll('input[required], textarea[required]');
    let isValid = true;

    inputs.forEach(input => {
      if (!input.value.trim()) {
        input.classList.add('error');
        isValid = false;
      } else {
        input.classList.remove('error');
      }
    });

    return isValid;
  }

  // Local storage utility
  static storage = {
    set(key, value) {
      try {
        localStorage.setItem(key, JSON.stringify(value));
      } catch (e) {
        console.warn('Could not save to localStorage:', e);
      }
    },

    get(key) {
      try {
        const item = localStorage.getItem(key);
        return item ? JSON.parse(item) : null;
      } catch (e) {
        console.warn('Could not retrieve from localStorage:', e);
        return null;
      }
    },

    remove(key) {
      try {
        localStorage.removeItem(key);
      } catch (e) {
        console.warn('Could not remove from localStorage:', e);
      }
    }
  };

  // Performance monitoring
  static performance = {
    mark(name) {
      if ('performance' in window) {
        performance.mark(name);
      }
    },

    measure(name, startMark, endMark) {
      if ('performance' in window) {
        performance.measure(name, startMark, endMark);
        const measures = performance.getEntriesByName(name);
        if (measures.length > 0) {
          console.log(`${name}: ${measures[0].duration.toFixed(2)}ms`);
        }
      }
    }
  };
}

// Initialize utilities when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  PortfolioUtils.animateOnScroll();
});