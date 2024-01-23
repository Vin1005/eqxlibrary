const ploaderr = document.querySelector(".spinner-wrapper");
window.addEventListener('load', () => {
  ploaderr.style.opacity = '0';
  setTimeout(() => {
    ploaderr.style.display ='none';
  }, 1000);
});


// for tooltips
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))
// End of tooltips

const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')
const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl))