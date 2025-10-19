document.getElementById('contact-btn').addEventListener('click', () => {
  window.scrollTo({
    top: document.getElementById('contact').offsetTop,
    behavior: 'smooth'
  });
});
