const modal = document.getElementById('modal');
const modalTitle = document.getElementById('modal-title');
const modalIframe = document.getElementById('modal-iframe');
const visitSiteButton = document.getElementById('visit-site');
let currentUrl = '';
let isComingSoon = false;

function openModal(title, url, comingSoon = false) {
  isComingSoon = comingSoon;

  modal.style.display = 'block';
  modalTitle.textContent = title;

  if (isComingSoon) {
    modalIframe.style.display = 'none';
    modalTitle.innerHTML += `
    <p style="font-size: 1.2rem;">I am working to bring you this project. Stay tuned for updates!</p>
    <p style="font-size: 1.2rem;">In the meantime, check out my other projects or feel free to contact me for more information.</p>
  `;
    visitSiteButton.style.display = 'none'; 
  } else {
    // Load preview in iframe
    modalIframe.style.display = 'block';
    modalIframe.src = url;
    visitSiteButton.style.display = 'inline-block';
    currentUrl = url; 
  }
}

// Close Modal
function closeModal() {
  modal.style.display = 'none';
  modalIframe.src = ''; 
  visitSiteButton.style.display = 'inline-block'; 
  modalTitle.innerHTML = '';
}

visitSiteButton.addEventListener('click', () => {
  if (!isComingSoon && currentUrl) {
    window.open(currentUrl, '_blank');
  }
  closeModal();
});

window.onclick = function (event) {
  if (event.target === modal) {
    closeModal();
  }
};
