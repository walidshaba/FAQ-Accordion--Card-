const questions = document.querySelector('h3');

function questToggle() {
  questions.classList.toggle(active);
}

questions.addEventListener('click', questToggle);
