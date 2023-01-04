// document.addEventListener('contextmenu', (event) => event.preventDefault());

// PRELOADER JS
const loader = document.getElementById('preloader');

const preloader = () => {
  loader.style.display = 'none';
};
setTimeout(preloader, 5000);

window.addEventListener('load', preloader());

// NAVBAR SCROLL UP APPEAR JS
const body = document.body;
let lastScroll = 0;

window.addEventListener('scroll', () => {
  const currentScroll = window.pageYOffset;

  if (currentScroll <= 0) {
    body.classList.remove('scroll-up');
  }

  if (currentScroll > lastScroll && !body.classList.contains('scroll-down')) {
    body.classList.remove('scroll-up');
    body.classList.add('scroll-down');
  }

  if (currentScroll < lastScroll && body.classList.contains('scroll-down')) {
    body.classList.remove('scroll-down');
    body.classList.add('scroll-up');
  }

  lastScroll = currentScroll;
});

// APPEAR ON SCROLL ANIMATION JS
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }
  });
});

const hiddenElement = document.querySelectorAll('.hidden');
hiddenElement.forEach((el) => {
  observer.observe(el);
});

// MENU ANIMATION JS
const button = document.querySelector('.right');
const menu = document.querySelector('.menu');
const menuItem = document.querySelectorAll('.menuItem');

button.addEventListener('click', () => {
  menu.classList.toggle('appear');
});

menuItem.forEach((e) => {
  e.addEventListener('click', () => {
    menu.classList.remove('appear');
  });
});

// TYPEWRITTER ANIMATION JS
class TypeWriter {
  constructor(txtElement, words, wait = 3000) {
    this.txtElement = txtElement;
    this.words = words;
    this.txt = '';
    this.wordIndex = 0;
    this.wait = parseInt(wait, 10);
    this.type();
    this.isDeleting = false;
  }

  type() {
    const current = this.wordIndex % this.words.length;
    const fullTxt = this.words[current];

    if (this.isDeleting) {
      this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
      this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`;

    let typeSpeed = 100;

    if (this.isDeleting) {
      typeSpeed /= 2;
    }

    if (!this.isDeleting && this.txt === fullTxt) {
      typeSpeed = this.wait;

      this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
      this.isDeleting = false;

      this.wordIndex++;

      typeSpeed = 300;
    }

    setTimeout(() => this.type(), typeSpeed);
  }
}

document.addEventListener('DOMContentLoaded', init);

function init() {
  const txtElement = document.querySelector('.txt-type');
  const words = JSON.parse(txtElement.getAttribute('data-words'));
  const wait = txtElement.getAttribute('data-wait');

  new TypeWriter(txtElement, words, wait);
}

// WOR BOX CARD ANIMATION JS

const handleOnMouseMove = (e) => {
  const { currentTarget: target } = e;

  const rect = target.getBoundingClientRect();
  (x = e.clientX - rect.left), (y = e.clientY - rect.top);

  target.style.setProperty('--mouse-x', `${x}px`);
  target.style.setProperty('--mouse-y', `${y}px`);
};
for (const card of document.querySelectorAll('.card')) {
  card.onmousemove = (e) => handleOnMouseMove(e);
}

// SEE MORE BUTTON JS
const moreButton = document.querySelector('.button');
const card = document.querySelectorAll('.hide');

moreButton.addEventListener('click', (e) => {
  card.forEach((e) => {
    console.log('button is clicked');
    e.classList.toggle('hide');
  });
});

// INPUT EFFECT
const input = document.getElementsByTagName('input');
const span = document.querySelectorAll('.input-text');

input.addEventListener('click', () => {
  span.forEach((e) => {
    e.classList.toggle('move-span');
  });
});
