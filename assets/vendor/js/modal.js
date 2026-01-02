// Project Modal Functionality
(function () {
  "use strict";

  // Create modal HTML dynamically
  function createModal() {
    const modalHTML = `
      <div id="project-modal" class="project-modal" aria-hidden="true">
        <div class="modal-overlay" data-close-modal></div>
        <div class="modal-container" role="dialog" aria-modal="true" aria-labelledby="modal-title">
          <button class="modal-close" data-close-modal aria-label="Close modal">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <line x1="18" y1="6" x2="6" y2="18"/>
              <line x1="6" y1="6" x2="18" y2="18"/>
            </svg>
          </button>
          <div class="modal-content">
            <h2 id="modal-title" class="modal-title"></h2>
            <p class="modal-tech"></p>
            <div class="modal-body"></div>
          </div>
        </div>
      </div>
    `;
    document.body.insertAdjacentHTML("beforeend", modalHTML);
  }

  // Initialize modal after DOM is ready
  document.addEventListener("DOMContentLoaded", function () {
    createModal();

    const modal = document.getElementById("project-modal");
    const modalTitle = modal?.querySelector(".modal-title");
    const modalTech = modal?.querySelector(".modal-tech");
    const modalBody = modal?.querySelector(".modal-body");
    const closeButtons = modal?.querySelectorAll("[data-close-modal]");
    // Use existing view-more buttons
    const openButtons = document.querySelectorAll(".view-more");

    // Open modal
    function openModal(button) {
      if (!modal) return;

      // Get the project card
      const projectId = button.dataset.project;
      const projectCard = document.getElementById(projectId);

      if (!projectCard) return;

      // Get title and tech from the card
      const title =
        projectCard.querySelector(".project-title")?.textContent || "";
      const tech =
        projectCard.querySelector(".project-tech")?.textContent || "";
      const fullContent = projectCard.querySelector(".project-full");

      if (modalTitle) modalTitle.textContent = title;
      if (modalTech) modalTech.textContent = tech;
      if (modalBody && fullContent) {
        modalBody.innerHTML = fullContent.innerHTML;
      }

      modal.classList.add("active");
      modal.setAttribute("aria-hidden", "false");
      document.body.classList.add("modal-open");

      // Focus the close button for accessibility
      const closeBtn = modal.querySelector(".modal-close");
      if (closeBtn) closeBtn.focus();
    }

    // Close modal
    function closeModal() {
      if (!modal) return;

      modal.classList.remove("active");
      modal.setAttribute("aria-hidden", "true");
      document.body.classList.remove("modal-open");
    }

    // Event listeners for open buttons
    openButtons.forEach((button) => {
      button.addEventListener("click", function (e) {
        e.preventDefault();
        openModal(this);
      });
    });

    // Event listeners for close buttons
    closeButtons?.forEach((button) => {
      button.addEventListener("click", closeModal);
    });

    // Close on Escape key
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && modal?.classList.contains("active")) {
        closeModal();
      }
    });
  });
})();
