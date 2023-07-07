const faqs = document.querySelectorAll('li');

faqs.forEach((faqs) => {
  faqs.addEventListener('click', () => {
    faqs.classList.toggle('active');
  });
});
