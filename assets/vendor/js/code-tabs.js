// Code Tabs Functionality
document.addEventListener('DOMContentLoaded', function() {
    const tabButtons = document.querySelectorAll('.tab-btn');
    const codePanels = document.querySelectorAll('.code-panel');
    
    // Add event listeners to all tab buttons
    tabButtons.forEach(button => {
        button.addEventListener('click', function() {
            const targetTab = this.getAttribute('data-tab');
            
            // Remove active class from all buttons and panels
            tabButtons.forEach(btn => btn.classList.remove('active'));
            codePanels.forEach(panel => panel.classList.remove('active'));
            
            // Add active class to clicked button
            this.classList.add('active');
            
            // Show corresponding panel
            const targetPanel = document.getElementById(targetTab);
            if (targetPanel) {
                targetPanel.classList.add('active');
            }
        });
    });
    
    // Optional: Add keyboard navigation
    tabButtons.forEach((button, index) => {
        button.addEventListener('keydown', function(e) {
            let targetIndex;
            
            if (e.key === 'ArrowLeft') {
                targetIndex = index > 0 ? index - 1 : tabButtons.length - 1;
                e.preventDefault();
            } else if (e.key === 'ArrowRight') {
                targetIndex = index < tabButtons.length - 1 ? index + 1 : 0;
                e.preventDefault();
            }
            
            if (targetIndex !== undefined) {
                tabButtons[targetIndex].focus();
                tabButtons[targetIndex].click();
            }
        });
    });
});