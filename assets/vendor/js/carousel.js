document.addEventListener('DOMContentLoaded', () => {
    const track = document.querySelector('.testimonial-track');

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

    // Initial setup
    adjustAnimationDuration();

    // Update on resize
    window.addEventListener('resize', adjustAnimationDuration);

    // When animation ends, reset position instantly
    track.addEventListener('animationend', () => {
        track.style.animation = 'none';
        track.offsetHeight; // Trigger reflow
        adjustAnimationDuration();
    });

    // Pause animation on hover
    track.addEventListener('mouseenter', () => {
        track.style.animationPlayState = 'paused';
    });

    // Resume animation on mouse leave
    track.addEventListener('mouseleave', () => {
        track.style.animationPlayState = 'running';
    });

    // Pause on touch for mobile devices
    track.addEventListener('touchstart', () => {
        track.style.animationPlayState = 'paused';
    });

    // Resume on touch end
    track.addEventListener('touchend', () => {
        track.style.animationPlayState = 'running';
    });
});